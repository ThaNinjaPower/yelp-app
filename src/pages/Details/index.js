import axios from "axios";
import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";

class Details extends Component {
    componentDidMount() {
        this.props.searchDetails(this.props.businessId);
    }

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

        // If hour is 10 or greater
        if (time.length === 6) {
            time = time.slice(0, 1) + ":" + time.slice(1);
        }

        else {
            time = time.slice(0, 2) + ":" + time.slice(2);
        }
        return time;
    }

    convertDay = day => {
        var days = {
            0: "Monday",
            1: "Tuesday",
            2: "Wednesday",
            3: "Thursday",
            4: "Friday",
            5: "Saturday",
            6: "Sunday"
        };
        return days[day];
    }

    printStars = rating => {
        var starArray = [];
        for (var i = rating; i >= 1; i--) {
            starArray.push(<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>);
            if (rating == 0.5) {
                starArray.push(<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z" />
                </svg>)
            }
        }

        for (var i = 5 - rating; i >= 1; i--) {
            starArray.push(<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>);
        }

        console.log(starArray);

        return <span>{starArray.map(star => star)}</span>;
    }

    render() {
        // console.log("Address", this.props.businessDetails.location.display_address);
        console.log("Hours", this.props.businessDetails.hours);
        return (
            <CardGroup>
                <Card>
                    <Card.Img src={this.props.businessDetails.image_url} />
                </Card>
                <Card bg="dark" text="white">
                    <Card.Header>
                        <Card.Title><h1>{this.props.businessDetails.name}</h1></Card.Title>
                        <Card.Subtitle className="mb-2">{this.props.businessDetails.display_phone}</Card.Subtitle>
                        {this.props.businessDetails.rating !== undefined && <Card.Subtitle className="mb-4">{this.printStars(this.props.businessDetails.rating)} ({this.props.businessDetails.review_count} reviews)</Card.Subtitle>}
                        {this.props.businessDetails.location !== undefined && this.props.businessDetails.location.display_address.map(line => <Card.Subtitle className="mb-2">{line}</Card.Subtitle>)}
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className="mb-2">Regular Hours</Card.Title>
                        {this.props.businessDetails.hours !== undefined && this.props.businessDetails.hours[0].open.map(shift => <div><Card.Subtitle className="mb-2">{this.convertDay(shift.day)}: {this.convertTime(shift.start)} - {this.convertTime(shift.end)}</Card.Subtitle></div>)}
                    </Card.Body>
                </Card>
            </CardGroup>
        )
    }
}

export default Details;