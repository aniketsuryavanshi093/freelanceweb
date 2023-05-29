import Select from 'react-select';
import FilterComponent from '../../../../components/FilterComponent'
import React, { useState } from 'react'

const LanguageSelector = ({ values, setFieldValue, kdx, arrayHelpers }) => {
    const [openFilter, setOpenFilter] = useState(false);
    const ToggleComponent = () => {
        return (
            <div className=' wrapper justify-content-between px-2 profiency_select_wrapper'>
                <p className='text-capitalize'>{values.languages[kdx].profiency || "Basic"}</p>
                <i className="fa-solid fa-chevron-down"></i>
            </div>
        )
    }
    const Languages = [
        { value: 'hindi', label: 'Hindi' },
        { value: 'spanish', label: 'Spanish' },
        { value: 'arabic', label: 'Arabic' },
        { value: 'French', label: 'French' }
    ]
    const fitervalue = [
        {
            Label: "basic",
            desc: "I write clearly in this language"
        },
        {
            Label: "fluent",
            desc: "I write and speak this language to a high level"
        },
        {
            Label: "native",
            desc: "I write and speak this language"
        }
    ]
    return (

        <>
            <div className='wrapper my-2 flex-row w-100' >
                {
                    kdx === 0 ?
                        <p style={{ flex: 1 }} className='mx-2'>English(all profiles includes this)</p>
                        : (
                            <Select
                                className="mx-2 reactselect_wrapper"
                                style={{ width: "50%", flex: 1 }}
                                classNamePrefix="react-select"
                                isClearable={true}
                                onChange={(e) => {
                                    setFieldValue(`languages[${kdx}].language`, e.value);
                                }}
                                isSearchable={true}
                                name={`languages[${kdx}].language`}
                                options={Languages}
                            />
                        )
                }
                <div style={{ flex: 1 }} className='justify-content-start'>
                    <FilterComponent
                        styledata={{ width: "42%" }}
                        toggleClassname="sitetogglebtn rounded"
                        ToggleComponent={ToggleComponent}
                        openMenu={openFilter}
                        setOpenMenu={setOpenFilter}
                    >
                        <div className="p-2 ">
                            {
                                fitervalue.map((elem) => (
                                    <div key={elem.Label} onClick={() => {
                                        setFieldValue(`languages[${kdx}].profiency`, elem.Label)
                                        setOpenFilter(false)
                                    }} className='justify-content-start my-2 px-2 '>
                                        <p className='filterpara text-capitalize'>{elem.Label}</p>
                                        <p className='no-wrap filterdesc'>
                                            {elem.desc}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </FilterComponent>
                    {
                        kdx !== 0 && (
                            <i onClick={() => {
                                arrayHelpers.remove(kdx);
                            }} className=" mx-3 fa-solid fa-trash-can"></i>
                        )
                    }
                </div>
            </div>
            <div className='divider w-100 my-3'></div>
        </>
    )
}

export default LanguageSelector