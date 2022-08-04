import './order_view.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDollyFlatbed, faMugHot, faBowlFood} from "@fortawesome/free-solid-svg-icons";
import { Component } from 'react';
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import MenuCRUD from "../Menu/menu_crud";
import {addFBMenu} from "../Menu/state/MenuAction";
import {addOrder, clearOrder} from "./state/OrderAction";
import { withLoading } from '../../shared/component/WithLoading';
import { Container } from 'react-bootstrap';



class OrderView extends Component {
    constructor(props) {
        super(props);
        this.crud = MenuCRUD();
        this.state = {
            menuList: [],
            isShowingQty: false,
            menuSelected: {},
            qty: 1

        }
    }

    handleClearOrder = () => {
        this.props.clearOrder();
    }

    componentWillUnmount() {
        this.handleClearOrder();
    }

    onGetMenus = async () => {
        this.props.onShowLoading(true)
        try {
            const foods = await this.crud.getMenuByCategory('food');
            const beverages = await this.crud.getMenuByCategory('beverage');
            this.props.addFBMenu(foods, beverages);
            console.log(foods);
            console.log(beverages);
            this.props.onShowLoading(false);
        } catch (e) {
            this.props.onShowError(e.message);
        }
    }

    componentDidMount() {
        this.onGetMenus();
    }

    handleGetFoodMenu = (category) => {
        console.log(`find menus...`);
        if (category === 'food') {
        console.log(`find food...`);           
            this.setState({
                menuList: this.props.menus.foods
            })

        }
        if (category === 'beverage') {
        console.log(`find beverage...`);           
            this.setState({
                menuList: this.props.menus.beverages
            })
        }
    }
    handleShowingQty = (menu) => {
        this.setState({
            isShowingQty: !this.state.isShowingQty,
            menuSelected: menu
        })
    }
    handleAddOrder = () => {
        this.props.addOrder(this.state.menuSelected, this.state.qty);
        this.setState({
            isShowingQty: false
        })
    }

    handleChangeQty = (e) => {
        const qty = e.target.value;
        if (qty > 0) {
            this.setState({qty: e.target.value})
        } else {
            this.setState({qty: 1})
        }
    }

    render() {
        return (
            <Container className='p-3 d-flex flex-row vh-100'>
                <div className='order-list-container w-25 vh-100'>
                    {/* <OrderList/> */}
                    <div>
                        {
                            this.props.order.orderItems.map((order, index) => {
                                return (
                                    <div key={index} className='order-item'>
                                        <div>{order.qty} {order.menu.menuName}</div>
                                        <div>{order.menu.menuPrice * order.qty}</div>
                                    </div>)
                            })
                        }
                        {this.props.order.orderItems.length > 0 ? <>
                            <div
                                className='order-total'>
                                <div>Total</div>
                                {this.props.order.total}
                            </div>
                            <br/>
                            <div className='order-action bg-primary text-center text-white'>Order</div>
                            <div className='cancel-action bg-warning text-center' onClick={this.handleClearOrder}>Cancel</div>
                        </> : <div className='order-list-empty'>
                            <FontAwesomeIcon icon={faDollyFlatbed}/>
                            <div>No Items</div>
                        </div>}
                    </div>
                </div>
                <div className='order-menu-list-container d-flex flex-column w-75 vh-100'>
                    {/* <OrderMenu/> */}
                    <div className='d-flex flex-wrap'>
                        <div className='menu-header bg-secondary text-wrap text-white m-1 p-3' onClick={() => this.handleGetFoodMenu('food')}>
                        <FontAwesomeIcon icon={faBowlFood} />
                        <span>Food</span>
                        </div>
                        <div className='menu-header bg-secondary text-wrap text-white m-1 p-3' onClick={() => this.handleGetFoodMenu('beverage')}>
                        <FontAwesomeIcon icon={faMugHot} />
                        <span className='ml-1'>Beverage</span>
                        </div>
                    </div>
                    <div style={{borderBottom:'3px solid gainsboro',margin:'8px'}}></div>
                    <div className='menu-item-container d-flex flex-wrap'>
                        {
                            this.state.menuList.map((menu) => {
                                return (<div className='menu-item' onClick={() => this.handleShowingQty(menu)}
                                            key={menu.menuId}>{menu.menuName}</div>)
                            })
                        }
                    </div>
                    {
                        this.state.isShowingQty && 
                        // <OrderQty onAddOrder={this.handleAddOrder} onCancel={this.handleShowingQty}/>
                        <div className='order-qty-container'>
                            <div className='order-qty-content'>
                                <div className='order-qty'>
                                    <label>Qty </label>
                                    <input className='order-qty-form-input' type='number' value={this.state.qty} onChange={this.handleChangeQty}/>
                                </div>
                                <div className='order-qty-button-group'>
                                    <button style={{flexGrow:1}} onClick={this.handleAddOrder}>Add</button>
                                    <button style={{flexGrow:1}} onClick={this.handleShowingQty}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </Container>
        )
    }
}

const mapDispatchToProps = {
    addFBMenu, addOrder, clearOrder
}

const mapStateToProps = state => {
    return {
        menus: state.menuReducer,
        order: state.orderReducer,
    }
}

OrderView.propTypes = {title: PropTypes.any}

export default connect(mapStateToProps, mapDispatchToProps) (withLoading(OrderView));