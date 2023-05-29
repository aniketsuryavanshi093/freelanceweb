/* eslint-disable no-unused-vars */
import React from 'react'
import StepInfoComponent from './StepInfoComponent'
import { Label } from 'reactstrap'
import { Field, Form, Formik } from 'formik'
import { CustomRadioButton } from '../../../utils/customComponents'

const JobScope = () => {
    const radiomap = [
        { name: '3-6', label: "3 to 6 months" },
        { name: '1-3', label: "1 to 3 months" },
        { name: '1', label: "less than 1 month" }
    ]
    const initialValue = {
        timetake: ""
    }
    return (
        <>
            <StepInfoComponent label="Scope" title="Next Estimate the scope of your work." subtitle="Consider the scope of your project and the time that it takes." />
            <div className=' px-3 py-1 col-lg-6'>
                <Formik
                    initialValues={initialValue}
                    onSubmit={(value) => {
                        console.log(value);
                    }}>
                    {({ values, handleChange }) => (
                        <Form >
                            <div className='wrapper flex-column align-start'>
                                <Label>How long with your work take?</Label>
                                <div className='px-2 wrapper align-start flex-column my-2' style={{ flex: 3 }}>
                                    {
                                        radiomap.map((elem) => (
                                            <Field
                                                key={elem.name}
                                                type="radio"
                                                inputClassName="mx-1"
                                                component={CustomRadioButton}
                                                className=" mx-2 my-2 "
                                                name="timetake"
                                                handleChange={handleChange}
                                                value={elem.name}
                                                label={elem.label}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

        </>
    )
}

export default JobScope