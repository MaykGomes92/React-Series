import React from "react";

export const GlobalStorage = React.createContext();

export const UserStorage = ({ children }) => {
  const [valueInputSearch, setValueInputSearch] = React.useState("");
  const [listaFetchContext, setListaFetchContext] = React.useState([]);
  const [serieEscolhida, setSerieEscolhida] = React.useState('');

    async function retornarListaApi(props) {
      const jsonList = await fetch(
        `https://api.tvmaze.com/search/shows?q=${props}`
      ).then((response) => response.json());
      setListaFetchContext(jsonList.map(response => response.show));
    }

  return (
    <GlobalStorage.Provider
      value={{ valueInputSearch, setValueInputSearch, listaFetchContext,retornarListaApi, setSerieEscolhida, serieEscolhida}}
    >
      {children}
    </GlobalStorage.Provider>
  );
};
