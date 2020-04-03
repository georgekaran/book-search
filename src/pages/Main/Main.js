import React from 'react'
import './Main.scss'

import Base from '../../components/Base/Base';
import BaseHeader from '../../components/Base/BaseHeader';
import Logo from '../../components/Logo/Logo';
import InputSearch from '../../components/InputSearch/InputSearch';

const Main = ({ children }) => {
  return (
    <div className="main-content bg-gradient-warning">
      <Base>
        <Logo />
        <InputSearch />
        <BaseHeader>Pesquisa</BaseHeader>
      </Base>
    </div>
  )
}

export default Main;