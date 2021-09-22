import { useParams } from 'react-router-dom'

import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from "react-bootstrap/Col";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import {baseUrl} from '../shared/baseUrl';
const UserDetails = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get(baseUrl)
        .then((response) => {
            setUsers(response.data)
        })
        .catch((err) => {
            console.log(err);
        });
});

  const details = users
    .filter((user) => user.id == id)
    .map((user, idx) => (
      <Col className="mt-5">
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
  return (
    <div>
      {details}
    </div>
    );
}

export default UserDetails