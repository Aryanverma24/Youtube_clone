import React, { useState } from 'react'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Homescreen from './Screens/HomeScreen/Homescreen';
import { Container } from 'react-bootstrap';
import './_app.scss';

const App = () => {

  const [sidebar,toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar(value => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className="app_container border border-info">
        <Sidebar sidebar={sidebar} />
     <Container fluid className='app_main border border-warning'>
        <Homescreen />
     </Container>
      </div>
    </>
  )
}


export default App;