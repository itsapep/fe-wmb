import { Component } from "react";
import { Container, Nav, Navbar as NavbarBS, NavDropdown, NavItem } from "react-bootstrap";

class Navbar extends Component {
    render() {
        return (
            <NavbarBS bg="dark" variant="dark" expand="lg">
                <Container>
                    <NavbarBS.Brand href="#home">WMB</NavbarBS.Brand>
                    <NavbarBS.Toggle aria-controls="basic-navbar-control"></NavbarBS.Toggle>
                    <NavbarBS.Collapse id="basic-navbar-control">
                        <Nav className="me-auto">
                            {/* <NavItem onClick={this.props.onNavigate}>
                                <Nav.Link>Menus</Nav.Link>
                            </NavItem> */}
                            <Nav.Link onClick={() => this.props.onNavigate('menus')}>Menus</Nav.Link>
                            <Nav.Link onClick={() => this.props.onNavigate('tables')}>Tables</Nav.Link>
                            <NavDropdown title="Profile">
                                <NavDropdown.Item onClick={this.props.onLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </NavbarBS.Collapse>
                </Container>
            </NavbarBS>
        )
    }
}

export default Navbar;