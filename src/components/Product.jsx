import styles from './Product.module.css';
import tshirt from '../assets/t-shirt.jpg';
import shoes from '../assets/shoes.jpg';
import watch from '../assets/watch.jpg';
import bags from '../assets/bags.jpg';
import jewelry from '../assets/jewelry.jpg';
import kurti from '../assets/kurti.jpg';
import sadi from '../assets/sadi.jpg';
import sunglasses from '../assets/sunglasses.jpg';

function Products ({ addToCart }) {
  const productList = [
    {
    id: 1,
    name: "T-Shirt",
    price: 5000,
    image: tshirt},
    {
    id: 2,
    name: "Shoes",
    price: 1000,
    image: shoes},
    {
    id: 3,
    name: "Watch",
    price: 500,
    image: watch},
   {
    id: 4,
    name: "Bags",
    price: 4000,
    image: bags},
      {
    id: 5,
    name: "Jewelry",
    price: 500,
    image: jewelry},
      {
    id: 6,
    name: "Kurti",
    price: 500,
    image: kurti},
      {
    id: 7,
    name: "Sadi",
    price: 7000,
    image: sadi},
      {
    id: 8,
    name: "Sunglasses",
    price: 2000,
    image: sunglasses},
]

return (
  <div className={styles.productsContainer}>
    <h2>Products</h2>
    <div className={styles.productGrid}>
      {productList.map((product,index) => (
        <div key={index} className={styles.productCard}>
          {/* product image*/}
          <img src={product.image} alt={product.name} className={styles.productImage}/>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add To Cart </button>
          </div>
      ))}

    </div>
  </div>
)
 }
  export default Products;
