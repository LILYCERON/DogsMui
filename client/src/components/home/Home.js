import React from "react";

import './home.css'

import { useGetTodosQuery } from "../../store/apis/todosApi";
import SearchAppBar from '../appBar/searchAppBar';
import Container from '../container/container';

export default function Home() {
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
      <SearchAppBar allDogs={allDogs}/>
      <Container allDogs={allDogs} isSuccess={isSuccess}/>
    </>
  )
}