import React, { useState, Fragment } from 'react';
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group';
import styled from 'styled-components';
import menu from '../../assets/icons/menu.svg';
import MenuTray from './MenuTray';
import LinkList from './LinkList';

const Nav = styled.div`
	position: absolute;
	top: 0;
	z-index: 1;
	padding: 1em;
	@media (min-width: 768px) {
		display: none;
	}
`;

const MenuIcon = styled.img`
	position: relative;
	z-index: 3;
	height: 40px;
	width: 40px;
	margin-right: auto;
`;

function Navigation() {
	const [clicked, setClicked] = useState(false);

	function handleClick() {
		clicked ? setClicked(false) : setClicked(true);
	}

	return (
		<Nav>
			<ReactTransition in={clicked} timeout={500}>
				{state => (
					// state change: exited -> entering -> entered -> exiting -> exited
					<Fragment>
						<MenuIcon src={menu} onClick={handleClick} />
						<MenuTray state={state}>
							<LinkList />
						</MenuTray>
					</Fragment>
				)}
			</ReactTransition>
		</Nav>
	);
}

export default Navigation;
