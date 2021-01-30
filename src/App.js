import logo from './logo.svg';
import './App.css';
import ToDoInput from './Components/ToDoInput';
import ToDoList from './Components/ToDoList';
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <div className="App m-5">
      <ToDoInput></ToDoInput>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
