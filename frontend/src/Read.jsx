import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BackButton from './components/back';

const Read = () => {
    const { id } = useParams();
    const [ student, setStudent ] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3000/student/${id}`)
        .then(res => {
            console.log(res);
            setStudent(res.data);
        })
        .catch(err => console.log(err))
    }, [])
  return (
    <div className='d-flex vh-100'>
        <div className='rounded p-3'>
            <BackButton to="/" />
           <div className="p-2">
                <h2>Student Details</h2>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Age:</strong> {student.age}</p>
                <p><strong>Gender:</strong> {student.gender}</p>
                <p><strong>Email:</strong> {student.email}</p>
           </div>
            <Link to={`/edit/${student.id}`} className='btn btn-info mx-2'>Edit</Link>
        </div>
    </div>
  )
}

export default Read