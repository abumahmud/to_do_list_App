import { useState } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
function App() {
  const [task, setTask] = useState("");

  return (
    <>
      <Navbar />

      <button id="add_task">+</button>
    </>
  );
}

function Navbar() {
  const [show, setShow] = useState(true);

  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <div id="nav-bar">
        <i className="fa fa-bars" aria-hidden="true" onClick={handleClick}></i>
        <div>
          <h3>Tasks</h3>
          <p>All Lists</p>
        </div>

        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      {show && <Sidebar />}
    </>
  );
}

function Sidebar() {
  return (
    <section id="side-bar">
      <div id="heading">
        <h3>To Do List</h3>
        <h6>By AbdulBaasit</h6>
        <hr />
      </div>

      <ul>
        <li>
          <a href="">Default</a>
        </li>
        <li>
          <a href="">Personal</a>
        </li>
        <li>
          <a href="">Shopping</a>
        </li>
        <li>
          <a href="">Wishlist</a>
        </li>
        <li>
          <a href="">Work</a>
        </li>
        <li>
          <a href="">Finished</a>
        </li>
      </ul>

      <h5>Edit</h5>
      <hr />
      <h4>Settings</h4>
      <hr />
    </section>
  );
}

export default App;
