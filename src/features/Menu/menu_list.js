import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { Button, Container, Table } from "react-bootstrap";
import MenuAdd from "./menu_add";

class MenuList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const menus = MenuAdd.showAll();
        return (
            <Container className="p-3">
                <div className="d-flex justify-content-between">
                    <h3>Menus</h3>
                    <Button size="sm" onClick={this.props.onNavigateToForm}>
                        <FontAwesomeIcon icon={faAdd}/>
                        <span className={"p-2"}>Add Menu</span>
                    </Button>
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Menu Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menus.map((menu, index) => {
                                return <tr key={menu.menuId}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{menu.menuName}</td>
                                    <td>{menu.menuPrice.toLocaleString()}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default MenuList;