import React, { useContext } from 'react'
import '../styles/item.css'
import { ThemeContext } from './utils/ThemeContext';

const Item = ({ task, id, status }) => {

  const { deleteTask, isDarkMode, completeTask } = useContext(ThemeContext);

  return (
    <article className={(isDarkMode) ? 'item-tasks-darkmode' : 'item-tasks'}>
        <p className='task-description'>{task}</p>
        <div className='btn-container'>
          <button className={(status) ? 'btn-status-task task-complete' : 'btn-status-task'} onClick={() => completeTask(id)}>
            {
              (status) ? 'COMPLETE' : 'INCOMPLETE'
            }
          </button>
          <button className='btn-delete-task' onClick={() => deleteTask(id)}>
            X
          </button>
        </div>
    </article>
  )
}

export default Item