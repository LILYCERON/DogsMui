import React from "react";
import { useGetTodosQuery } from "../../store/apis/todosApi";
import Container from '../../components/Layout/Contain/Contain';
import { Toolbar } from "../../components/Toolbar/Toolbar";
import './home.css'


export default function Home() {
  const [allDogs, setAllDogs] = React.useState([])
  const [filteredDogs, setFilteredDogs] = React.useState([])

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
      <Toolbar allDogs={allDogs} filteredDogs={filteredDogs} setFilteredDogs={setFilteredDogs}/>
      {filteredDogs.length > 0 ? <Container allDogs={filteredDogs} /> :
        <Container allDogs={allDogs} />
      }
    </>
  )
}