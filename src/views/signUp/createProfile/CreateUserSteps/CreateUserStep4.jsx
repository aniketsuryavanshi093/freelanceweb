/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import LanguageSelector from './LanguageSelector';

const CreateUserStep4 = () => {
  const createInitialValue = {
    languages: [
      {
        language: 'English',
        profiency: ''
      }
    ]
  };
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="wrapper mt-5 justify-content-start flex-column createprofile_wrapper my-4 w-100">
      <div className="w-100 my-4">
        <h2>Looking good. Next, tell us which languages you speak.</h2>
        <p>
          Freelancework is global, so clients are often interested to know what languages you speak.
          English is a must, but do you speak any other language ?
        </p>
      </div>
      <Formik
        initialValues={createInitialValue}
        // validationSchema={}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        render={({ values, errors, handleChange, touched, setFieldValue }) => (
          <Form className="w-100">
            <div className="my-2 wrapper w-100 flex-column justify-content-start">
              <div className="wrapper flex-row w-100">
                <p style={{ flex: 1 }}>Languages</p>
                <p style={{ flex: 1 }}>Profiency</p>
              </div>
              <div className="divider w-100 my-3"></div>
              <FieldArray
                name="languages"
                render={(arrayHelpers) => (
                  <>
                    {values.languages.length > 0 &&
                      values.languages.map((k, kdx) => (
                        <LanguageSelector
                          kdx={kdx}
                          key={kdx}
                          arrayHelpers={arrayHelpers}
                          values={values}
                          setFieldValue={setFieldValue}
                        />
                      ))}
                    <div className="my-3 wrapper justify-content-start w-100">
                      <button
                        onClick={() => {
                          arrayHelpers.push({
                            language: '',
                            profiency: ''
                          });
                        }}
                        className="addlanguagebtn rounded-pill p-2 px-3">
                        + Add a language
                      </button>
                    </div>
                  </>
                )}
              />
            </div>
          </Form>
        )}
      />
    </div>
  );
};

export default CreateUserStep4;
