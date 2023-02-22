import './App.css';
import Header from './components/Header';
import ConverterBlock from './components/ConverterBlock';
import Users from './components/Users';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <Header userNameLog="Kirill" />
      <ConverterBlock actualMoney={['EUR', 'USD', 'AZN']} />
      <Comments />
      <Users />
    </div>
  );
}

export default App;
