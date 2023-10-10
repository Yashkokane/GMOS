import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return <>
  <Link to="/Dashboard" ><Button>Admin</Button> </Link>
  <Link to="/ClientDashboardWrapper"><Button>Client</Button> </Link>
  <Link to=""><Button>Supplier</Button> </Link>
  </>
}

export default Login
