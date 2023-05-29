import React, { useContext, useState } from 'react'
import '../styles/fab.css'
import { ThemeContext } from './utils/ThemeContext'

const Fab = () => {

  const { isDarkMode, addTask } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    addTask(value)
    setIsModalOpen(false)
  }

  return (
    <>
      <div 
        className={isDarkMode ? 'fab fab-darkmode' : 'fab fab-lightmode'}
        onClick={openModal}
      >
        ADD NEW TASK
      </div>

      {isModalOpen && (
        <div className={isDarkMode ? 'modal modal-darkmode' : 'modal modal-lightmode'}>
          <div className={isDarkMode ? 'modal-content modal-content-darkmode' : 'modal-content modal-content-lightmode'}>
            <button className='btn-close' onClick={closeModal}>X</button>
            <label htmlFor="task">new task</label>
            <input type="text" name="task" id="taks" onChange={(e) => setValue(e.target.value)} />
            <button className='btn-add' onClick={handleSubmit}>ADD</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Fab