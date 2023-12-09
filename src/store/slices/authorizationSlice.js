import { createSlice } from '@reduxjs/toolkit'

const AUTH_INFO = 'auth'
function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_INFO))
  } catch (error) {
    console.error(error)
    return null
  }
}
const initialState = {
  // id: 0,
  // email: '',
  // username: '',
  // first_name: '',
  // last_name: '',

  access: '',
  refresh: '',
  user: [],
}

export const authSlice = createSlice({
  name: 'authReducer',
  initialState: getAuthFromLocalStorage() ?? initialState,
  reducers: {
    setAuth: (state, action) => {
      const payload = action.payload ?? initialState

      // state.id = payload.id
      // state.email = payload.email
      // state.username = payload.username
      // state.first_name = payload.first_name
      // state.last_name = payload.last_name

      state.user = payload.user
      state.access = payload.access
      state.refresh = payload.refresh

      localStorage.setItem(AUTH_INFO, JSON.stringify(state))
    },
  },
})

export const { setAuth } = authSlice.actions
export default authSlice.reducer
