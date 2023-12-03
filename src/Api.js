const baseURL = 'https://skypro-music-api.skyeng.tech'

export async function getSignUp({ username, email, password }) {
  const response = await fetch(`${baseURL}/user/signup/`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      username: username,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
  if (!response.ok) {
    const errorData = await response.json()
    const errorMessages = Object.values(errorData).flat()
    throw new Error(errorMessages[0])
  }

  const data = await response.json()
  return data
}

export async function getSignIn({ email, password }) {
  const response = await fetch(`${baseURL}/user/login/`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
  if (!response.ok) {
    const errorData = await response.json()
    const errorMessages = Object.values(errorData).flat()
    throw new Error(errorMessages[0])
  }

  return response.json()
}
