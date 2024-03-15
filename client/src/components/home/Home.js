import './home.css'
import React from "react";
import SearchBar from '../searchBar/searchBar';
import Container from '../container/container';

export default function Home() {
  return (
    <>
      <SearchBar />
      <Container/>
    </>
  )
}