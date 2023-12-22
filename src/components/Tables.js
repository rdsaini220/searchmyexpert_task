import Table from 'react-bootstrap/Table';
import { useDeleteContactMutation, useUpdateContactMutation } from '../store/contact'
import { useEffect, useState } from 'react';
import { ModelCard } from './ModelCard';


function Tables({ tableData, isLoading, isRefetch }) {
  const [deleteContact, deleteRes] = useDeleteContactMutation()
  const [updateContact, updateRes] = useUpdateContactMutation()
  const [isOpen, setOpen] = useState(false)
  const [isEdit, setEdit] = useState({})
  const handleRemove = (ID) => {
    deleteContact(ID)
  }
  const handleSubmit = (data) => {
    updateContact(data)
  }
  useEffect(() => {
    isRefetch(true)
  }, [deleteRes?.isSuccess])

  useEffect(() => {
    setEdit({})
    setOpen(false)
    isRefetch(true)
  }, [updateRes?.isSuccess])
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Date of Joining</th>
          <th>Salary</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            !isLoading ? 
                tableData?.map((item, i) => {
                    const { id, name, email, mobile, department, designation, date_of_joining, salary, status} = item;
                    return (<tr key={id}>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{mobile}</td>
                        <td>{department}</td>
                        <td>{designation}</td>
                        <td>{date_of_joining}</td>
                        <td>{salary}</td>
                        <td>{status}</td>
                        <td>
                            <button onClick={() => {
                                setOpen(!isOpen) 
                                setEdit(item)
                            }} className='btn btn-primary me-2'>Edit</button>
                            <button onClick={() => handleRemove(id)} className='btn btn-danger'>Delete</button>
                        </td>
                        {
                            id == isEdit.id ? 
                                <ModelCard
                                    isOpen={isOpen}
                                    setOpen={setOpen}
                                    formData={isEdit}
                                    setFormData={setEdit}
                                    handleSubmit={handleSubmit}
                                />
                            : null
                        }
                    </tr>)
                }) 
            : <tr><td colSpan={6}>Loading...</td></tr>
        }
      </tbody>
    </Table>
  );
}

export default Tables;