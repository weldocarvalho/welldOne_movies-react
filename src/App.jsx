/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { GlobalStyle } from './GlobalStyle';

import Header from './components/Header';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
