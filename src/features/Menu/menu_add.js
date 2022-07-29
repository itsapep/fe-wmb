import { Component } from "react";
import { Button, Card, Container, Form} from "react-bootstrap";
import menu from "./menu";


let menus = [
    menu('001', 'Nasi Putih', 3000),
    menu('002', 'Nasi Merah', 6000),
    menu('003', 'Nasi Kuning', 10000),
];
class MenuAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuId : '',
            menuName: '',
            menuPrice: '',
            isValid: false
        }
    }

    static showAll = () => {
        return menus;
    }

    static deleteMenu = (menuId) => {
        const newListMenus = menus.filter(data => data.menuId !== menuId);
        while (menus.length > 0) {
            menus.pop();
        }
        for (let i = 0; i < newListMenus.length; i++) {
            menus.push(newListMenus[i])
        }
    }

    addNewMenu = (newMenu) => {
        menus.push(newMenu);
    }

    handleChangeId = (e) => {
        this.setState({
            menuId: e.target.value
        }, this.validate)
    }

    handleChangeName = (e) => {
        this.setState({
            menuName: e.target.value,
        }, this.validate)
    }

    handleChangePrice = (e) => {
        this.setState({
            menuPrice: e.target.value,
        }, this.validate)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {menuId, menuName, menuPrice} = this.state;
        this.addNewMenu(menu(menuId, menuName, menuPrice));
        this.props.onCancelForm();
    }

    validate = () => {
        if (this.state.menuId && this.state.menuName && this.state.menuPrice) {
            this.setState({isValid: true})
        } else {
            this.setState({isValid: false})
        }
    }
    
    render() {
        return (
            <Container className="p-2">
                <Card>
                    <Card.Body>
                        <Card.Title>Add Menu</Card.Title>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Menu ID</Form.Label>
                                <Form.Control type="text" placeholder="001" onChange={this.handleChangeId}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Menu Name</Form.Label>
                                <Form.Control type="text" placeholder="Fried Ice" onChange={this.handleChangeName}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="2000" onChange={this.handleChangePrice}/>
                            </Form.Group>
                            <div>
                                <Button className={"w-25 m-1"} variant="warning" type="button" onClick={this.props.onCancelForm}>Cancel</Button>
                                <Button className={"w-25 m-1"} type="submit" variant="primary" disabled={!this.state.isValid}>Submit</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default MenuAdd;