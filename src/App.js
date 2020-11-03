import { Button, Nav, Form, FormControl, Navbar } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Naperville Company Search</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search company name" className="mr-sm-2" />
          <Button variant="primary">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default App;