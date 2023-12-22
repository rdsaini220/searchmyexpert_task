import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ModelCard } from './ModelCard';
import { useAddContactMutation } from '../store/contact'


const Header = ({ search, setSearch, isRefetch}) => {
    const [isOpen, setOpen] = useState(false)
    const [isEdit, setEdit] = useState({})
    const [addContact, addRes] = useAddContactMutation()

    const handleSubmit = (data) => {
        addContact(data)
    }
    
    useEffect(() => {
        setEdit({})
        setOpen(false)
        isRefetch(true)
    }, [addRes?.isSuccess])
  return (
    <>    
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
            <Navbar.Brand href="#"><h2>Employiee</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mx-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Form className='d-flex'>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Form>
                </Nav>
                <Button onClick={() => setOpen(!isOpen)} className='d-flex' variant="primary">Create</Button>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <ModelCard
            isOpen={isOpen}
            setOpen={setOpen}
            formData={isEdit}
            setFormData={setEdit}
            handleSubmit={handleSubmit}
        />
    </>    
  );
}

export default Header;