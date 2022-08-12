import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import {faEraser} from "@fortawesome/free-solid-svg-icons/faEraser";
import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import MenuCRUD from "./menu_crud";
import { LinkContainer } from "react-router-bootstrap";


export default function MenuList () {
    const { showAll, deleteMenu } = MenuCRUD();
    const [currentMenus, setCurrentMenus] = useState([])

    const onGetMenu = async () => {
        // this.props.onShowLoading(true);
        try {
            const response = await showAll();
            // this.props.onShowLoading(false);
            setCurrentMenus(
                [...response]
            )
        } catch (e) {
            // this.props.onShowError(e.message);
        }
    }

    const handleDelete = async (id) => {
        const result = window.confirm('Are you sure want to delete ?');
        // this.props.onShowLoading(true);
        if (result) {
            try {
                await deleteMenu(id);
                // this.props.onShowLoading(false);
                await onGetMenu()
            } catch (error) {
                // this.props.onShowError(false);
            }
        }
    }

    return (
        <Container className="p-3">
            <div className="d-flex justify-content-between">
                <h3>Menus</h3>
                <LinkContainer to={'/main/menus/new'}>
                    <Button size="sm">
                        <FontAwesomeIcon icon={faAdd}/>
                        <span className={"p-2"}>Add Menu</span>
                    </Button>
                </LinkContainer>
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
                        currentMenus.map((menu, index) => {
                            return (
                                <tr key={menu.menuId}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{menu.menuName}</td>
                                    <td>{menu.menuPrice.toLocaleString()}</td>
                                    <td style={{textAlign: "center"}}>
                                        <Button size="sm" variant="danger" onClick={() => handleDelete(menu.menuId)}>
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
    )
}