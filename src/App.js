import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import {db} from "./firebase_config";
import firebase from "firebase";
import TodoListItem from "./Todo";

function App() {

  // we save the data that user types to a variable , so that we can later push it to database
  // for this we will use hooks

  // here state is the variable and setstate is the function which updates the variable.
  // this state can't be updated without this function
  // initialState is actually th initial value for texField
  // const [state, setState] = useState(initialState);
  const [todos , setTodos] = useState([]);
  const [todoInput , setTodoInput] = useState(" ");

  // add todo to database
  // this works whenever user hits enter after writing text
  function addtodo(e) {
    e.preventDefault();         //this is to stop the page from reloading
    // console.log("add a todo");
    db
    .collection("todos")
    .add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo:todoInput,
    })
// next line is so that after we add a new todo to database , we get an empty textfield to type again
    setTodoInput("");
  };

  // we can also write above function this way
  // const addtodo = () => {
  // }


  // render data from firebase to screen
  // useEffect feature is used to render data on screen the moment we visit the page
  useEffect(() => {
    getTodos();
  }, [])  //blank to run only on first launch

  function getTodos() {
    db
    .collection("todos")
    .onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  return (
    <div className="App" style={styles.textField}>
      <Button variant="contained" color="primary">
        <h1>Let's start the show Babes 🔥</h1>
      </Button>
      <p></p>
      <div>
          <form>
            <TextField 
              id="standard-basic" 
              label="Write a to-do"
              value = {todoInput}
              onChange = {(e) => {
                setTodoInput(e.target.value);
                // console.log('this is the todo input' , e.target.value);
                // console.log(`this is the todo input ${e.target.value}`);  // another way of writing console using backtick
              }}
              style={{maxWidth: "500px" , width : "90vw"}}
            />
            <Button type = "submit" variant="contained" onClick = {addtodo} style={styles.button}>Okay!</Button>
          </form>

          {/* fetch the data and show on screen */}
          <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
            {todos.map((todo) => (
              <TodoListItem
                todo={todo.todo}
                inprogress={todo.inprogress}
                id={todo.id}
              />
            ))}
        </div>

      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  textField: {
    display: "flex",
    flexDirection : "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  // button: {
  //   display: "none",
  // },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};

export default App;
