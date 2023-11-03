const baseURL = 'https://skypro-music-api.skyeng.tech';
export async function GetTracks() {
  const response = await fetch(`${baseURL}/catalog/track/all/`, { method: "GET" });
  
  if (!response.ok) {
      throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function getOneTrack({id}) {
  const response = await fetch(`${baseURL}/catalog/track/${id}`, { method: "GET" });
  if (!response.ok) {
    throw new Error("Произошла ошибка");
  }
  
  const data = await response.json();
  return data;
}

export async function getCatalog({id}) {
  const response = await fetch(`${baseURL}/catalog/selection/${id}`, { method: "GET" });
  if (!response.ok) {
    throw new Error("Произошла ошибка");
  }
  
  const data = await response.json();
  return data;
}

export async function getFavorite() {
  const response = await fetch(`${baseURL}/catalog/track/favorite/all/`, { method: "GET" });
  if (!response.ok) {
    throw new Error("Произошла ошибка");
  }
  
  const data = await response.json();
  return data;
}
