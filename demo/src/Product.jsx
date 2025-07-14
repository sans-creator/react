import "./Product.css";
import Price  from "./Price";

function Product({ title}) {  // Destructure the props to get title directly
    let oldPrice=["100", "200", "300","400"];
    let newPrice=["80", "150", "250","500"];
  return (
    
    <div className="Product"> 
        <h2>{title}</h2>
 
      <p>Description</p>
      <Price oldPric/>
     </div>

  );
}

export default Product;