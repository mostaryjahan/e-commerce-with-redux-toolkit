
const ProductForm = () => {
    return (
        <form>
            <div>
                <label>Title</label>
                <input name="title" value={productSlice.title} onChange={handleChange} />
            </div>
            <div>
                <label>Price</label>
                <input name="price" value={productSlice.price} onChange={handleChange} />
            </div>
            <div>
                <label>Description</label>
                <textarea name="description" id=""></textarea>
                
            </div>
        </form>
    );
};

export default ProductForm;