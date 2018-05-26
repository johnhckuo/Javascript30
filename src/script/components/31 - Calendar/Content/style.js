import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
	width: 100%;
  span{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13%;
    text-align: center;
    border-radius: 100%;
    cursor: pointer;
    &:hover{
      background: #DDD;
    }
  }
  .selected{
    background: #FAA;
  }
`;
