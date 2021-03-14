// import { useHistory } from "react-router-dom";

export function Header() {
  // const history = useHistory();
  // function handleLogout() {
  //   localStorage.removeItem("userToken");
  //   history.push("/login");
  // }
  // function renderLogoutButton() {
  //   if (localStorage.getItem("userToken")) {
  //     return (
  //       <button
  //         className={"btn btn-danger mt-4"}
  //         onClick={() => handleLogout()}
  //       >
  //         Logout
  //       </button>
  //     );
  //   }
  // }
  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container-fluid d-flex">
        <div className="h3 text-center text-light w-75" href="#">
          Grocery App
        </div>
      </div>
    </nav>
  );
}
