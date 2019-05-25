import React from 'react';
import ProductItem from './ProductItem';
class Product extends React.Component {
    showProduct=(product,AddToCart,ChangeMessage)=>{
        var result=null;
        if(product.length>0){
            result=product.map(
                (product,index)=>{
                    return <ProductItem 
                                key={index} 
                                product={product} 
                                AddToCart={AddToCart}
                                ChangeMessage={ChangeMessage}
                            />
                }
            );
        }
        return result;
    }
    render() {
        var {product}=this.props;
        var {AddToCart,ChangeMessage}=this.props;
        return (
            <div className="product">
                <div className="container">
                    <h3>Products</h3>
                    <div className="prItem">
                       {this.showProduct(product,AddToCart,ChangeMessage)}
                    </div>
                </div>
            </div>
        );
    }

}

export default Product;
