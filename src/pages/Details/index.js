import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";

class Details extends Component {
    convertTime = time => {
        time = parseInt(time);
        // Afternoon and evening (1PM - 11:59PM)
        if (time >= 1300 && time < 2400) {
            time -= 1200;
            time += " PM"
        }
        // Midnight (12AM - 12:59AM)
        else if (time >= 0 && time < 100) {
            time += 1200;
            time += " AM"
        }
        // Morning and noon (1AM - 11:59AM)
        else if (time >= 100 && time < 1200) {
            time += " AM"
        }
        // Noon (12PM - 12:59PM)
        else if (time >= 1200 && time < 1300) {
            time += " PM"
        }

        if (time.length === 6) {
            time = time.slice(0, 1) + ":" + time.slice(1);
        }

        else {
            time = time.slice(0, 2) + ":" + time.slice(2);
        }
        console.log("New time: ", time);
        return time;
    }

    convertDay = day => {
        var days = { 0: "Monday", 1: "Tuesday", 2: "Wednesday", 3: "Thursday", 4: "Friday", 5: "Saturday", 6: "Sunday" };
        return days[day];
    }

    render() {
        return (
            <CardGroup>
                <Card>
                    <Card.Img src={this.props.businessDetails.image_url} />
                </Card>
                <Card bg="dark" text="white">
                    <Card.Header>
                        <Card.Title>{this.props.businessDetails.name}</Card.Title>
                        <Card.Subtitle>{this.props.businessDetails.display_phone}</Card.Subtitle>
                        {/* {this.props.businessDetails.location.display_address.map(line => <Card.Subtitle>{line}</Card.Subtitle>)} */}
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle>Regular Hours</Card.Subtitle>
                        {/* {this.props.businessDetails.hours[0].open.map(shift => <div><Card.Subtitle>{this.convertDay(shift.day)}: {this.convertTime(shift.start)} - {this.convertTime(shift.end)}</Card.Subtitle></div>)} */}
                    </Card.Body>
                    <Card.Subtitle>{this.props.businessDetails.rating} ({this.props.businessDetails.review_count} reviews)</Card.Subtitle>
                </Card>
            </CardGroup>
        )
    }
}

export default Details;