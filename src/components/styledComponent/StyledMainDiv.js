import styled from 'styled-components';

const StyledMainDiv = styled.div`
  background-position: left top;
  background-repeat: repeat;

  .call-outs-container {
  }

  .call-out {
    padding: 20px;
    box-sizing: border box;
    margin-bottom: 0px;
    flex-basis: 40%; 
  }

@media (min-width: 900px) {
  .call-outs-container {
    display:flex;
    justify-content: space-evenly;
  }
}
`;

export default StyledMainDiv;