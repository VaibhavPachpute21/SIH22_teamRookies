import React from 'react'
import './Login.css';
import { Heading, Input, InputGroup, InputRightElement, Button,Link, color } from '@chakra-ui/react';

export default function Login() {

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <div className='container'>
      <div className='loginBox'>
        <div className='heading'>
          <Heading color={''}>Welcome to Grievance portal</Heading>
          <Heading as='h2' size='2xl'>Login</Heading>
        </div>
        <div className='form'>
          <div className='inputBox'>
            <input type='email' placeholder='Enter Email ID' />
          </div>
          <div className='inputBox'>
            <input type={show ? 'text' : 'password'} placeholder='Enter Password' />
          </div>
          <span><input type='checkbox' onClick={handleClick} /> Show Password</span>
          <div>
            <button className='loginBtn'>Login</button>
          </div>

          <div><strong>Don't have Account?<Link href='/Registration' color='blue.500'>Register now</Link></strong></div>

        </div>

      </div>
    </div>
  )
}

function PasswordInput() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md' width={'250px'}>
      <Input
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}