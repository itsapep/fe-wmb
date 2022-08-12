import { Container, Nav, Navbar as NavbarBS, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { LinkContainer } from "react-router-bootstrap";

const Navbar = () => {
    const { logout } = useAuth();
    return (
        <NavbarBS bg="dark" variant="dark" expand="lg">
            <Container>
                <NavbarBS.Brand href="#home">WMB</NavbarBS.Brand>
                <NavbarBS.Toggle aria-controls="basic-navbar-control"></NavbarBS.Toggle>
                <NavbarBS.Collapse id="basic-navbar-control">
                    <Nav className="me-auto">
                        <LinkContainer to={"/main/order"}>
                            <Nav.Link>Order</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/main/menus"}>
                            <Nav.Link>Menus</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/main/tables"}>
                            <Nav.Link>Tables</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Profile">
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Outlet></Outlet>
                </NavbarBS.Collapse>
            </Container>
        </NavbarBS>
    )
}

export default Navbar;