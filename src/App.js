import React, { useState } from 'react'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Homescreen from './Screens/HomeScreen/Homescreen';
import { Container } from 'react-bootstrap';
import './_app.scss';
import LoginScreen from './Screens/loginScreen/LoginScreen';

const App = () => {

  const [sidebar,toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar(value => !value);
  
  return (
    <>
      {/* <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container border border-info">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
     <Container fluid className='app_main border border-warning'>
        <Homescreen />/
     </Container>
      </div> */}

      <LoginScreen />
    </>
  )
}


export default App;