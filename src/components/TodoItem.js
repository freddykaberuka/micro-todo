import React, { Component } from 'react'

function TodoItem(props) {
    return (
      <li>
          <input type="checkbox" checked={this.props.todo.completed}/>{props.todo.title}
        </li>
    )
  }
export default TodoItem

