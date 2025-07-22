import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  const [counter, setcounter] = useState(0);

  function increment() {
    setcounter(counter + 1);
  }
  function decrement() {
    setcounter(counter - 1);
  }

  function refresh(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={refresh}>
        <Button variant="outline-primary" onClick={increment}>
          increment
        </Button>
        <Button variant="outline-secondary" onClick={decrement}>
          decrement
        </Button>

        <p>my counter is {counter}</p>
      </form>
    </div>
  );
}

export default App;
