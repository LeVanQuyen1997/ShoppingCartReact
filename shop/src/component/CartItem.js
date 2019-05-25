import React from 'react';
import * as Message from './../constant/Message';
class CartItem extends React.Component {
    UpdateCart = (product, quantity) => {
        this.props.UpdateProductInCart(product, quantity);
        this.props.ChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }
    DeleteProductInCart = (cart) => {
        this.props.deleteProduct(cart);
        this.props.ChangeMessage(Message.MSG_DELETE_CART_SUCCESS);
    }
    showToTal = (quantity, price) => {
        return this.ChangeMoney(price * quantity);
    }
    // cai changeMoney nay su dung de quy de tr ve ket qua no se thuc thi nhu sau
    // dau tien se la cai gia tri number ta chuyen no ve string
    // tao mot result tra ket qua ve
    // dau tien kiem tra khi cai number ma da thanh string chuoi
    // lay chuoi.length xem cai length co do dai <=3 thi return lai chinh no
    // nguoc lai thi push no ve cuoi voi 3 ki tu voi index la 0 1 2  4...
    // khi slice luu i la no lay cai start va end ma khong la end
    // nen vi du 1000 index la 0 1 2 3  thi muon lay 3 ki tu cuoi ta slice(1,4) se ra 000
    // khi result.push() thi se dua va ve duoi cung
    // tiep ta de quy xem cai money do co >3 hay khong voi gia tri moi la chuoi.slice(0,chuoi.length-3)) chuoi con lai
    ChangeMoney = (money) => {
        var result=[];
        var chuoi = money.toString();
        if(chuoi.length<=3 && chuoi.length>0){
            result.push(chuoi);
            return result[0];
        }
        else{
            result.push(chuoi.slice(chuoi.length-3,chuoi.length));
            result.unshift(this.ChangeMoney(chuoi.slice(0,chuoi.length-3)));
        }
        return result.join();
    }
    render() {
        var { cart } = this.props;
        return (
            <div>
                <hr />
                <div className="itemcart">
                    <div className="cartbody image"> <img src={cart.product.image} alt="" width="100%" /></div>
                    <div className="cartbody">{cart.product.name}</div>
                    <div className="cartbody">{this.ChangeMoney(cart.product.price)},000$</div>
                    <div className="cartbody cartQuantity">
                        <p onClick={() => this.UpdateCart(cart.product, cart.quantity + 1)}>+</p>
                        <p>{cart.quantity}</p>
                        <p onClick={() => this.UpdateCart(cart.product, cart.quantity - 1)}>-</p>
                    </div>
                    <div className="cartbody">{this.showToTal(cart.quantity, cart.product.price)},000$</div>
                    <div className="cartbody">
                        <label
                            className="label label-danger"
                            onClick={() => this.DeleteProductInCart(cart.product)}
                        >
                            Xoa
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;
