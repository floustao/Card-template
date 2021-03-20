import React from 'react';
import styled from 'styled-components';

import TopPattern from '../assets/bg-pattern-top.svg';
import BottomPattern from '../assets/bg-pattern-bottom.svg';

export default function Background() {
	return (
		<Wrapper>
			<TopLeftImage
				src={TopPattern}
				alt='' // decoration
			/>
			<BottomRightImage
				src={BottomPattern}
				alt='' // decoration
			/>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	overflow: hidden;
	width: 100vw;
	height: 100vh;

	background-color: var(--blue);
`;

const TopLeftImage = styled.img`
	position: absolute;
	bottom: 33%;
	right: 50%;
`;

const BottomRightImage = styled.img`
	position: absolute;
	top: 33%;
	left: 50%;
`;
