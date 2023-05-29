import React from 'react'
import StepInfoComponent from './StepInfoComponent'
import { Label } from 'reactstrap'
import { Formik, Form, Field } from 'formik'
import { CustomInput, CustomTextArea } from '../../../utils/customComponents'

const FinalStep = () => {
    const initialValue = {
        title: "",
        desc: "",
    }
    return (
        <>
            <StepInfoComponent label="Last Step" title="Last step start the conversation" SubInfo={SubInfo} />
            <div className=' px-3 py-1 col-lg-6'>
                <div className='wrapper justify-start w-100'>
                    <Formik
                        initialValues={initialValue}
                        onSubmit={(value) => {
                            console.log(value);
                        }}>
                        {({ values }) => (
                            <Form className='w-100'>
                                <div className='p-3 mx-2'>
                                    <Field
                                        type="text"
                                        component={CustomInput}
                                        inputClassName="my-2 "
                                        name="title"
                                        label="Add the Title"
                                        placeholder="Title"
                                    />
                                    <Field
                                        label="Describe your job"
                                        name="desc"
                                        component={CustomTextArea} inputClassName="mt-2"
                                        placeholder="describe your job"
                                    />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}
export default FinalStep

const SubInfo = () => {
    return (
        <div className='wrapper flex-column align-start'>
            <Label>Example Launch</Label>
            <ul className='exlist'>
                <li >Build responsive Wordpress site with booking/payment functionality .</li>
                <li> Graphic design needed for design ad creative for multiple campaigns.</li>
                <li>Facebook ad specialist needed for product launch</li>
            </ul>
        </div>
    )
}