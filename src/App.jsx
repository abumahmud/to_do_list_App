import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");

  return (
    <>
      <section>
        <h1>To Do List</h1>
        <h6>By AbdulBaasit</h6>
      </section>
      <hr />
      <ul>
        <li>Default</li>
        <li>Personal</li>
        <li>Shopping</li>
        <li>Wishlist</li>
        <li>Work</li>
        <li>Finished</li>
      </ul>

      <h5>Edit</h5>
      <hr />
      <h4>Settings</h4>
      <hr />
    </>
  );
}

export default App;
