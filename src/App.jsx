import ProductForm from "./features/products/ProductForm";
import ProductListView from "./features/products/ProductListView";

const App = () => {
  return (
    <div>
      <ProductForm />
      <ProductListView />
    </div>
  );
};

export default App;
// npx json-server -p 5000 -w database/db.json

