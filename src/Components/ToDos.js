import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDos = (props) => {
    return (
        <div className="container">
            <h3 className='text-center'>ToDo List</h3>
            {props.todos.map((todo) => {
                return <ToDoItem todo={todo} />
            })}
        </div>
    )
}
