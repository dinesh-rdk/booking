import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        RBOSCH
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/booking">
          Booking
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
