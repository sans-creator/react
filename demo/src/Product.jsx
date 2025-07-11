import "./Product.css";

function Product({ title, price,feature,fe2}) {  // Destructure the props to get title directly
  return (
    <div className="Product">
      <h2> {title}</h2>
      <p>This is a product of worth {price}.</p>
      <p> 
        {feature}
      </p>
        <p>
            {fe2?.a}
        </p>
    </div>

  );
}

export default Product;