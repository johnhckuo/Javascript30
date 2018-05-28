import styled from 'styled-components';

export const Container = styled.div`
  width: 81%;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
`;

export const Arrow = styled.div`
  width: 100%;
  cursor: pointer;
  div:nth-child(1){
    float: left;
  }
  div:nth-child(2){
    float: right;
  }

`;

export const Date = styled.div`
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  background: #AAA;
  padding-top: 5px;
  padding-bottom: 5px;

`;
