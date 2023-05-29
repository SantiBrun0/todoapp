import React, { useContext } from 'react'
import '../styles/tasks.css'
import { ThemeContext } from './utils/ThemeContext'
import Item from './Item';

const Tasks = () => {

  const { isDarkMode, tasks } = useContext(ThemeContext);

  const tasksComplete = tasks.filter(task => task.status == true)
  const tasksIncomplete = tasks.filter(task => task.status == false)
console.log(tasksComplete);
  return (
    <section className={isDarkMode ? 'tasks-darkmode' : 'tasks'}>
      {
        tasksIncomplete.map(task => <Item task={task.task} status={task.status} id={task.id} key={task.id}/>)
      }

      {
        (tasksComplete.length > 0) ?
          <h2 className='title-tasks-complete'>Completed tasks</h2>
        :
          ''
      }

      {
        tasksComplete.map(task => <Item task={task.task} status={task.status} id={task.id} key={task.id}/>)
      }
    </section>
  )
}

export default Tasks