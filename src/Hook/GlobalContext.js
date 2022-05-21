import React from "react";
import { API_KEY } from "../API";
export const GlobalStorage = React.createContext();

export const UserStorage = ({ children }) => {
  const [valueInputSearch, setValueInputSearch] = React.useState("");
  const [listaFetchContext, setListaFetchContext] = React.useState([]);
  const [serieEscolhida, setSerieEscolhida] = React.useState("");

  async function retornarListaApi(props) {
    const jsonList = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    ).then((response) => response.json());
    setListaFetchContext(jsonList.results);
  }

  return (
    <GlobalStorage.Provider
      value={{
        valueInputSearch,
        setValueInputSearch,
        listaFetchContext,
        retornarListaApi,
        setSerieEscolhida,
        serieEscolhida,
      }}
    >
      {children}
    </GlobalStorage.Provider>
  );
};
