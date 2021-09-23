import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from "react-bootstrap/Col";
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import {baseUrl} from '../shared/baseUrl';

const UserDetails = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const res = await fetch(baseUrl);
        res
          .json()
          .then(res => setUsers(res))
          .catch(err => console.log(err));
  }
  useEffect(() => {
    // GET req to fetch user data, and store them in users
    fetchData()

  },[]);
  // find the user with id equal to the id received as a parameter and create a Card with all the information
  const details = users
    .filter((user) => user.id === parseInt(id))
    .map((user, idx) => (
      <Col  key={user.id.toString()} className="mt-5">
      <Card style={{ width: '18rem' }} >
        <Card.Body>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Name: {user.name} </ListGroup.Item>
                <ListGroup.Item>username: {user.username} </ListGroup.Item>
                <ListGroup.Item>email: { user.email} </ListGroup.Item>
                <ListGroup.Item>phone: { user.phone} </ListGroup.Item>
                <ListGroup.Item>company: { user.company.name} </ListGroup.Item>
                <ListGroup.Item>website: {user.website} </ListGroup.Item>
                <ListGroup.Item>address:
                  <ListGroup variant="flush">
                    <ListGroup.Item>street:{user.address.street} </ListGroup.Item>
                    <ListGroup.Item>suite: {user.address.suite} </ListGroup.Item>
                    <ListGroup.Item>city:{user.address.city} </ListGroup.Item>
                    <ListGroup.Item>zip-code: {user.address.zipcode} </ListGroup.Item>

                  </ListGroup>
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
            <Link to={`/`}>Go back</Link>
        </Card.Body>
      </Card>
      </Col>
    ));
  // TODO show this message only after loading the users
  // when the is no user with the ID received as a parameter a error message is shown
  if(details.length === 0 )
      details[0] = (
        <Alert variant="danger">
          <Alert.Heading>User not found!</Alert.Heading>
          <p>
          Try to go back to the home page and select a user. The ID received doesn't match any user. You have to select an existing user!
          </p>  
        </Alert>
          
      )
  return (
    <div> 
      {details}
    </div>
    );
}

export default UserDetails