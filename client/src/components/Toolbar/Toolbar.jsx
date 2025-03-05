import React from "react";

import SearchBar from "./SearchBar";


export function Toolbar({filteredDogs, setFilteredDogs, allDogs}) {
    return (
        <>
            <SearchBar
                allDogs={allDogs}
                filteredDogs={filteredDogs}
                setFilteredDogs={setFilteredDogs}
            />
        </>
    )
}