import styled from 'styled-components';

export function commonLayout(height, width, degree) {
	return `
		position: absolute;
		width: ${width}px;
		height: ${height}px;
		background: rgba(0, 0, 0);
		transform: translateY(-${height/2}px) rotate(${degree}deg);
		transform-origin: 50% 100%;
		border-radius: 10px;
		transition: all 0.05s;
		transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
	`;
}

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background:#018DED url(http://unsplash.it/1500/1000?image=881&blur=50);
	background-size:cover;

`;


export const HourHand = styled.div.attrs({
	height: 80,
	width: 6,
})`
	${props=> commonLayout(props.height, props.width, props.transform)}
`;

export const MinuteHand = styled.div.attrs({
	height: 100,
	width: 4,
})`
	${props=> commonLayout(props.height, props.width, props.transform)}
`;

export const SecondHand = styled.div.attrs({
	height: 150,
	width: 2,
})`
	${props=> commonLayout(props.height, props.width, props.transform)}

`;

export const Center = styled.div`
	position: absolute;
	width: 10px;
	height: 10px;
	border-radius: 100%;
	background: black;
`;

export const Clock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
	height: 400px;
	border-radius: 100%;
	border: 2px solid #000000;
`;
