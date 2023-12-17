import './styles/App.css';
import Card from './Card';
import Article from './Article';

function App() {
	return (
		<>
			<div className="App">
				<Article />
				<div style={{ display: 'flex', marginTop: '10px' }}>
					<Card title="Nästa match" home="MFC" away="SFC" />
					<Card title="Föregående match" home="SFC" away="GFC" score="1 - 0" />
				</div>
			</div>
		</>
	);
}

export default App;
