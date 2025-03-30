import React, { useReducer } from "react";
import Home from "../Home/Home";

export default function InvitePage(user="invite"){
    return(
        <>
        <Home user={user}/>
        </>
    )
}