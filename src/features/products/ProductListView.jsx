import { useEffect } from "react";
import { deleteProduct, fetchProducts } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductListView = () => {
    const {products, error, isLoading } = useSelector(state => state.productsR);
    // console.log(products);
    const dispatch = useDispatch();

    useEffect(() =>{
       dispatch(fetchProducts());
    }, [dispatch]);


    return ( 
        <div>
            {isLoading && <p>Loading products............</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && products && products.length>0  &&
            products.map(product => {
              
                return  <article key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Category: {product.category}</p>
                    <h5>Price: {product.price}</h5>
                    <button onClick={()=> dispatch(deleteProduct(product.id))}>Delete</button>

                </article>
            })
            }
        </div>
    );
};

export default ProductListView;