import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
  height:100%;
}
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

}
code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
}

.LinkPage {
  display: flex;
}
.Main {
  background-color: #7467ef;
  position: relative;
  display:flex;
  height: 64px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.06), 0px 8px 10px 1px rgba(0, 0, 0, 0.042), 0px 3px 14px 2px rgba(0, 0, 0, 0.036);
  box-sizing: border-box;
  box-sizing:border-box;
  top: 0;
  z-index: 96;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0));
  justify-content:space-between; 
  z-index:-2;
}

.AboveNavbar{
  width: 260px;
  height:64px ;
  padding: 13px 18px 13px 24px;
  background-color:red;
  box-sizing: border-box;
  display:flex;
}
.test{
  align-self:flex-end;
}

.smallBar {
  right: 0;
    width: 50px;
    bottom: 0;
    height: 100vh;
    display: flex;
    z-index: 98;
    position: fixed;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.06), 0px 8px 10px 1px rgba(0, 0, 0, 0.042), 0px 3px 14px 2px rgba(0, 0, 0, 0.036);
    transition: all 0.15s ease;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #222A45;
}
`;

/* .navButtons {
  appearance: button;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark(buttontext, rgb(170, 170, 170));
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(74, 74, 74));
  box-sizing: border-box;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
  border-image: initial;
} */

/* .navButtons {
  justify-content: flex-start;
  padding: 0 16px;
  color: inherit;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  text-decoration: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  cursor: default;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(74, 74, 74));
  box-sizing: border-box;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
  border-image: initial;
} */
