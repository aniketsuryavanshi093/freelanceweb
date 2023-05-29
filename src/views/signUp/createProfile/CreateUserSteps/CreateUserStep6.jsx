/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import UserCard from '../../../../components/UserCard/UserCard'

const CreateUserStep6 = () => {
    return (
        <div className='wrapper createprofile_wrapper flex-wrap-reverse my-4'>
            <div className='div1'>
                <div className='my-3'>
                    <h2 >Great! Now write a bio to tell the world about yourself.</h2>
                    <p className='my-2'>Help people get to know you at a glance. what work are you best at? Tell them clearly, using paragraphs or bullets point.</p>
                </div >
                <div className='my-2 wrapper w-100 flex-column justify-content-start'>
                    <p className='text-left w-100'>Your Overview</p>
                    <textarea className='form-control mt-3' placeholder='Enter you top skills , experience and interests. this is one of the first thing clients will see on your profile. ' />
                </div>
            </div >
            <UserCard />
        </div >
    )
}

export default CreateUserStep6