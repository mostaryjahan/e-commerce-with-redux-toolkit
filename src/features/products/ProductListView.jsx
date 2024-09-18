import { useEffect } from "react";
import { fetchProducts } from "./productSlice";
import { useDispatch } from "react-redux";

const ProductListView = () => {

    const dispatch = useDispatch()

    useEffect(() =>{
       dispatch(fetchProducts());
    }, []);



    return (
        <div>
            List of products
        </div>
    );
};

export default ProductListView;