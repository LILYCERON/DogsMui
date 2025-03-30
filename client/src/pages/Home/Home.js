import React from "react";
import { useLocation } from "react-router-dom"

import { useGetTodosQuery } from "../../store/apis/todosApi";
import { Box } from "@mui/material";

import MainContainer from "../../components/Container/MainContainer";
import AppBar from "../../components/AppBar/AppBar";
import Searching from "../../components/Layout/Searching";


export default function Home() {

  let location = useLocation();
  const user = location.pathname === "/invite" ? "invite" : "member"
  const [allDogs, setAllDogs] = React.useState([])
  const [filteredDogs, setFilteredDogs] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState("")
  const [isSearching, setIsSearching] = React.useState(false);

  const { data: dataDogs, isError, isLoading, isSuccess, error } = useGetTodosQuery({})

  React.useEffect(() => {
    if (isSuccess) {
      setAllDogs(dataDogs)
      setFilteredDogs(dataDogs) //Inicializa con todos los perros
    }
    if (isError) {
      console.log('error', error)
    }
  }, [isSuccess])

  // Filtrar los perros en tiempo real
  React.useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredDogs(allDogs); // Si el input está vacío, mostrar todos los perros
      setIsSearching(false); // No se está buscando
    } else {
      setIsSearching(true); // Se está buscando
      const filtered = allDogs.filter((dog) =>
        dog.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredDogs(filtered);
    }
  }, [searchTerm, allDogs]); // Se ejecuta cuando cambia el término de búsqueda o la lista de perros

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <AppBar position='fixed'
          allDogs={allDogs}
          filteredDogs={filteredDogs}
          setFilteredDogs={setFilteredDogs}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm} />
        {isSearching && filteredDogs.length === 0 ? (
          <Searching />
        ) : (
          <MainContainer user={user} allDogs={filteredDogs} />
        )}
      </Box>
    </>
  )
}