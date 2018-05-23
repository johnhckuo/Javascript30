import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
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
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  background: #AAA;
  padding-top: 5px;
  padding-bottom: 5px;

`;
