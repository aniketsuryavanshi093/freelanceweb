import React from 'react'

const CreateUserSteps2 = () => {
    return (
        <div className='wrapper mt-5 justify-content-start flex-column createprofile_wrapper my-4' style={{ width: "70%" }}>
            <div className='w-100 my-4'>
                <h2>
                    Got it. Now, add a title to tell the world what you do.
                </h2>
                <p>its very first thing clients see. so make it count. Stand out by describing your expertise in your own words.</p>
            </div>
            <div className='my-2 wrapper w-100 flex-column justify-content-start'>
                <p className='text-left w-100'>Your professional role</p>
                <input className='form-control mt-3' type='text' placeholder='Software Engineer | javascript | iOS' />
            </div>
        </div>
    )
}

export default CreateUserSteps2