import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "school",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "swim",
      day: "Feb 6th at 5:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Dance",
      day: "Feb 6th at 4:30pm",
      reminder: false,
    },
  ]);
  //add tasks
 const addTasks=(task)=>{
   console.log(task);
 }

  //Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
     <AddTasks onAdd={addTasks}/> 
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
