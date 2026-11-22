import { useState } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

const tasklistObj = {
  "All lists": [],
  Default: [],
  Personal: [],
  Shopping: [],
  Wishlist: [],
  Work: [],
  Finished: [],
};

function App() {
  const [tasklist, setTasklist] = useState(tasklistObj);
  const [task, setTask] = useState("All lists"); //on navbar
  const [show, setShow] = useState(false);
  const [showform, setShowform] = useState(false);
  const [finished, setFinished] = useState(false);
  const [taskdetails, setTaskdetails] = useState({
    value: "",
    notification: "",
    task: "",
  });

  const allTasks = Object.values(tasklist).flatMap((tasks) => tasks);
  console.log(finished);

  function handleClick() {
    setShow(!show);
  }

  function handleNotification(e) {
    setTaskdetails({ ...taskdetails, notification: e.target.value });
  }

  function handleValue(e) {
    setTaskdetails({ ...taskdetails, value: e.target.value });
  }

  function handleTaskchange(e) {
    setTaskdetails({ ...taskdetails, task: e.target.value });
    setTask(e.target.value);
  }

  function handleForm() {
    setShowform(!showform);
  }
  function handleformsubmit() {
    const newTasklist = { ...tasklist };
    Object.keys(newTasklist).map(
      (item) =>
        item == task && newTasklist[item].push(<p>{taskdetails.value}</p>), //update in state
      setTasklist(newTasklist),
      setTaskdetails(taskdetails),
      setShowform(!showform),
    );
  }
  function handleFinished(e) {
    setFinished(e.target.checked);
  }

  function handleTask(i) {
    const newTask = Object.keys(tasklist)[i];
    setTask(newTask);
  }

  return (
    <>
      <Navbar task={task} handleClick={handleClick} />

      <Taskpage
        show={show}
        showform={showform}
        handleForm={handleForm}
        tasklist={tasklist}
        handleformsubmit={handleformsubmit}
      />
      <Taskform
        showform={showform}
        tasklist={tasklist}
        handleValue={handleValue}
        handleformsubmit={handleformsubmit}
        task={task}
        handleNotification={handleNotification}
        taskdetails={taskdetails}
        allTasks={allTasks}
        handleTaskchange={handleTaskchange}
        finished={finished}
        handleFinished={handleFinished}
      />
      {show && <Sidebar handleTask={handleTask} tasklist={tasklist} />}
    </>
  );
}

function Navbar({ handleClick, task }) {
  return (
    <>
      <div id="nav-bar">
        <i className="fa fa-bars" aria-hidden="true" onClick={handleClick}></i>
        <div>
          <h3>Tasks</h3>
          <p>{task}</p>
        </div>

        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
    </>
  );
}

function Sidebar({ handleTask, tasklist, displayAllLists }) {
  return (
    <section id="side-bar">
      <div id="heading">
        <h3>To Do List</h3>
        <h6>By AbdulBaasit</h6>
        <hr />
      </div>
      {/*<button onclick={displayAllLists}>All lists</button>*/}
      {Object.keys(tasklist).map((t, i) => (
        <button key={i} className="menu-item" onClick={() => handleTask(i)}>
          {t}
        </button>
      ))}

      <h5>Edit</h5>
      <hr />
      <h4>Settings</h4>
      <hr />
    </section>
  );
}

function Taskpage({ showform, handleForm, handleformsubmit }) {
  return (
    <div id="task-page">
      <Addtask
        showform={showform}
        handleForm={handleForm}
        handleformsubmit={handleformsubmit}
      />
    </div>
  );
}

function Taskform({
  showform,
  tasklist,
  handleNotification,
  taskdetails,
  handleValue,
  task,
  handleformsubmit,
  allTasks,
  handleTaskchange,
  finished,
  handleFinished,
}) {
  //const [value, setValue] = useState("");
  return (
    <>
      {showform ? (
        <form id="task-form" onSubmit={handleformsubmit}>
          <p>What is to be done?</p>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter a task here"
              value={taskdetails.value}
              onChange={(e) => {
                handleValue(e);
              }}
            />
            <hr />
          </div>
          <p>Notification</p>
          <div className="input-container">
            <input
              type="date"
              value={taskdetails.notification}
              onChange={handleNotification}
            />
            <hr />
          </div>
          <p>Task List</p>
          <div className="input-container">
            <select onChange={handleTaskchange}>
              {Object.keys(tasklist).map((t, i) =>
                t == task ? (
                  <option key={i} value={t} selected>
                    {t}
                  </option>
                ) : (
                  <option key={i} value={t}>
                    {t}
                  </option>
                ),
              )}
            </select>
          </div>
        </form>
      ) : (
        <Tasks
          tasklist={tasklist}
          task={task}
          allTasks={allTasks}
          finished={finished}
          handleFinished={handleFinished}
        />
      )}
    </>
  );
}
//display the tasks on the UI
function Tasks({ tasklist, task, allTasks, finished, handleFinished }) {
  return (
    <div id="taskitem">
      {Object.keys(tasklist).map((item, index) => {
        if (item == task && index == 0) return allTasks;
        else if (item == task) {
          return tasklist[item].map((t, i) => (
            <label>
              <input
                type="checkbox"
                checked={finished}
                onChange={handleFinished}
              />
              {t}
            </label>
          ));
        }
      })}
    </div>
  );
}

function Addtask({ handleForm, showform, handleformsubmit }) {
  return (
    <>
      {showform ? (
        <button id="add_task" onClick={handleformsubmit}>
          <i className="fa fa-check" aria-hidden="true"></i>
        </button>
      ) : (
        <button id="add_task" onClick={handleForm}>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      )}
    </>
  );
}

export default App;
