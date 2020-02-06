/** @format */
import React, { useState, useRef } from "react";
import StyledInputDiv from './styledComponent/StyledInputDiv';
import StyledButton from './styledComponent/StyledButton';
import TickImg from '../resource/tick.png';

export default function Form(props) {
  let newPersonInfo = {};
  const defaultPerson = {
      name: "KyloRen#78", age: "Portia", gender:"Animal+Human", weapons: "Reygun"
  };
  const [personState, setPersonState] = useState([defaultPerson]);
//   const nameRef = useRef();
//   const ageRef = useRef();
//   const genderRef = useRef();
const formRef = useRef();

  React.useEffect(() => {
      props.onSubmit(personState);
  },[]);

  const infoSubmit = () => {
    newPersonInfo.name = formRef.current.elements.name.value;
    newPersonInfo.age = formRef.current.elements.age.value;
    newPersonInfo.gender = formRef.current.elements.gender.value;
    newPersonInfo.weapons = formRef.current.elements.weapons.value;

    setPersonState([...personState, newPersonInfo]);
    props.onSubmit(personState);
  };

  const buttonImg = {
    background: `#dcdcdc url(${TickImg}) no-repeat scroll 5px center`
  }
  return (
    <StyledInputDiv>
      <form ref={formRef}>
        <div className="form-group">
          <label for="name">Intergalactic Name : </label> 
          <input name="name" className="form-control" type='text' placeholder='e.g. AndyDaly221'></input>
        </div>
        <div className="form-group">
          <label for="age">Planet Name : </label>
          <input type='text' className="form-control" name="age" placeholder='e.g. Earth-313'></input>
        </div>
        <div className="form-group">
          <label for="gender">Body Type : </label>
          <div className="form-group"> 
            <input name='gender' type='radio' value='Animal'></input>
            <label for="gender">Animal</label>
            <input name='gender' type='radio' value='Human'></input>
            <label for="gender">Human</label>
            <input name='gender' type='radio' value='Animal+Human'></input>
            <label for="gender">Both</label>
          </div>
        </div>
        <div className="form-froup">
          <label for="wepons">Weapons Details :</label>
          <input className="form-control" name='weapons' type='text' placeholder="e.g. Rayguns, lightsaber, Neutrino Bomb... "></input>
        </div>
        <StyledButton
          style={buttonImg}
          type='button'
          onClick={infoSubmit}
          value='Submit'
        />
      </form>
    </StyledInputDiv>
  );
}
