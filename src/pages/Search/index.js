import React from "react";

import { CardColumns } from "react-bootstrap";

import SearchCard from "../../components/SearchCard";

function Search(props) {
    return (
        <CardColumns>
            {props.searchResults !== undefined && props.searchResults.map(result =>
                <SearchCard
                    result={result}
                    searchDetails={props.searchDetails}
                    changeId={props.changeId}
                    businessId={props.businessId}
                />
            )
            }
        </CardColumns>
    )
}

export default Search;