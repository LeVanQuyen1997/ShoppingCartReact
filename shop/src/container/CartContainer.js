import React from 'react';
import Cart from './../component/Cart';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as message  from './../constant/Message';
import CartItem from '../component/CartItem';
import CartResult from './../component/CartResult';
import {deleteProductInCart} from './../actions/index';
import {changeMessage,updateCart} from './../actions/index';
class CartContainer extends React.Component {
    showCartItem=(cart)=>{
        var {deleteProduct,ChangeMessage,UpdateProductInCart}=this.props;
        var result=message.MSG_CART_EMPTY;
        if(cart.length>0){
            result=cart.map(
                (cart,index)=>{
                    return <CartItem 
                                key={index} 
                                cart={cart}
                                index={index}
                                deleteProduct={deleteProduct}
                                ChangeMessage={ChangeMessage}
                                UpdateProductInCart={UpdateProductInCart}
                            />
                }
            )
        }
        return result;
    }
    showToTalAmount=(cart)=>{
        var result=null;
        if(cart.length>0){
            result=<CartResult cart={cart}/>
        }
        return result;
    }
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showToTalAmount(cart)}
                
            </Cart>
        );
    }

}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                des: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }
            ).isRequired,
            quantity: PropTypes.number.isRequired
        }
        )
    ).isRequired
}

const mapStateToProps = (state) => {
    return (
        {
            cart: state.cart
        }
    );
}
const mapDispatchToProps=(dispatch,props)=>{
    return(
        {
            deleteProduct:(cart)=>{
                dispatch(deleteProductInCart(cart));
            },
            ChangeMessage:(message)=>{
                dispatch(changeMessage(message))
            },
            UpdateProductInCart:(product,quantity)=>{
                dispatch(updateCart(product,quantity));
            }
        }
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);