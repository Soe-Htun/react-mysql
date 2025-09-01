import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [ data, setData ] = useState([])

    const fetchStudents = () => {
        axios.get("http://localhost:3000/students")
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const [showConfirm, setShowConfirm] = useState(false);
    const [ selectId, setSelectId ] = useState(0)

    const confirmDelete = ((id) => {
        setShowConfirm(true);
        setSelectId(id)
    })
    const handleDelete = (() => {
        axios.delete(`http://localhost:3000/students/${selectId}`)
        .then(res => {
            fetchStudents()
            setShowConfirm(false);
        })
        .catch(err => console.log(err));
    })
  return (
    <div className='d-flex vh-100'>
        <div className='p-3'>
            <h2>Student List</h2>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>Create + </Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((student, index) => {
                        return <tr key={index}>
                            <td>{ student.id }</td>
                            <td>{ student.name }</td>
                            <td>{ student.age }</td>
                            <td>{ student.gender }</td>
                            <td>{ student.email }</td>
                            <td>
                                <Link to={`/student/${student.id}`} className='btn btn-sm btn-info'>Read</Link>
                                <Link to={`/edit/${student.id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                <button onClick={() => confirmDelete(student.id)} className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                    }) }
                </tbody>
            </table>
        </div>

        {/* Confirm Box */}
        { showConfirm && (
        <>
        {/* Overlay with blur */}
            <div
                className="modal-backdrop fade show"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.9)", // dark overlay
                    backdropFilter: "blur(5px)", // 🔹 blur effect
                    zIndex: 1040, // behind modal content
                }}
            ></div>
            <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Confirm Delete</h5>
                    <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowConfirm(false)}
                    ></button>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete ?</p>
                </div>
                <div className="modal-footer">
                    <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowConfirm(false)}
                    >
                    Cancel
                    </button>
                    <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                        handleDelete();
                    }}
                    >
                    Delete
                    </button>
                </div>
                </div>
            </div>
            </div>
        </>
        )}
          
    </div>
  )
}

export default Home