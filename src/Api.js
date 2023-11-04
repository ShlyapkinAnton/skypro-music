const baseURL = 'https://skypro-music-api.skyeng.tech'
export async function GetTracks() {
  const response = await fetch(`${baseURL}/catalog/track/all/`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }

  const data = await response.json()
  return data
}

export async function getOneTrack({ id }) {
  const response = await fetch(`${baseURL}/catalog/track/${id}`, {
    method: 'GET',
  })
  if (!response.ok) {
    throw new Error('Произошла ошибка')
  }

  const data = await response.json()
  return data
}

export async function getCatalog({ id }) {
  const response = await fetch(`${baseURL}/catalog/selection/${id}`, {
    method: 'GET',
  })
  if (!response.ok) {
    throw new Error('Произошла ошибка')
  }

  const data = await response.json()
  return data
}

export async function getFavorite() {
  const response = await fetch(`${baseURL}/catalog/track/favorite/all/`, {
    method: 'GET',
  })
  if (!response.ok) {
    throw new Error('Произошла ошибка')
  }

  const data = await response.json()
  return data
}

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
  // getToken(email, password)
  // .then((response) => {
  //   if (!response.ok) {
  //     const errorData = response.json()
  //     const errorMessages = Object.values(errorData).flat()
  //     throw new Error(errorMessages[0])
  //   }
  //   let data = response.json();
  //   console.log("dataToken",data)
  //   return data
  // })
  // .then((data) => {
  //   localStorage.setItem('access', data.access)
  // })
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
  const data = await response.json()
  return data
}

export async function getToken({ email, password }) {
  const response = await fetch(`${baseURL}/user/token/`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).catch((error) => {
    alert(error.message)
  })
  return response
}
