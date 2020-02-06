/** @format */

import React from "react";
import Person from "./components/Person";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StyledMainDiv from "./components/styledComponent/StyledMainDiv";
import bg from "../src/resource/bg.gif";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App = () => {
  const [persons, setPerson] = React.useState([]);
  const infoSubmit = data => {
    setPerson([...data]);
  };
 
  const styleBG = {
    backgroundImage: `url(${bg})`,
  }
  console.log(styleBG);
  return (
    <>
    <StyledMainDiv className='App' style={styleBG}>
      <Header/>
      <div className='call-outs-container'>
        <div className='call-out'>
            <Form
              onSubmit={data => {
                infoSubmit(data);
              }}>
              </Form>
        </div>
        <div className="scrollbar call-out" id="style-1">
          <div className="force-overflow">
                {persons.map(per => {
                  return (
                      <Person name={per.name} age={per.age} gender={per.gender} weapons={per.weapons} />
                  );
                })}
        </div>
        </div>
      </div>
      <div className="call-out">
        <Footer/>
      </div>
    </StyledMainDiv> 
    </>
  );
};

export default App;
