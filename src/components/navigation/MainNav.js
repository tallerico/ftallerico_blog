import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Wrapper = styled.div`
	width: 100%;
	position: absolute;
	height: 60px;
	padding: 1em;
	z-index: 1;
	@media (max-width: 768px) {
		display: none;
	}
	a {
		color: white;
		margin-right: 30px;
		:visited {
			color: white;
		}
	}
`;

function MainNav() {
	return (
		<Wrapper>
			<Link>Home</Link>
			<Link>About</Link>
		</Wrapper>
	);
}

export default MainNav;
