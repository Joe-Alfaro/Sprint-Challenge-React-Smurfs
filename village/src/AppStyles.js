import styled from 'styled-components';

export const SmurfCard = styled.div`
  display: inline-block;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
  padding: 0 0px;
  margin: 15px;
  box-shadow: 10px 10px 40px black;
  h3{
    padding: 10px;
    margin: 0;
    font-size: 3rem;
    border-bottom: 2px solid black;
  }
`

export const NavBar = styled.div`
  width: 90vw;
  padding: 0 5vw;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  h1{
    padding: 0;
    margin: 0;
    font-size: 4rem;
  }
  nav{
    width: 10vw;
    display: flex;
    justify-content: space-around;
  }
`

export const SmurfList = styled.div`
  text-align: center;
  h1{
    font-size: 5rem;
  }
`

export const StyledSmurfForm = styled.form`
  background-color: white;
  width: 400px;
  height: 600px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div{
    width: 85%;
    input {
      border: none;
      border-bottom: 1px lightgrey solid;
      width: 100%;
      &:focus{
        border-bottom: 1px black solid;
      }
    }
  }
`

export const StyledButton = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 15px;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #429EE5;
  border: 2px solid #429EE5;
  &:hover{
    color: #429EE5;
    background-color: white;
  }
`
