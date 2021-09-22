import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import {baseUrl} from '../shared/baseUrl';


export default function UserCard() {
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
    const cardsArray =  users.map((user, idx) => (
        <Col>
        <Card className="text-center" style={{ width: '18rem' }} >
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
    return (
        <Row xs={1} md={2} lg={3} xl={4} className="g-4 mt-2">
           {cardsArray}
        </Row>
    );
}
