import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	padding: 1em;
	z-index: 1;
	@media (max-width: 768px) {
		display: none;
	}
	a {
		color: white;
		text-decoration: none;
		margin-right: 30px;
		:visited {
			color: white;
		}
	}
`;

const LinkWrapper = styled.div`
	margin-left: auto;
`;

function MainNav() {
	return (
		<Wrapper>
			<LinkWrapper>
				<Link>Home</Link>
				<Link>About</Link>
				<Link>Contact</Link>
			</LinkWrapper>
		</Wrapper>
	);
}

export default MainNav;
