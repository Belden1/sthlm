import './App.css';
import Match from './Match';
import Card from './Card';
import Header from './Header';
import Article from './Article';

function App() {
	return (
		<>
			<div className="App">
				<Article />
				<div style={{ display: 'flex', marginTop: '10px' }}>
					<Match />
					<Card />
				</div>
			</div>
		</>
	);
}

export default App;
