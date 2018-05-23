import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
	width: 80%;
	height: 20%;
`;

export const Arrow = styled.div`
  width: 100%;
  div:nth-child(1){
    float: left;
  }
  div:nth-child(2){
    float: right;
  }

`;

export const Date = styled.div`
  background: #AAA;
  text-align: center;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;


`;
