import styled from 'styled-components';

const Tray = styled.div`
	transition: 1000ms ease-in-out;
	padding-top: 5em;
	padding-left: 1em;
	position: absolute;
	z-index: 2;
	top: 0;
	left: ${({ state }) => (state === 'entering' || state === 'entered' ? 0 : -250)}px;
	width: 200px;
	height: 300px;
	background-color: #0aa7dc;
	color: white;
`;

export default Tray;
