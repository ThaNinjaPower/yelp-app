import React from "react";

import { Card, Button } from "react-bootstrap";

function SearchCard(props) {
    return (
        <Card bg="dark" border="dark" text="white">
            <Card.Img src={props.result.image_url} />
            <Card.Body>
                <Card.Title color="light">{props.result.name}</Card.Title>
                <Card.Subtitle>{props.result.location.address1}</Card.Subtitle>
                <Card.Subtitle>{props.result.location.city}, {props.result.location.state} {props.result.location.zip_code}</Card.Subtitle>
                <Button variant="primary" href="/yelp-app/details">More info</Button>
            </Card.Body>
        </Card>
    );
}

export default SearchCard;