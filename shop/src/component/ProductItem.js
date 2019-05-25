import React from 'react';
import * as Message from './../constant/Message';
class ProductItem extends React.Component {
    onAddToCart=(product)=>{
        this.props.AddToCart(product);
        this.props.ChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }
    showRating(rating) {
        var result = [];
        for (var i = 1; i <=rating; i++) {
            result.push(<li key={i}><i className="fa fa-star yellow" ></i></li>);
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<li key={j+5}><i className="fa fa-star-o" ></i></li>);
        }
        return result;
    }
    render() {
        var { product } = this.props;
        return (
            <div className="item">
                <img src={product.image} alt="" />
                <div className="prBody">
                    <h4 className="prTitile">
                        {product.name}
                    </h4>
                    <ul className="prRating">
                        {this.showRating(product.rating)}
                    </ul>
                    <p className="prDes">
                        {product.des}
                    </p>
                    <div className="prFooter">
                        <span className="prPrice">{product.price}</span>
                        <span 
                            className="prAdd"
                            onClick={()=>this.onAddToCart(product)}
                        >
                            <i className="fa fa-shopping-cart"></i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductItem;
