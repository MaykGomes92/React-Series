export const API_KEY = "6701d1e498fbe7fd0293b5d88571d651";
export const API_URL = "https://api.themoviedb.org/3/";

export function RETORNAR_DETAILS(id) {
  return {
    url: `${API_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`,
  };
}

export function MOVIES_MENU(name) {
  return {
    url: `${API_URL}search/tv?api_key=${API_KEY}&page=1&query=${name}`,
  };
}


/*
01 = Vai retornar nome do episódio, numero do episódio, sinopse, foto, season do episódio, temporada. Você vai ter que passar sua key, NUMERO da season que você quer e id da série.
https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}?api_key=<<api_key>>&language=en-US 

02 = Vai retornar as séries mais populares, vai conter nome, wallpaper, pontuação, sinopse, id.
https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1

03 = Vai retornar o link/provedor do id da série em questão, onde assistir ao clique, etc...
https://api.themoviedb.org/3/tv/{tv_id}/watch/providers?api_key=<<api_key>>  
*/