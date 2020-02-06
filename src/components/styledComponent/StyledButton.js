import styled from 'styled-components';

const StyledButton = styled.input`
    padding: 5px 5px 5px 25px;
    border: 1px solid #666;
    color:#000;
    text-decoration:none;
    background: #dcdcdc url(icon.png) no-repeat scroll 5px center;
    font-family: URW Chancery L, cursive;
    color: blue;
    border: 4px solid #9DA393;
    :hover {
        color: #FFC300;
        border: 4px solid #FFF100;
    }
`;

export default StyledButton;