import React from 'react'
import { useForm } from '../hooks/useForm'
import Swal from 'sweetalert2'

const Form = ({setCharacterName}) => {

    const {inputs, handleChange, reset} = useForm({
        name: '',
    })

    const {name} = inputs


    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name.trim()){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must enter a name',
            })
        }

        setCharacterName(name.trim().toLowerCase())

        reset()
    }

  return (
    <form onSubmit={handleSubmit}>

        <input 
        type='text' 
        placeholder='Add character'
        className='form-control mb-2'
        value={name}
        onChange={handleChange}
        name='name'
        />

        <button
        type='submit'
        className='btn btn-info'
        >Search</button>

    </form>
  )
}

export default Form