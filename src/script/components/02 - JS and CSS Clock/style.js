import styled from 'styled-components';

export function commonLayout(type) {
	let height, width;
	if (type === "second"){
		height= 100;
		width= 5;
	}else if (type === "minute"){
		height = 80;
		width= 7; 
	}else{
		height= 40;
		width= 12;
	}

	return `
		position: absolute;
		width: ${width}px;
		height: ${height}px;
		background: rgba(0, 0, 0);
		transform: translateY(${height}px);
	`;
}

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;


export const HourHand = styled.div`
	${commonLayout('hour')}
	transform: translateY(${height}px) rotate(${props=>props.degree}deg);
`;

export const MinuteHand = styled.div`
	${commonLayout('minute')}
	transform: translateY(${height}px) rotate(${props=>props.degree}deg);
`;

export const SecondHand = styled.div`
	${commonLayout('second')}
	transform: translateY(${height}px) rotate(${props=>props.degree}deg);

`;