import Product from "./Product";

function ProductTab() {
  let features = ["phone", "pen", "tab"];
  return (
    <>
    <Product title="phone" price={10} feature={features} fe2={{a: "hi-tech", b: "expensive"}} />
    <Product title="pen" price={1} />
    <Product title="tab" price={222} />
    </>
   
  );
}
export default ProductTab;