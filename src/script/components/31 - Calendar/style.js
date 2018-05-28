import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
	width: 30vw;
	height: 100vh;
  margin-left: auto;
  margin-right: auto;

  .inputContatiner{
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    input{
      outline: none;
      padding: 15px;
      text-align: center;
      width: 40px;
    }
  }

  h1{
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 15px;
  }
`;
