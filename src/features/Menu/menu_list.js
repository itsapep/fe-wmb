import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import {faEraser} from "@fortawesome/free-solid-svg-icons/faEraser";
import { Component } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { withLoading } from "../../shared/component/WithLoading";
import MenuCRUD from "./menu_crud";

class MenuList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentMenus: [],
        }
        this.crud = MenuCRUD();
    }

    onGetMenu = async () => {
        this.props.onShowLoading(true);
        try {
            const response = await this.crud.showAll();
            this.props.onShowLoading(false);
            this.setState({
                currentMenus: [...response]
            })
        } catch (e) {
            this.props.onShowError(e.message);
        }
    }

    componentDidMount() {
        this.onGetMenu()
    }

    handleDelete = async (id) => {
        const result = window.confirm('Are you sure want to delete ?');
        this.props.onShowLoading(true);
        if (result) {
            try {
                await this.crud.deleteMenu(id);
                this.props.onShowLoading(false);
                await this.onGetMenu()
            } catch (error) {
                this.props.onShowError(false);
            }
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
                            this.state.currentMenus.map((menu, index) => {
                                return (
                                    <tr key={menu.menuId}>
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
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default withLoading(MenuList);