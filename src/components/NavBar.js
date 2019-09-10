import React from 'react';
import styled from 'styled-components'

import SearchBar from './SearchBar'

const NavBarContainer = styled.div`
  text-align: left;
  padding: 0 25px;
  background-color: #3C3B63;
  color: #fff;
  box-sizing: border-box;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  top: 0;
  @media (min-width: 1350px) {
    padding: 0 100px;
  }
`

export default (props) => {
  return (
    <NavBarContainer>
      US News
      <SearchBar />
    </NavBarContainer>
  )
}