import styled from 'styled-components';
import React from "react"

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const Menu = styled.ul`
  position: absolute;
  list-style-type: none;
  width: 6vw;
  height: 100vh;
  background: white;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: transform 1s;
  transform: ${props => props.isActive ? "translateX(0)" : "translateX(-6vw)"}
`;

export const List = styled.li`
  float: left;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Expand = styled.button`
  position: absolute;
`;
