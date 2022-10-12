
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  return (
    <div classname='app'>   
    <div class="p-2 text-white text-center sty">
      <h1>Jumbotron Example</h1>
     </div>

     <Navbar bg="warning" expand="lg">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><h5>Quienes somos</h5></Nav.Link>
            <Nav.Link class='bg' href="#action2"><h5>Contacto</h5></Nav.Link>
            <Nav.Link href="#action3"><h5>Denuncia cuidadana</h5></Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4"><h5>Internacionales</h5></NavDropdown.Item>
              <NavDropdown.Item href="#action5"><h5>Nacionales</h5></NavDropdown.Item>
              <NavDropdown.Item href="#action6"><h5>Locales</h5></NavDropdown.Item>
              <NavDropdown.Item href="#action7"><h5>Turismo</h5></NavDropdown.Item>
              <NavDropdown.Item href="#action8"><h5>Deportes</h5></NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<div name='cuerpo de pagina'>
<table width="100%" height="100%" class='tbl tbl-light'>
  <thead>
    <td></td>
    <td></td>
    <td></td>
  </thead>
  <tbody>
    <tr>
    <th class='th1'><div class='info1'>hola </div></th>
    <th class="th"><div class='info'>hola </div></th>
    <th class="th2"><div class='info1'>hola </div></th>
    </tr>
    <tr>
    <th></th>
    <th class="th" ></th>
    <th class="th1"></th>
    </tr>
  </tbody>
  <tfoot>

  </tfoot>
</table>
  
</div>

</div>

  );
}

export default App;
