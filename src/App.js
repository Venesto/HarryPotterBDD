import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import Characters from './components/Characters';

const App = () => {
  return (
    <div className="App">
      <Header name="Steven"/>
      <Form name="Grizzly"/>
      <Characters />
    </div>
  );
}

export default App;
