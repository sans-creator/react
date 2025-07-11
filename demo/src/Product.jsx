import "./Product.css";

function Product({ title, price,feature}) {  // Destructure the props to get title directly
        let styles= { backgroundColor: price>100? "lightblue":"", padding: "10px", borderRadius: "5px" };

  return (
    
    <div className="Product" style={styles}> 
      <h2> {title}</h2>
      <p>This is a product of worth {price}.</p>
      {price > 100 && <p> This is an expensive product.</p>}
      <ul>
        {feature && feature.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
      
    </div>

  );
}

export default Product;