import styles from "./Cart.module.css";

function Cart ({cart  ,removeFromCart}) {
    //calculate total price 
    const total = cart.reduce((sum, item) => sum + item.price,0 )


return(
    <div className={styles.cartContainer}>
        <h2>Your Cart</h2>
        {cart.length === 0 ?(
            <p>Your Cart is empty.</p>
        ) : (
            <>
            <ul className={styles.cartList}>
                {cart.map((item , index) => (
                    <li key={index} className={styles.cartItem}>
                        <img src={item.image} alt={item.name}  className={styles.cartImage}/>
                        <div className={styles.cartDetails}>
                        <h4>{item.name}</h4>
                        <p>{item.price}</p>
                        </div>
                        <button className={styles.removeBtn}
                        onClick={() => removeFromCart(index)}>Remove</button>
            </li>
                ))}
                </ul>
                <h3 className={styles.total}>Total:{total}</h3>
                </>
        )}
        </div>
)
}
export default Cart;