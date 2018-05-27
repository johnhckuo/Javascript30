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
    height: 25px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    &:hover{
      background: #DDD;
    }
  }
  .selected{
    background: #FAA;
  }
  .gray{
    color:#BBB;
  }
  .highLevelDate{
    width: 25%;
    height: 50px;
  }
`;
