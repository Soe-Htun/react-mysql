import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BackButton from '../ui/back';
import http from '../../utils/http';

const Read = () => {
    const { id } = useParams();
    const [ student, setStudent ] = useState({});
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await http.get(`${import.meta.env.VITE_BASE_URL}/student/${id}`);
                setStudent(res.data);
            } catch (err) {
                console.log(err.response?.data?.message || err.message);
            }
        };
        fetchStudent();
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