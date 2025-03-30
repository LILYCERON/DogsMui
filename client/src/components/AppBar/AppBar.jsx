import React from "react";

import SearchBar from "./SearchBar";
import { Toolbar } from "@mui/material";


export default function AppBar({allDogs, filteredDogs, setFilteredDogs, searchTerm, setSearchTerm}) {
    return (
        <>
            <Toolbar />
            <SearchBar
                allDogs={allDogs}
                filteredDogs={filteredDogs}
                setFilteredDogs={setFilteredDogs}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
        </>
    )
}