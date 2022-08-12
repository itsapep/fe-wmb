import { useState } from "react";
import { Button, Card, Container, Form} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withLoading } from "../../shared/component/WithLoading";
import MenuCRUD from "./menu_crud";
import { menu as menuModel } from "./menu_model";

export default function MenuAdd() {
    const { addNewMenu } = MenuCRUD();
    const [menu, setMenu] = useState({
        menuId : '',
        menuName: '',
        menuPrice: '',
        category: 'food',
        isValid: false
    })

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setMenu({
            ...menu,
            [key]: value
        }, validate)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {menuId, menuName, menuPrice, category} = menu;
        // props.onShowLoading(true)
        try {
            await addNewMenu(menuModel(menuId, menuName, menuPrice, category));
            // props.onCancelForm();
            // props.onShowLoading(false);
        } catch (error) {
            // props.onShowLoading(false);
            // props.onShowError(errosetState
        }
    }

    const validate = () => {
        if (menu.menuId && menu.menuName && menu.menuPrice) {
            setMenu({isValid: true})
        } else {
            setMenu({isValid: false})
        }
    }

    return (
        <Container className="p-2">
            <Card>
                <Card.Body>
                    <Card.Title>Add Menu</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Menu ID</Form.Label>
                            <Form.Control type="text" placeholder="001" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Menu Name</Form.Label>
                            <Form.Control type="text" placeholder="Fried Ice" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="2000" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select>
                                <option value='food'>Food</option>
                                <option value='beverage'>Beverage</option>
                            </Form.Select>
                        </Form.Group>
                        <div>
                            <LinkContainer to={'/main/menus'}>
                                <Button className={"w-25 m-1"} variant="warning" type="button">Cancel</Button>
                            </LinkContainer>
                            <Button className={"w-25 m-1"} type="submit" variant="primary" disabled={!menu.isValid}>Submit</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}