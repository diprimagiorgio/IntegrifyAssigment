import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"; // TODO create a component for the button
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import {baseUrl} from '../shared/baseUrl';

const rbt = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
        id: 1,
        name: "Giorgio Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    },
    {
        id: 1,
        name: "Maria Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    },
    {
        id: 1,
        name: "Anna Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    }
  ];
export default function UserCard() {
    const [robots, setRobots] = useState([]);
    useEffect(() => {
        Axios.get(baseUrl)
            .then((response) => {
                setRobots(response.data)
            })
            .catch((err) => {
                console.log(err);
            });
    });
    const cardsArray = (robots === []) ? <div></div> : robots.map((robot, idx) => (
        <Col>
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <p data-letters={robot.name.charAt(0)} />
            <Card.Body>
                <Card.Title>{robot.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">@{robot.username}</Card.Subtitle>
                <Card.Text>
                    <a href="url">{robot.website}</a>
                </Card.Text>
                <Button variant="primary">MORE DETAILS</Button>
            </Card.Body>
        </Card>   
        </Col>
    ));
    return (
        <Row xs={1} md={2} lg={3} xl={4} className="g-4 ">
           {cardsArray}
        </Row>
    );
}
