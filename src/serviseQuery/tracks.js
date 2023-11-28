import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuth } from '../store/slices/authorizationSlice'

/**
 * baseQueryWithReauth – это наша кастомная обертка над fetchBaseQuery, которая умеет обновлять access токен если запрос вернул 401 код.
 * Эта функция подразумевает, что access и refresh токены хранятся в redux сторе auth.
 *
 * args - это параметры конкретного запроса, там лежит url, method и другие параметры запроса
 * api и extraOptions - это доп. параметры с хелперами
 */

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: ' https://skypro-music-api.skyeng.tech',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access
      // console.debug('Использую токен из стора', { token })
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  })

  const result = await baseQuery(args, api, extraOptions)
  // console.debug('Результат первого запроса', { result })
  if (result?.error?.status !== 401) {
    return result
  }

  const forceLogout = () => {
    console.debug('Принудительная авторизация!')
    api.dispatch(setAuth(null))
  }

  const { auth } = api.getState()
  // console.debug('Данные пользователя в сторе', { auth })

  if (!auth.refresh) {
    return forceLogout()
  }

  const refreshResult = await baseQuery(
    {
      url: '/user/token/refresh/',
      method: 'POST',
      body: {
        refresh: auth.refresh,
      },
    },
    api,
    extraOptions
  )

  // console.debug('Результат запроса на обновление токена', { refreshResult })

  if (!refreshResult.data.access) {
    return forceLogout()
  }

  api.dispatch(setAuth({ ...auth, access: refreshResult.data.access }))
  const retryResult = await baseQuery(args, api, extraOptions)
  if (retryResult?.error?.status === 401) {
    return forceLogout()
  }
  return retryResult
}

export const tracksQuery = createApi({
  reducerPath: 'tracksQuery',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Tracks', 'Favorites'],

  endpoints: (builder) => ({
    getTracksAll: builder.query({
      query: () => '/catalog/track/all/',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tracks', id })),
              { type: 'Tracks', id: 'LIST' },
            ]
          : [{ type: 'Tracks', id: 'LIST' }],
    }),

    getFavouriteTracksAll: builder.query({
      query: () => 'catalog/track/favorite/all/',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tracks', id })),
              { type: 'Tracks', id: 'LIST' },
            ]
          : [{ type: 'Tracks', id: 'LIST' }],
    }),

    setLike: builder.mutation({
      query: (track) => ({
        url: `catalog/track/${track.id}/favorite/`,
        method: "POST",
      }),
      invalidatesTags: [
        { type: "Favorites", id: "LIST" },
        { type: "Tracks", id: "LIST" },
      ],
    }),

    setDislike: builder.mutation({
      query: (track) => ({
        url: `catalog/track/${track.id}/favorite/`,
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "Favorites", id: "LIST" },
        { type: "Tracks", id: "LIST" },
      ],
    }),

    getSelections: builder.query({
      query: (id) => `catalog/selection/${id}/`,
      providesTags: (result) =>
        result
          ? [
              ...result.items.map(({ id }) => ({ type: "Selections", id })),
              { type: "Selections", id: "LIST" },
            ]
          : [{ type: "Selections", id: "LIST" }],
    }),

  }),
})

export const { useGetTracksAllQuery, useGetFavouriteTracksAllQuery, useSetLikeMutation, useSetDislikeMutation, useGetSelectionsQuery } = tracksQuery
