import React, { useState } from 'react'
import Pagination from './Pagination'

const AddTask = () => {
    const [addTask, setAddTask] = useState([])
    const [addTaskDescription, setaddTaskDescription] = useState([])
    const [addPriority, setAddPriority] = useState([])
    const [taskName, setTaskName] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState()

    const [pageCount,setPageCount]=useState(1)
    console.log(taskName, description, priority, "check");
    const itemsPerPage=5;
    const totalitem=7;
    const handleChangePage=(page)=>{
        setPageCount(page);
        console.log(page,"page");
    }

    const data=[
        {
            name:"taskname1",
            Taskdescription:"descriptin1",
            Taskpriority:"priority1"
        },
        {
            name:"taskname2",
            Taskdescription:"descriptin2",
            Taskpriority:"priority2"
        }, {
            name:"taskname3",
            Taskdescription:"descriptin3",
            Taskpriority:"priority3"
        } ,{
            name:"taskname4",
            Taskdescription:"descriptin4",
            Taskpriority:"priority4"
        } ,{
            name:"taskname5",
            Taskdescription:"descriptin5",
            Taskpriority:"priority5"
        } ,{
            name:"taskname5",
            Taskdescription:"descriptin5",
            Taskpriority:"priority5"
        } ,{
            name:"taskname6",
            Taskdescription:"descriptin6",
            Taskpriority:"priority6"
        } ,{
            name:"taskname7",
            Taskdescription:"descriptin7",
            Taskpriority:"priority7"
        }
    ]

    const handleAddTask = () => {
        // setAddTask('')

        setAddTask([...addTask, taskName])
        setaddTaskDescription([...addTaskDescription, description])
        setAddPriority([...addPriority, priority]);
    }

    console.log(addTask, addTaskDescription, addPriority, "add");
    return (
        <div>
            <input value={taskName} onChange={(e) => setTaskName(e.target.value)} type='text' placeholder='Task Name' />
            <input value={description} onChange={(e) => setDescription(e.target.value)} type='text' placeholder='Task Description' />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <button onClick={handleAddTask}>Add</button>

            <table>
                <thead>
                    <th>
                        <td>Task Name</td>
                        <td>Task Description</td>
                        <td>Priority</td>
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {addTask.map((res) => {
                                return (
                                    <>
                                        {res}
                                    </>
                                )
                            })}
                        </td>

                        <td>
                            {addTaskDescription.map((res) => {
                                return (
                                    <>
                                        {res}
                                    </>
                                )
                            })}
                        </td>

                        <td>
                            {addPriority.map((res) => {
                                return (
                                    <>
                                        {res}
                                    </>
                                )
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>

            <table>
                <tbody>
                   {/* {
                    data.map((res)=>{
                        return(
                            <tr>
                                <td>{res.name}</td>
                                <td>{res.Taskdescription}</td>
                                <td>{res.Taskpriority}</td>
                            </tr>
                        )
                    })
                   } */}
                </tbody>
            </table>

            <Pagination data={data} itemsPerPage={itemsPerPage}/>
        </div>
    )
}

export default AddTask
