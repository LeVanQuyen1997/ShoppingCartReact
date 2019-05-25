import React from 'react';

class CartResult extends React.Component {
    showToTalAmount=(cart)=>{
        var result=null;
        for(var i=0;i<cart.length;i++){
            result+=cart[i].quantity*cart[i].product.price;
        }
        console.log(result);
         return this.ChangeMoney(result);
    }
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
        var {cart}=this.props;
        return (
            <div className="CartResult">
                <div className="resultCart">
                    <p>ToTal: </p>
                    <p>{this.showToTalAmount(cart)},000$</p>
                    <p className="continute">Continute Purchase <i className="fa fa-chevron-right"></i></p>
                </div>
            </div>
        );
    }

}

export default CartResult;
