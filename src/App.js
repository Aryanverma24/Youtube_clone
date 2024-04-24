import React from 'react'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Homescreen from './Screens/HomeScreen/Homescreen';
import { Container , fluid } from 'react-bootstrap';
import './_app.scss'

const App = () => {
  return (
    <>
      <Header />
      <div className="app_container border border-info">
        <Sidebar />
     <Container fluid className='app_main border border-warning'>
        <Homescreen />
     </Container>
      </div>
    </>
  )
}


export default App;