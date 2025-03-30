import React from "react";
import { Box, ImageList } from "@mui/material";
import CardInvite from "../Card/CardInvite";

export default function UIinvite({ allDogs }) {
    return (
        <Box sx={{ mt: 8 }}>
            <ImageList className='container' sx={{ width: '170rm', height: '190rm' }} cols={3} rowHeight={154}>
                {allDogs.length > 0 ? allDogs.map((breed, index) =>
                    <CardInvite
                        key={index}
                        name={breed.name}
                        id={breed.id}
                        image={breed.image[0]}
                        height={breed.height}
                        weight={breed.weight}
                        temperament={breed.temperament}
                    />) : 'Cargando'}
            </ImageList>
        </Box>
    )
}