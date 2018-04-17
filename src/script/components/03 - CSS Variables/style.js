import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	background: #193549;
	color: white;
	font-family: 'helvetica neue', sans-serif;
	font-weight: 100;
	font-size: 50px;
	width: 100%;
	height: 100%;
`;

export const Controls = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
`;
export const Input = styled.input.attrs({
	min: props => props.id === "blur" ? 0 : 10,
	max: props => props.id === "spacing" ? 10 : 200,
	type: "range"
})`
	width:100px;

`;
