export function Header(props) {
  return (
    <nav className="navbar navbar-light bg-primary flex">
      <div className="text-center w-100 text-light d-flex">
        <div className="w-100">Shopping Cart</div>
        <div className="d-flex me-5 align-items-center ">
          <i className="fa fa-shopping-cart ms-auto me-2" />
          {props.cartItems.length}
        </div>
      </div>
    </nav>
  );
}
