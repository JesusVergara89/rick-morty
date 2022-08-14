import React from 'react'
import Select from 'react-select'
import useNumbers from '../hooks/useNumbers'


const InputFind = ({ setSearchLocation }) => {

    let arrayOfNumbers = useNumbers()

    const loadOptions = ({value}) => {
        setSearchLocation(value)
    }


    return (
        <section className='Input-form-select' >
            <h3>Digit a number <br /> discover the worlds</h3>
            <Select
                options={arrayOfNumbers}               
                onChange={loadOptions}
                defaultInputValue={arrayOfNumbers[0].label}
            />
            <h3>You can write or <br /> or select from <br /> the list above</h3>
        </section>
    )
}

export default InputFind