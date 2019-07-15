import React from 'react';

const Cart = (props) => {
  let cartStyle = {
    border: '1px solid black',
    position: 'absolute',
    left: '80%',
    width: '400px',
    backgroundColor: 'white',
    padding: '5px',
    zIndex: '1'
  }
  let closeCart = {
    position: 'relative',
    left: '95%',
    height: '15px',
    width: '15px'
  }
  let tax = Math.round((props.cart.numberOfItems * 1.99 + props.cart.totalPrice) * .08);
  let total = (tax + (props.cart.numberOfItems * 1.99) + props.cart.totalPrice).toFixed(2);
  return ( 
    <>
      <span onClick = {props.cartClick}>Cart| {props.cart.numberOfItems} items </span>
      <img src="./assets/images/cart.png" height = "35px" onClick = {props.cartClick}/>
      {props.cart.cartClicked ? (
        <div style = {cartStyle}>
          <img onClick = {props.cartClick} style = {closeCart} src="./assets/images/cartx.svg" />
          <h4 style = {{leftPadding: '10%'}}>Your Order</h4><hr/>
          <div>Cart Items</div>
          {props.cart.cartList.map((item, index) => <div style = {{'fontSize': '10px'}} key = {Math.random()}>{index + 1}. {item.name} Price: ${item.price}</div>)}
          <hr/>
          <div>Subtotal: ${props.cart.totalPrice}</div>
          <div>Shipping: ${props.cart.numberOfItems * 1.99}</div>
          <div>Estimated Tax: ${tax}</div>
          <hr/>
          <div><h4>Total: ${Math.round(total * 100) / 100}</h4></div>
          <a href="">Have promo code?</a>
          <div style = {{fontSize: '8px'}}>* Shipping and delivery charges are calculated at the lowest rate available. Other methods will be viewable on the next page.</div>
          <div><img onClick = {props.handleCheckout} src="./assets/images/checkoutButton.png" height = "35px" /></div>
        </div>
      ) : (<></>)}
    </>
   );
}
 
export default Cart;