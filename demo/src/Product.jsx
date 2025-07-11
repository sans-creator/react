import "./Product.css";

function Product({ title, price =1}) {  // Destructure the props to get title directly
  return (
    <div className="Product">
      <h2> {title}</h2>
      <p>This is a product of worth {price}.</p>
    </div>
  );
}

export default Product;