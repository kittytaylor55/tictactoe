import React, {useState} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import {useMutation} from '@apollo/client';
// import createUser from '../utils/API';
import Auth from '../utils/auth';
import { SIGN_UP } from '../utils/mutations';

const SignupForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [signup, {error}] = useMutation(SIGN_UP);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      try {
        const response = await signup({
          variables: { email: userFormData.email, password: userFormData.password },
        });
  
        if (!response.data) {
          throw new Error('something went wrong!');
        }
  
        const { token, user } = await response.json();
        console.log(user);
        Auth.login(token);
      } catch (err) {
        console.error(err);
        setShowAlert(true);
      }
  
      setUserFormData({
        email: '',
        password: '',
      });
    };
  
    return (
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your signup!
          </Alert>
  
          <Form.Group>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Your email address'
              name='email'
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
          </Form.Group>
  
          <Form.Group>
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Your password'
              name='password'
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
          </Form.Group>
          <Button
            disabled={!(userFormData.username && userFormData.email && userFormData.password)}
            type='submit'
            variant='success'>
            Submit
          </Button>
        </Form>
    );
  };
  
  export default SignupForm;
  