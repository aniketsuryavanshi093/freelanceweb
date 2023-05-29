import React from 'react'

const StepInfoComponent = ({ title, subtitle, label, SubInfo }) => {
    return (
        <div className='col-lg-6 br'>
            <div className='wrapper justify-start'>
                <p>1/4</p>
                <p className=' px-2 mx-4'>{label}</p>
            </div>
            <div className='mt-4'>
                <h1>{title}</h1>
            </div>
            <div className='mt-3'>
                {
                    subtitle && (

                        <p> {subtitle}</p>
                    )
                }
                {
                    SubInfo && (
                        <SubInfo />
                    )
                }
            </div>
        </div>
    )
}

export default StepInfoComponent