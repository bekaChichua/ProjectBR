import styled, { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  width: 260px;
  background-color: #1a2038;
  display: flex;
  flex-direction: column;
  color: white;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  justify-content: center;

  a {
    width: 100%;
    color: white;
    appearance: none;
  }

  .button {
    display: inline-block;
    border-radius: 4px;
    background-color: #f4511e;
    border: none;
    color: #ffffff;
    text-align: center;
    font-size: 15px;
    padding: 20px;
    width: 220px;
    height: 44px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px 0px;
  }

  /* .button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  } */

  /* .button span:after {
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  .button:hover span {
    padding-right: 25px;
  } */
`;
// .Navbar {
//     width: 260px;
//     background-color: red;
//     padding-left: 20px;
//     padding-right: 20px;
//     padding-bottom: 120px;
//     font-size: 0.875rem;
//     font-family: "Roboto", "Helvetica", "Arial", sans-serif;
//     font-weight: 400;
//     line-height: 1.43;
//     letter-spacing: 0.01071em;
//     color: #fff;
//     background-color: #1a2038;
//     display: flex;
//     flex-direction: column;
//     position: relative;
//     height: 100%;
//   }
