import "./searchBar.css"
import React from "react";
import { TextField } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function SearchBar() {
    return (
        <>
            <div className="search">
                <TextField variant="filled" label="Search your breed" size="small" color="success" />
                <SearchRoundedIcon />
            </div>
        </>
    )
}
export default SearchBar;