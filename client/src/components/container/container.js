import React from "react";
import ImageList from '@mui/material/ImageList';
import CardComponent from "../card/CardComponent";
import { useGetTodosQuery } from "../../store/apis/todosApi";


export default function Container() {
    const [allDogs, setAllDogs] = React.useState([])
    const { data: dataDogs, isError, isLoading, isSuccess, error } = useGetTodosQuery({})

    React.useEffect(() => {
        if (isSuccess) {
            setAllDogs(dataDogs)
        }
        if (isError) {
            console.log('error', error)
        }
    }, [isLoading])
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