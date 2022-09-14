import React, { Component, useState, useEffect } from 'react'
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

function TodoItem(props) {
const completedStyle = {
  fontStyle: "italic",
  color: "#595959",
  opacity: 0.4,
  textDecoration: "line-through",
}
const {completed, title, id} = props.todo
const [ editing, setEditing] = useState(false);

const handleEditing = () => {
  setEditing(true);
}
const viewMode = {};
const editMode = {};
if(editing){
    viewMode.display = 'none'
}else{
    editMode.display='none'
}
const handleUpdateDone =event=>{
    if(event.key ==="Enter"){
        setEditing(false)
    }
}
useEffect(()=>{
    console.log("cleaning up");
},[])

    return (
      <li className={styles.item}>
          <div onDoubleClick = {handleEditing} style={viewMode}>
          <input type="checkbox" checked={completed} onChange={() => props.handleChangeProps(id)}
          className={styles.checkbox}/>
          <button onClick = {()=>props.deleteTodoProps(id)}><FaTrash style={{ color: "orangered", fontSize: "16px" }}/></button> <span style={completed ? completedStyle : null}>{title}</span>
          </div>
          <input type="text" className={styles.textInput} style={editMode} value={title} onChange={e => {
            props.setUpdate(e.target.value, id)
            }}
            onKeyDown={handleUpdateDone}
          />
        </li>
    )
  }
export default TodoItem

