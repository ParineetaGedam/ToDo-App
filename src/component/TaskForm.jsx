/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './TaskForm.css';
import { Tag } from './Tag';

const TaskForm = ({ setTask }) => {

    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: [],
    })

    const selectTag = (tag) => {
        if (taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev => {
                return { ...prev, tags: filterTags }
            })
        }
        else {
            setTaskData((prev) => {
                return { ...prev, tags: [...prev.tags, tag] }
            })
        }
    }

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setTaskData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(taskData)
        setTask(prev => {
            return [...prev, taskData];
        });
        setTaskData({
            task: "",
            status: "todo",
            tags: [],
        })
    };

    // const [task, setTask] = useState("")
    // const [status, setStatus] = useState("todo")

    // const handleTaskChange = (e) => {
    //     setTask(e.target.value)
    // }
    // const handleStatusChange = (e) => {
    //     setStatus(e.target.value)
    // }
    // console.log(status)
    return (
        <div>
            <header className='app_header'>
                <form onSubmit={handleSubmit}>
                    <input type='test' name="task" className='task_input' placeholder='Enter Your Task'
                        onChange={handleChange} value={taskData.task} />

                    <div className='task_form_bottom_line'>
                        <div>
                            <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")} />
                            <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
                            <Tag tagName="JavaScripts" selectTag={selectTag} selected={checkTag("JavaScripts")} />
                            <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")} />
                        </div>

                        <div>
                            <select className='task_status' name='status' onChange={handleChange} value={taskData.status}>
                                <option value="todo">To Do</option>
                                <option value="doing">Doing</option>
                                <option value="done">Done</option>
                            </select>

                            <button className='task_submit' type='submit'> + ADD </button>
                        </div>
                    </div>
                </form>
            </header>
        </div>
    )
}

export default TaskForm