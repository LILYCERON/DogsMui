import React, { useEffect } from "react";

import UIinvite from "../UIuser/UIinvite";
import UImember from "../UIuser/UImember";

export default function MainContainer({ allDogs, user }) {
    console.log("user", user)
    useEffect(() => {
    }, [allDogs])

    let content;
    switch (user) {
        case "invite":
            console.log("user", user)
            content = <UIinvite allDogs={allDogs} />;
            break;
        case "member":
            content = <UImember allDogs={allDogs} />
            break;
        default:
           return <h3>Sin Contenido</h3>
    }
    return (
        <>
            {content}
        </>
    )

}
