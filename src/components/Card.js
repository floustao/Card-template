import React from 'react';
import styled from 'styled-components';

import CardBackground from './CardBackground';
import Character from '../assets/image-victor.jpg';

const CARD_WIDTH = '19rem';
const CARD_BORDER_RADIUS = '1rem';

export default function Card({ characterInfo = {}, socialMediaInfo = [] }) {
	const { name, age, city } = characterInfo;
	return (
		<OuterContainer>
			<Banner className='background' />

			<Avatar src={Character} alt='profile picture' />

			<CharacterInfo>
				<Title>
					<Name>{name}</Name>
					<Age>{age}</Age>
				</Title>
				<City>{city}</City>
			</CharacterInfo>

			<Footer>
				{socialMediaInfo.map(({ name, count }, index) => {
					const key = `${index} - ${name}`;
					return (
						<Media key={key}>
							<Count>{count}</Count>
							<p>{name}</p>
						</Media>
					);
				})}
			</Footer>
		</OuterContainer>
	);
}

const OuterContainer = styled.div`
	border-radius: ${CARD_BORDER_RADIUS};
	width: ${CARD_WIDTH};
	position: relative;
	box-shadow: var(--bs);
	background-color: var(--white);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Banner = styled(CardBackground)`
	&.background {
		width: 100%;
		border-radius: 0.5rem 0.5rem 0 0;
	}
`;

const Avatar = styled.img`
	border-radius: 50%;
	border: 0.25rem solid var(--white);
	position: absolute;
	left: calc((${CARD_WIDTH} - 6.5rem) / 2);
	top: 5rem;
`;

const CharacterInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 3rem;
	height: 5.5rem;
`;

const Title = styled.h3`
	margin: 0;

	> span {
		padding: 0 0.5rem;
	}
`;

const Name = styled.span`
	font-weight: 600;
`;

const Age = styled.span`
	font-weight: 100;
	color: var(--grey);
`;

const City = styled.p`
	margin-bottom: 0.5rem;
	font-weight: 100;
	color: var(--grey);
`;

const Footer = styled.div`
	border-top: 1px solid var(--grey);
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-bottom: 1rem;
`;

const Media = styled.div`
	text-align: center;

	> p {
		font-size: 0.75rem;
		font-weight: 200;
		color: grey;
		letter-spacing: 1px;
		margin: 0;
	}
`;

const Count = styled.h4`
	margin-bottom: 0.5rem;
`;
