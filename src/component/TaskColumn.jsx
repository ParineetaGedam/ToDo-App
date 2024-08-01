/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './TaskColumn.css';
import TaskCard from './TaskCard';
import DropArea from './DropArea';


const TaskColumn = ({ title, icon, tasks, status, handleDelete, setActiveCard, onDrop }) => {

  return (
    <section className='task_column'>
      <h2 className='task_coloum_heading'><img className="task_column_icon" src={icon} />{title}</h2>

      <DropArea onDrop={() => onDrop(status, 0)} />

      {tasks.map(
        (task, index) => task.status === status && (
          <React.Fragment key={index} >
            <TaskCard
              title={task.task}
              tags={task.tags}
              index={index}
              handleDelete={handleDelete}
              setActiveCard={setActiveCard} />
            <DropArea onDrop={() => onDrop(status, index + 1)} />
          </React.Fragment>
        )
      )}
    </section>
  )
}

export default TaskColumn