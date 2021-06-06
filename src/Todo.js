import React from 'react';
import { ListItem, ListItemText,Button  } from '@material-ui/core';
import { db } from "./firebase_config";


export default function TodoListItem({todo , inprogress , id}) {
    // this function just toggles from inprogress to progress and vice-versa
    function toggleInProgress() {
        db
        .collection("todos")
        .doc(id)
        .update({
          inprogress: !inprogress,
        });
      }
    
    //   it will take the id to delete
      function deleteTodo() {
        db
        .collection("todos")
        .doc(id)
        .delete();
      }

    return (
        <div style={{ display: "flex" }}>
        <ListItem>
            <ListItemText
            primary={todo}
            secondary={inprogress ? "In Progress" : "Completed"}
            />
        </ListItem>

        <Button onClick={toggleInProgress}>
            {inprogress ? "Done" : "UnDone"}
        </Button>
        <Button onClick={deleteTodo}>X</Button>
        </div>
    );
}
