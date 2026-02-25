import './App.css';
import Button from './button';
import Box from './box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to Dog-gram</h1>
      </header>
      <section className="App-section">
        <div className="container">
                <p>
                  <Box name="fido" /> 
                </p>
                <p>
                  <Box name="Alice" />
                </p>
          </div>
          <h3>My Button</h3>
          <Button />
      </section>
    </div>
    
  );
}

export default App;
