import './App.css';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router';


import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import { useGetTodosQuery } from './store/apis/todosApi';


function App() {

  const { data: dataDogs, isError, isLoading, isSuccess, error } = useGetTodosQuery({})


  React.useEffect(() => {
    if (isSuccess) {
      console.log('dogs', dataDogs)
    }
    if (isError) {
      console.log('error', error)
    }

  }, [isLoading])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
