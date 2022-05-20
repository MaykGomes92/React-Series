import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './Styles'
const Button = ({texto,caminhoLink}) => {
  return (
    <S.Button>
        <Link to={caminhoLink}>{texto}</Link>
    </S.Button>
  )
}

export default Button