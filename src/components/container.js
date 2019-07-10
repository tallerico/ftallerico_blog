import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	max-width: 1180px;
	margin: 0 auto;
`;

export default ({ children }) => <Container>{children}</Container>;
