import React from 'react';

class Cart extends React.Component {

    render() {
        var {children}=this.props;
        localStorage.removeItem('CART');
        return (
            <div className="Cart">
                <div className="container">
                    <div className="CartItem">
                        <div className="header-item-cart">
                            <div className="itemheader">Imge</div>
                            <div className="itemheader">Name</div>
                            <div className="itemheader">Price</div>
                            <div className="itemheader">Quantity</div>
                            <div className="itemheader">ToTal</div>
                            <div className="itemheader">AcTion</div>
                        </div>
                        <div className="body-item-cart">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Cart;
