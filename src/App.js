import GlobalStyles from './shared/GlobalStyles';
import Homepage from './components/Homepage';

export default function App() {
	return (
		<div>
			<GlobalStyles />
			<main>
				<Homepage />
			</main>
		</div>
	);
}
