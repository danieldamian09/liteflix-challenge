import styled from "@emotion/styled";
import PlayTwo from "../Icons/PlayTwo";
import PlusTwo from "../Icons/PlusTwo";

const Container = styled.div`
	width: 100%;
	min-height: 395px;
	background: linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%);
	@media (min-width: 768px) {
		background: inherit;
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 95vh;
	}
`;

const Heading = styled.h1`
	font-size: 40px;
	text-align: center;
	margin: 0;
	letter-spacing: 12px;
	color: #64eebc;
	text-transform: uppercase;
	font-weight: bold;
	@media (min-width: 768px) {
		font-size: 76px;
		text-align: left;
		letter-spacing: 16px;
		margin-top: 1rem;
		animation: moveLeft 1s ease-in;
	}

	@media (min-width: 1600px) {
		font-size: 120px;
		line-height: 100px;
		text-align: left;
		letter-spacing: 16px;
		margin-top: 1rem;
	}

	@keyframes moveLeft {
		0% {
			opacity: 0;
			transform: translateX(-100px);
		}

		100% {
			opacity: 1;
			transform: translate(0);
		}
	}
`;

const ContainerTile = styled.div`
	width: 95%;
	margin: 0 auto;
	@media (min-width: 768px) {
		width: 100%;
	}
`;

const PreTitle = styled.p`
	font-size: 20px;
	text-align: center;
	line-height: 22px;
	margin: 0;
	letter-spacing: 4px;
	color: #fff;
	@media (min-width: 768px) {
		text-align: left;
		margin-top: 8rem;
		animation: moveDown 1s ease-in;
	}

	@keyframes moveDown {
		0% {
			opacity: 0;
			transform: translateY(-100px);
		}

		100% {
			opacity: 1;
			transform: translate(0);
		}
	}
`;

const ContainerButtons = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-end;
	}
`;

const ButtonPlay = styled.button`
	font-size: 18px;
	line-height: 22px;
	color: #fff;
	display: block;
	width: 248px;
	padding: 1.5rem;
	margin-top: 2rem;
	background: #242424;
	letter-spacing: 4px;
	border: none;
	box-sizing: border-box;
	transition-property: background-color;
	transition-duration: 0.3s;
	cursor: pointer;
	animation: moveUp 1s ease-in;

	@keyframes moveUp {
		0% {
			opacity: 0;
			transform: translateY(100px);
		}

		100% {
			opacity: 1;
			transform: translate(0);
		}
	}

	&:hover {
		background: rgba(36, 36, 36, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.5);
	}
	@media (min-width: 768px) {
		padding: 16px;
		border: 1px solid #242424;
	}
`;

const ButtonList = styled.button`
	font-size: 18px;
	line-height: 22px;
	color: #fff;
	display: block;
	width: 248px;
	padding: 1.5rem;
	margin-top: 1rem;
	letter-spacing: 4px;
	background: rgba(36, 36, 36, 0.9);
	border: 1px solid rgba(255, 255, 255, 0.5);
	box-sizing: border-box;
	transition-property: background-color;
	transition-duration: 0.3s;
	cursor: pointer;
	animation: moveUp 1s ease-in;

	@keyframes moveUp {
		0% {
			opacity: 0;
			transform: translateY(100px);
		}

		100% {
			opacity: 1;
			transform: translate(0);
		}
	}

	&:hover {
		background: #242424;
	}
	@media (min-width: 768px) {
		padding: 16px;
		margin-left: 1rem;
		background: rgba(36, 36, 36, 0.5);
		box-sizing: border-box;
	}
`;

function Title({titleMovie}) {
	return (
		<Container>
			<PreTitle>ORIGINAL DE LITEFLIX</PreTitle>
			<ContainerTile>
				<Heading>{titleMovie}</Heading>
			</ContainerTile>
			<ContainerButtons>
				<ButtonPlay>
					<PlayTwo />
					REPRODUCIR
				</ButtonPlay>
				<ButtonList>
					<PlusTwo />
					MI LISTA
				</ButtonList>
			</ContainerButtons>
		</Container>
	);
}

export default Title;
