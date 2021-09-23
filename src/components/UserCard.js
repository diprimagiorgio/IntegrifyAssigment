import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../App.css";
import {baseUrl} from '../shared/baseUrl';


export default function UserCard() {
    const [users, setUsers] = useState([]);
    async function fetchData() {
        const res = await fetch(baseUrl);
        res
          .json()
          .then(res => setUsers(res))
          .catch(err => console.log(err));
        console.log(res);
      }
    useEffect(() => {
        // GET req to fetch user data, and store them in users
        fetchData();
    },[]);
    // a new array where instead of the user's object there are Cards with the user information
    const cardsArray =  users.map((user, idx) => (
        <Col key={user.id.toString()}>
        <Card  className="text-center" style={{ width: '18rem' }} >
            <p data-letters={user.name.charAt(0)} />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">@{user.username}</Card.Subtitle>
                <Card.Text>
                    <a href={user.website}>{user.website}</a>
                </Card.Text>
                <Button variant="primary" href={`/users/${user.id}`}>MORE DETAILS</Button>
            </Card.Body>
        </Card>   
        </Col>
    ));
    // return Cards in a grid, the number of cards depends on the screen size of the user
    return (
        <Row xs={1} md={2} lg={3} xl={4} className="g-4 mt-2">
           {cardsArray}
        </Row>
    );
}
