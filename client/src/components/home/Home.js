import './home.css'
import React from "react";
import SearchBar from '../appBar/searchAppBar';
import Container from '../container/container';
import SearchAppBar from '../appBar/searchAppBar';

export default function Home() {
  return (
    <>
      <SearchAppBar />
      <Container/>
    </>
  )
}