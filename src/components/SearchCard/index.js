import React from "react";

import { Link } from "react-router-dom";

import { Card, Button } from "react-bootstrap";

function SearchCard(props) {
    return (
        <Card bg="dark" border="dark" text="white">
            <Card.Img src={props.result.image_url} />
            <Card.Body>
                <Card.Title color="light"><b>{props.result.name}</b></Card.Title>
                <Card.Title>{props.result.rating} ({props.result.review_count} reviews)</Card.Title>
                <Card.Subtitle>{props.result.location.address1}</Card.Subtitle>
                <Card.Subtitle>{props.result.location.city}, {props.result.location.state} {props.result.location.zip_code}</Card.Subtitle>
                <Card.Title>{props.result.display_phone}</Card.Title>
                <Link to="/details" onClick={()=>props.searchDetails(props.result.id)}>Details</Link>
            </Card.Body>
        </Card>
    );
}

export default SearchCard;