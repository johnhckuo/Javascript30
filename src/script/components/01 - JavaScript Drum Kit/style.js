import styled from 'styled-components';
import React from "react"

export const Container = styled.div`
	margin: 0;
	padding: 0;
	font-family: sans-serif;
	font-size: 10px;
	background: url(http://i.imgur.com/b9r5sEL.jpg) bottom center;
	background-size: cover;
	width: 100vw;
	height: 100vh;
`;

export const Keys = styled.div`
	display: flex;
	flex: 1;
	min-height: 100vh;
	align-items: center;
	justify-content: center;
`;

export const Key = styled.div`
	border: .4rem solid black;
	border-radius: .5rem;
	margin: 1rem;
	font-size: 1.5rem;
	padding: 1rem .5rem;
	transition: all .07s ease;
	width: 10rem;
	text-align: center;
	color: white;
	background: rgba(0,0,0,0.4);
	text-shadow: 0 0 .5rem black;

	transform: ${props => props.data == props.active ? "scale(1.1)" : "inherit"};
	border-color: ${props => props.data == props.active ? "#fffc600" : "inherit"};
	box-shadow: ${props => props.data == props.active ? "0 0 1rem #ffc600" : "inherit"};
`;

export const Kbd = styled.kbd`
	display: block;
	font-size: 4rem;

`;

export const Sound = styled.span`
	font-size: 1.2rem;
	text-transform: uppercase;
	letter-spacing: .1rem;
	color: #ffc600;
`;