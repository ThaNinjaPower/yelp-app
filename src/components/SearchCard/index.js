import React from "react";

import { Link } from "react-router-dom";

import { Card, Button, Image } from "react-bootstrap";

function SearchCard(props) {
    return (
        <Card bg="dark" border="dark" text="white">
            <Card.Body>
                <Card.Title color="light"><b>{props.result.name}</b></Card.Title>
                <Card.Title>{props.result.rating} ({props.result.review_count} reviews)</Card.Title>
                {props.result.location.display_address.map(line=><Card.Subtitle className="mb-2">{line}</Card.Subtitle>)}
                <Card.Title>{props.result.display_phone}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Link to="/details">
                    <Button onClick={() => props.changeId(props.result.id)}>Details</Button>
                </Link>
            </Card.Footer>
        </Card>
    );
}

export default SearchCard;