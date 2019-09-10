import React, { useContext } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { AppState } from '../App'


const SearchBar = styled.div`
  position: relative;
`

const SearchInput = styled.input`
  padding: 0 10px 0 40px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  height: 30px;
  color: #fff;
  outline: none;
  border: 0;
  ::placeholder{
    color: rgba(255, 255, 255, 0.42);
  }
`

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 10px;
  top: 7px;
  color: rgba(255, 255, 255, 0.42);
`

export default (props) => {
  const App = useContext(AppState)

  const onChange = event => {
    App.setState({ keyword: event.target.value })
  }
  return (
    <SearchBar>
      <Icon icon={faSearch} />
      <SearchInput placeholder="Search" onChange={onChange} />
    </SearchBar>
  )
}