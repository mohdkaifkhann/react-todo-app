import AddTodo from "./components/AddTodo.jsx";
import AddName from "./components/AddName.jsx";
import AddItem1 from "./components/AddItem1.jsx";
import AddItem2 from "./components/AddItem2.jsx";

function Hello(){
   return <center className="todo-cont">
    <AddName></AddName>
      <AddTodo></AddTodo>
       <div className="items-container">
      <AddItem1></AddItem1>
      <AddItem2></AddItem2>
       </div>
   </center>
      }
export default Hello;
