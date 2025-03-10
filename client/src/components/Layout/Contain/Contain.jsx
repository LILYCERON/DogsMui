import React, { useEffect } from "react";

import ImageList from '@mui/material/ImageList';
import CardComponent from "../../Card/CardComponent";

export default function Container({allDogs}) {
    useEffect(()=>{
        console.log('allDogs ha cambiado', allDogs)
    },[allDogs])
    console.log(allDogs)

    return (
        <> 
            <ImageList className='container' sx={{ width: '170rm', height: '190rm' }} cols={3} rowHeight={154}>
                {allDogs.length > 0 ? allDogs.map((breed, index) =>
                    <CardComponent
                        key={index}
                        name={breed.name}
                        id={breed.id}
                        image={breed.image[0]}
                        height={breed.height}
                        weight={breed.weight}
                        temperament={breed.temperament}
                    />) : 'Cargando'}
            </ImageList>
        </>
    )
}