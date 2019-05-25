import React from 'react';
import {connect} from 'react-redux';
import Product from '../component/Product';
import PropTypes from 'prop-types';
import {addToCart} from './../actions/index';
import {changeMessage} from './../actions/index';
class ProductContainer extends React.Component {
    render() {
        var {AddToCart,ChangeMessage}=this.props;
        var {product}=this.props;
        return (
           <Product 
                product={product}
                AddToCart={AddToCart} 
                ChangeMessage={ChangeMessage}
           />
        );
    }

}
ProductContainer.propTypes={
    product:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            des:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
        }
        )
    ).isRequired,
    AddToCart:PropTypes.func.isRequired,
    ChangeMessage:PropTypes.func.isRequired
}
const mapStateToProps=(state)=>{
    return(
        {
            product:state.product
        }
    );
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        AddToCart:(product)=>{
            dispatch(addToCart(product,1));
        },
        ChangeMessage:(message)=>{
            dispatch(changeMessage(message))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
