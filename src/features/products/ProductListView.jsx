import { useEffect } from "react";
import { fetchProducts } from "./productSlice";
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
                    <h5>{product.price}</h5>

                </article>
            })
            }
        </div>
    );
};

export default ProductListView;