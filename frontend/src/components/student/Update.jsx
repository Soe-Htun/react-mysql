import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../ui/back';
import { toast } from "react-toastify";
import http from '../../utils/http';

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();

     const [ values, setValues ] = useState({
        name: '',
        age: 0,
        gender: '',
        email: ''
    })

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await http.get(`student/${id}`);
                setValues(res.data);
            } catch (err) {
            console.log(err.response?.data?.message || err.message);
            }
        };
        fetchStudent();

    }, [id])

    const handleUpdate = async(e) => {
        e.preventDefault();
        try {
            const res = await http.put(`student/${id}`, values);
            toast.success("Update successful!");
            navigate('/');
        } catch (err) {
            console.log(err.response?.data?.message || err.message);
        }
    }
  return (
    <div className='d-flex vh-100'>
        <div className='p-3'>
            <BackButton to="/" />
            <form action="" onSubmit={handleUpdate}>
                <h2>Update Student</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" value={values.name} placeholder="Enter name" className='form-control'
                        onChange={e=> setValues({ ...values, name: e.target.value })}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type="number" value={values.age} placeholder="Enter age" className='form-control'
                        onChange={e=> setValues({ ...values, age: Number(e.target.value) })}
                    />
                </div>
               <div className="mb-2">
                    <label htmlFor="gender">Gender</label>
                    <select
                        value={values.gender}
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
                    <input type="email" value={values.email} placeholder="Enter Email" className="form-control"
                        onChange={e=> setValues({ ...values, email: e.target.value })}
                    />
                </div>
                <button type='submit' className='btn btn-success'>
                    Update
                </button>
            </form>
        </div>
    </div>
  )
}

export default Update