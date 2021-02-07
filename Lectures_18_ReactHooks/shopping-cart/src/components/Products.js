import productsJSON from "./products.json";
export function Products(props) {
  function addToCartClickHandler(productItem) {
    const updateCartItems = props.updateCartItems;
    const cartItemsProps = props.cartItems;
    updateCartItems(() => [...cartItemsProps, productItem]);
  }
  function renderProducts() {
    if (productsJSON !== undefined) {
      return productsJSON.result.map(function (productItem) {
        return (
          <div className="m-4" key={productItem.name}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{productItem.name}</h5>
                <p className="card-text">Price: {productItem.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCartClickHandler(productItem)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      });
    }
  }
  return (
    <div className="d-flex w-100 justify-content-center align-items-center mt-5">
      {renderProducts()}
    </div>
  );
}
