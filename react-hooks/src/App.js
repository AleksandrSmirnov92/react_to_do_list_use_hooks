import AppCSS from './App.module.css';
import {Header} from "./components/header/header"
import {AddTaskMenu} from "./components/addTaskMenu/addTaskMenu"
import {Filter} from "./components/filter/filter"
import {AllTask} from "./components/allTask/allTask"
function App() {
  return (
    <div className={`${AppCSS.App} ${AppCSS.AppWrapper}`}>
     <Header/>
     <AddTaskMenu/>
     <Filter/>
     <AllTask/>
    </div>
  );
}

export default App;
