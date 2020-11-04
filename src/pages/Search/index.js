import React from "react";

import { Card, Button } from "react-bootstrap";

function Search(props) {
    return (
        <div>
            {props.searchResults.map(result=>
                <Card style={{ width: '36rem'}}>
                    <Card.Body>
                        <img src={result.image_url} width="50%"/>
                        <Card.Title><b>{result.name}</b></Card.Title>
                        <Card.Subtitle><a href={result.url}>Link</a></Card.Subtitle>
                        <Button variant="primary">More info</Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}

export default Search;