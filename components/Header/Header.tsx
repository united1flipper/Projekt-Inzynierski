import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Discover from './Discover'
import Collections from './Collections'
import ThemeSwitcher from './ThemeSwitcher'
import Profile from './WalletConnection'
import { Navbar } from 'flowbite-react'

const Header = () => {
  return (
    <Navbar fluid rounded>
      <Logo></Logo>
      <SearchBar></SearchBar>
      <Discover></Discover>
      <Collections></Collections>
      <ThemeSwitcher></ThemeSwitcher>
      <Profile></Profile>
    </Navbar>
  )
}

export default Header