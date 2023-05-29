/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { USERDUMMY } from '../../assets/images'

const UserCard = () => {
    return (
        <div className='div2 wrapper mx-3 p-3 flex-column rounded-lg'>
            <div className='cardwrapper'>
                <div className='carduserimg position-relative'>
                    <img className='rounded-circle' src={USERDUMMY}></img>
                    <div className='userimgoverlay rounded-circle wrapper' >
                        <i className="fa-regular fa-star" style={{ color: "white" }}></i>
                    </div>
                </div>
            </div>
            <h4 className='mb-0'>Sasheen M.</h4>
            <p >Customer Experience Consultant</p>
            <div className='wrapper mt-1 justify-content-between'>
                <div className='wrapper mx-2 '>
                    <i className="fa-regular fa-star"></i>
                    <p className='mx-1 text-small' > 5.0 </p>
                </div>
                <p className='text-small'> $65.00/hr</p>
                <div className='wrapper mx-2'>
                    <i className="fa-solid fa-briefcase"></i>
                    <p className='mx-1 text-small'> 14 jobs </p>
                </div>
            </div>
            <p className='my-3'>
                "content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"
            </p>
        </div>
    )
}

export default UserCard