import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let orderTotalCost = 0
      let totalCartItems = 0
      cartList.forEach(element => {
        totalCartItems += 1
        orderTotalCost += element.price * element.quantity
      })

      return (
        <div className="cart-summery-container">
          <div className="price-items-count-container">
            <h1 className="orders-total-heading">
              Order Total:<span className="amount">Rs {orderTotalCost}/-</span>
            </h1>
            <p className="items-in-cart">{totalCartItems} items in cart</p>
            <button type="button" className="check-out-button">
              Checkout
            </button>
          </div>
          <button type="button" className="check-out-button-small">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
