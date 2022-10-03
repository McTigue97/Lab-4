//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
//content component is imported into the app page
import { Content } from './components/content';
//Header component is imported into the app page
import { Header } from './components/header';
//Footer component is imported into the app page
import { Footer } from './components/footer';
//Navbar componenet from Bootstrap
import  Navbar  from 'react-bootstrap/Navbar';
//Nav componenet from Bootstrap
import Nav from 'react-bootstrap/Nav';
//Container componenet from Bootstrap
import Container from 'react-bootstrap/Container';
//Added Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

//Extends is used to access react components
class App extends React.Component {

  //render is needed for it to work by wrapping the entire return
  render(){
  return (
    <Router>
    <div>

    {/* Colour of nav bar is blue*/}
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">My App</Navbar.Brand>
          <Nav className="me-auto">
            {/* Nav bar tabs*/}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        {/* Routes to header/footer/main page by clicking the nav buttons*/}

        {/* Displays Content Component when home is clicked/my app*/}
        <Route path='/' element={<Content></Content>} exact></Route>
        {/* Displays Header Component when read is clicked*/}
        <Route path='read' element={<Header></Header>} exact></Route>
        {/* Displays Footer Component when create is clicked*/}
        <Route path='create' element={<Footer></Footer>} exact></Route>
      </Routes>


      {/*<Header></Header>

      <Content></Content>

  <Footer></Footer>*/}
    </div>
    </Router>
  );
  }
}

export default App;
