import React from "react";
import { Card, CardGroup } from "react-bootstrap";

function Details(props) {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img src={props.businessDetails.image_url} />
                </Card>
                <Card bg="dark" text="white">
                    <Card.Header>
                        <Card.Title>{props.businessDetails.name}</Card.Title>
                        <Card.Subtitle>{props.businessDetails.display_phone}</Card.Subtitle>
                        {/* {props.businessDetails.location.display_address.map(line=>(<Card.Subtitle>{line}</Card.Subtitle>))} */}
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle>Regular Hours</Card.Subtitle>
                        {/* {props.businessDetails.hours[0].open.map(shift => <div>{shift.day.getDay()}</div>)} */}
                    </Card.Body>
                    <Card.Subtitle>{props.businessDetails.rating} ({props.businessDetails.review_count} reviews)</Card.Subtitle>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Details;