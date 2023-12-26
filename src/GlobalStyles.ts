import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;500;700&display=swap');

  html,
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato', sans-serif;
    padding: 0;
    margin: 0;
  }

  button, a {
    font-family: 'Roboto', sans-serif;
  }

  p, span {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }

  :root {
    --primary: #2076C0;
    --primary-strong: #0C4CA3;
    --light-blue: #86dfe0;
    --error: #DA1E28;
    --success: #24A148;
    --white:#FFFFFF;
    --gray1:#388BC6;
    --gray2:#E0E0E0;
    --gray3:#A8A8A8;
    --gray4:#6F6F6F;
    --gray5:#393939;
    --gray6:#161616;
  }
`;

export default Globals;
