import React from 'react'
import { Outlet } from 'react-router-dom'
import "./createpost.css"

const CreateJobCOntainer = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                <Outlet />
            </div>
            <div className='wrapper justify-end w-100'>
                <button className='rounded-pill mx-2 px-2 mt-3 proceedbtn'>Next Skills</button>
            </div>
        </div>
    )
}

export default CreateJobCOntainer