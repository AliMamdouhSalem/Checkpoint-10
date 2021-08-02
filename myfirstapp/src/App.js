import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Navbar,Container, Nav, NavDropdown} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
        <form>
          <Form.Group>
            <Form.Label> Email Adress</Form.Label>
            <Form.Control type="email" placeholder="Example@email.com" />
            <Form.Text className="text-muted">
              Please enter your email adress
            </Form.Text>
            <br>
            </br>
            <Form.Label> Username</Form.Label>
            <Form.Control type="username" placeholder="Blablablabla" />
            <Form.Text className="text-muted">
              Please enter a Username
            </Form.Text>
            <br>
            </br>
            <Form.Label> Password</Form.Label>
            <Form.Control type="password" placeholder="******" />
            <Form.Text className="text-muted">
              Please enter a password
            </Form.Text>
            <br>
            </br>
            <Form.Label> City</Form.Label>
            <Form.Control type="city" placeholder="cairo" />
            <Form.Text className="text-muted">
              Please enter your city
            </Form.Text>
            </Form.Group>
            <br>
            </br>
            <Button variant="secondary" type="submit">Submit</Button>

        </form>
      </header>
    </div>
  );
}

export default App;
