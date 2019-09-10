import React from 'react';
import styled from 'styled-components'
import Moment from 'react-moment';

const Avatar = styled.div`
  padding: 10px;
  display: flex;
`

const Icon = styled.div`
  background-color: #bdbdbd;
  color: #fafafa;
  border-radius:100px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  margin-left: 10px;
`

const Title = styled.div`
  font-weight: bold;
`

const Time = styled(Moment)`
  color: rgba(0, 0, 0, 0.54);
`

export default ({ title, dateTime }) => {
  return (
    <Avatar>
      <Icon>{title[0]}</Icon>
      <Info>
        <Title>{title}</Title>
        <Time format="YYYY-MM-DD HH:mm">{dateTime}</Time>
      </Info>
    </Avatar>
  )
}