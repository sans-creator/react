import Product from "./Product";
import Price from "./Price";

function ProductTab() {

  return (
    <>
    <Product  title="Logitech Mx Master" idx={0} />
    <Product title="Apple Pencil" idx={1} />
    <Product title="zebronics" idx={2}/>
    <Product title="Petronics Toad" idx={3}/>    
    </>
   
  );
}
export default ProductTab;