import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BackButton from '../ui/back';
import { toast } from "react-toastify";
import http from '../../utils/http';

const Create = () => {
    const [ values, setValues ] = useState({
        name: '',
        age: 0,
        gender: 'Male',
        email: ''
    })

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await http.post('student', values);
            toast.success("Create successful!");
            navigate('/');
        } catch (err) {
            console.log(err);
            toast.error(err.response?.data?.message || "Something went wrong");
        }
    }
  return (
    <div className='d-flex vh-100'>
        <div className='p-3'>
            <BackButton to="/" />
            <form action="" onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter name" className='form-control'
                        onChange={e=> setValues({ ...values, name: e.target.value })}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type="number" placeholder="Enter age" className='form-control'
                        onChange={e=> setValues({ ...values, age: Number(e.target.value) })}
                    />
                </div>
               <div className="mb-2">
                    <label htmlFor="gender">Gender</label>
                    <select
                        id="gender"
                        className="form-control"
                        onChange={e => setValues({ ...values, gender: e.target.value })}
                    >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter Email" className="form-control"
                        onChange={e=> setValues({ ...values, email: e.target.value })}
                    />
                </div>
                <button type='submit' className='btn btn-success'>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Create