import React from "react";

const Search = ({searchDate, changeHandler}) => {
    //const {searchDate} = searchDate;
    return <div>
        <input onChange={(event) => changeHandler(event.target.value)} valuse={searchDate} name="date" type="date"/>
    </div>
}

export default Search;