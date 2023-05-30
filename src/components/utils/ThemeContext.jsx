import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState();
  const [tasks, setTasks] = useState([])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('dark', JSON.stringify(!isDarkMode))
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('ToDoApp')) || []
    setTasks(savedTasks)
    const mode = JSON.parse(localStorage.getItem('dark')) || false
    setIsDarkMode(mode)
  }, [])

  const addTask = (task) => {
    const newTasks = [...tasks, {id: uuidv4(), status: false, task}]
    setTasks(newTasks)
    localStorage.setItem('ToDoApp', JSON.stringify(newTasks))
  }

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
    localStorage.setItem('ToDoApp', JSON.stringify(newTasks))
  }

  const completeTask = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id == taskId) {
        task = {
          ...task,
          status: true
        }
      }
      return task
    })
    setTasks(newTasks)
    localStorage.setItem('ToDoApp', JSON.stringify(newTasks))
  }
  

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleDarkMode,
      tasks,
      addTask,
      deleteTask,
      completeTask
    }}>
      {children}
    </ThemeContext.Provider>
  );
};