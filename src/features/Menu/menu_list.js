import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import {faEraser} from "@fortawesome/free-solid-svg-icons/faEraser";
import { Component } from "react";
import { Button, Container, Table } from "react-bootstrap";
import MenuAdd from "./menu_add";

class MenuList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: []
        }
    }

    componentDidMount() {
        this.setState({
            menus: MenuAdd.showAll()
        })
    }

    handleDelete = (id) => {
        const result = window.confirm('Are you sure want to delete ?');
        if (result) {
            MenuAdd.deleteMenu(id);
            this.setState({
                menus: MenuAdd.showAll()
            })
        }
    }

    render() {
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
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.menus.map((menu, index) => {
                                return <tr key={menu.menuId}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{menu.menuName}</td>
                                    <td>{menu.menuPrice.toLocaleString()}</td>
                                    <td style={{textAlign: "center"}}>
                                        <Button size="sm" variant="danger" onClick={() => this.handleDelete(menu.menuId)}>
                                            <FontAwesomeIcon icon={faEraser}/>
                                            <span className="p-2">Delete</span>
                                        </Button>
                                    </td>
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