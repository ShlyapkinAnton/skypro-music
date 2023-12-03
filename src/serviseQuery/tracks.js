import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuth } from '../store/slices/authorizationSlice'

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
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
    window.location.navigate('/auth')
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

    getFavoriteTracksAll: builder.query({
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
        method: 'POST',
      }),
      invalidatesTags: [
        { type: 'Favorites', id: 'LIST' },
        { type: 'Tracks', id: 'LIST' },
      ],
    }),

    setDislike: builder.mutation({
      query: (track) => ({
        url: `catalog/track/${track.id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: [
        { type: 'Favorites', id: 'LIST' },
        { type: 'Tracks', id: 'LIST' },
      ],
    }),

    getSelections: builder.query({
      query: (id) => `catalog/selection/${id}/`,
      providesTags: (result) =>
        result
          ? [
              ...result.items.map(({ id }) => ({ type: 'Selections', id })),
              { type: 'Selections', id: 'LIST' },
            ]
          : [{ type: 'Selections', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetTracksAllQuery,
  useGetFavoriteTracksAllQuery,
  useSetLikeMutation,
  useSetDislikeMutation,
  useGetSelectionsQuery,
} = tracksQuery
