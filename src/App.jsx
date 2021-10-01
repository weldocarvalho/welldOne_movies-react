/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { GlobalStyle } from './GlobalStyle';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Header></Header>
    </div>
  );
}

export default App;
