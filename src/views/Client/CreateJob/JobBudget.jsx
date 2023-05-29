import React, { useState } from 'react'
import StepInfoComponent from './StepInfoComponent'
import { CustomRadioButton } from '../../../utils/customComponents'
import { Field, Form, Formik } from 'formik'
import { FormGroup, Input, Label } from 'reactstrap'

const JobBudget = () => {
    const [SelectedTab, setSelectedTab] = useState("hourly")
    const hourlyinitial = {
        rate: "",
    }
    const projectbudgetinitial = {
        budget: "",
    }
    return (
        <>
            <StepInfoComponent label="Budget" title="Tell us about your budget" subtitle="this will help us to match you the talent within your range." />
            <div className=' px-3 py-1 col-lg-6'>
                <div className='justify-start mb-4 wrapper' style={{ width: "80%" }}>
                    <div onClick={() => setSelectedTab("hourly")} className={`${SelectedTab == "hourly" && "selected"} cp selectTab rounded px-2 py-2`} style={{ flex: 1 }}>
                        <div className='px-1 mb-3 wrapper justify-between' >
                            <i className="fa-regular fa-clock"></i>
                            <div className={`roundedcheck ${SelectedTab === "hourly" && "filled"}`}></div>
                        </div>
                        <h5>Hourly Rate</h5>
                    </div>
                    <div onClick={() => setSelectedTab("budget")} className={`${SelectedTab == "budget" && "selected"} cp mx-4 selectTab rounded px-2 py-2`} style={{ flex: 1 }}>
                        <div className='px-1 mb-3 wrapper justify-between'>
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                            <div className={`roundedcheck ${SelectedTab === "budget" && "filled"}`}></div>
                        </div>
                        <h5>Project Budget</h5>
                    </div>
                </div>
                <div className='wrapper flex-column align-start'>
                    <Formik
                        initialValues={SelectedTab === "hourly" ? hourlyinitial : projectbudgetinitial}
                        onSubmit={(value) => {
                            console.log(value);
                        }}>
                        {({ values, handleChange }) => (
                            <Form >
                                {
                                    SelectedTab == "hourly" ? (
                                        <div className='wrapper justify-start'>
                                            <FormGroup className='position-relative'>
                                                <Label for="exampleEmail">
                                                    Hourly $
                                                </Label>
                                                <i className="fa-solid position-absolute dolooersign fa-dollar-sign"></i>
                                                <Input
                                                    id="exampleEmail"
                                                    name="rate"
                                                    className='no-spinners text-end'
                                                    onChange={handleChange}
                                                    value={values?.rate}
                                                    placeholder="Enter hourly rates"
                                                    type="number"
                                                />
                                            </FormGroup>
                                        </div>
                                    )
                                        :
                                        (
                                            <div className='wrapper justify-start'>
                                                <FormGroup className='position-relative'>
                                                    <Label for="exampleEmail">
                                                        Maximum Project Budget $
                                                    </Label>
                                                    <i className="fa-solid position-absolute dolooersign fa-dollar-sign"></i>
                                                    <Input
                                                        id="exampleEmail"
                                                        className='no-spinners text-end'
                                                        name="budget"
                                                        onChange={handleChange}
                                                        value={values?.budget}
                                                        placeholder="Enter project's budget"
                                                        type="number"
                                                    />
                                                </FormGroup>
                                            </div>
                                        )
                                }
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default JobBudget