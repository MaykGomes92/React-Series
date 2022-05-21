import React from "react";
import * as S from "./Styles";
import starFound from "../../assets/Star.svg";
import perfilRadius from "../../assets/aaa1.png";
import arrow from "../../assets/arrow.png";
import { CgSearch } from "react-icons/cg";
import { HiChevronDown } from "react-icons/hi";
import { GlobalStorage } from "../../Hook/GlobalContext";
import { Link } from "react-router-dom";

const Header = ({closeMenu}) => {
  const [inputOpen, setInputOpen] = React.useState(false);
  const { valueInputSearch, setValueInputSearch } =
    React.useContext(GlobalStorage);

  function abrirInput() {
    setInputOpen(!inputOpen);
  }

  return (
    <S.Header>
      <section className="leftSection">
        <img src={starFound} alt="Logo estrela site" />
        <img src={arrow} className="arrow" alt="Logo estrela site" />
        <Link to='/home'>Voltar para o Menu Principal</Link>
      </section>
      <section className="rightSection">
        <div onClick={closeMenu} className={`${inputOpen ? "animeDiv" : "divInput"}`}>
          <label for="inputSearch" onClick={abrirInput}>
            <CgSearch className={`${inputOpen ? "animeSearch" : "search"}`} />
          </label>
          {inputOpen ? (
            <input
            value={valueInputSearch}
            onChange={({target}) => setValueInputSearch(target.value)}
              id="inputSearch"
              type="text"
              className="inpText animeInput"
              placeholder="Pesquise sua série |"
            />
          ) : (
            ""
          )}
        </div>

        <img src={perfilRadius} alt="foto do perfil" />
        <HiChevronDown className="iconArrowDown" />
      </section>
    </S.Header>
  );
};

export default Header;
