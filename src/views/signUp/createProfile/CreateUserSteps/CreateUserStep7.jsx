import React, { useState } from 'react'
import { EDIT_IMG, USERDUMMY } from '../../../../assets/images'
import Select from 'react-select';
import { Form, Formik } from 'formik';
import { Label } from 'reactstrap';
import PhoneInput from 'react-phone-input-2';
import { countryopt } from '../../../../constants';
import { createprofilestep7validation } from '../../../../Validations/createprofilestep7validation';
import 'react-phone-input-2/lib/style.css';

const CreateUserStep7 = () => {
    const createInitialValue = {
        country: '',
        phoneNumber: ''
    }
    const [countryCode, setCountryCode] = useState(91);
    return (
        <div className='wrapper  justify-content-start flex-column createprofile_wrapper my-4 w-100'>
            <div className='w-100 my-2'>
                <h2>
                    A few last details, then you can check and publish your profile.
                </h2>
                <p style={{ width: "70%" }}>A professional photo helps to build trust with your clients. To keep things safe and simple the will pay you through us.  which is why we need your personal information.  </p>
            </div>
            <div className='wrapper w-100 userInfo_container my-2 px-2 '>
                <div className='uploadprofile'>
                    <div className='wrapper'>
                        <div className="user_prfile_imgwrapper flex-column wrapper">
                            <div className='position-relative'>
                                <img src={USERDUMMY} alt="dummy" />
                                <div className="">
                                    <img
                                        src={EDIT_IMG}
                                        alt="edit_icon"
                                        className="edit_icon_profile"
                                    // onClick={handleUpload}
                                    />
                                    <input
                                        // ref={imageRef}
                                        type="file"
                                        name="image"
                                        id="upload-button"
                                        style={{ display: 'none' }}
                                    // onChange={onChangepofileImgUpload}
                                    />
                                </div>
                            </div>
                            <button className='rounded-pill mx-2 px-2 mt-3 skillspills'>+ Upload photo</button>
                        </div>

                    </div>
                </div>
                <Formik
                    initialValues={createInitialValue}
                    validationSchema={() => createprofilestep7validation(countryCode + 10)}
                    // onSubmit={values => {
                    //     handleSubmit(values);
                    // }}
                    render={({ values, setFieldValue }) => (
                        <Form className='w-100 user_form px-3'>
                            <div className='wrapper my-3 align-items-start w-100 flex-column'>
                                <Label >Country</Label>
                                <Select
                                    className="selectcountry reactselect_wrapper"
                                    classNamePrefix="react-select"
                                    isClearable={true}
                                    onChange={(e) => {
                                        setFieldValue(`country`, e.value);
                                    }}
                                    isSearchable={true}
                                    name={`country`}
                                    options={countryopt}
                                />
                            </div>
                            <div className='wrapper align-items-start w-100 flex-column'>
                                <Label >Phone</Label>
                                <PhoneInput
                                    inputStyle={{ width: '30%', paddingLeft: '50px', height: '40px' }}
                                    country="us"
                                    enableSearch
                                    value={values.phoneNumber}
                                    onChange={(e, f) => {
                                        setCountryCode(f.dialCode.length);
                                        setFieldValue('phoneNumber', e);
                                    }}
                                    autoFormat={false}
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    inputProps={{
                                        name: 'phoneNumber',
                                        required: true,
                                    }}
                                    countryCodeEditable={false}
                                />
                            </div>
                        </Form>
                    )}
                />
            </div>
        </div>
    )
}

export default CreateUserStep7