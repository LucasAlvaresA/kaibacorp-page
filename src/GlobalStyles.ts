import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  :root {
    --primary: #2076C0;
    --primary-strong: #0C4CA3;
    --primary-deep: #083A68;
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
    --ink: #041826;
    --ink-2: #061F33;
    --ink-3: #0A2C47;
    --ice: #EAF3F9;
    --paper: #F5FAFD;
    --slate: #567184;
    --line-dark: rgba(255, 255, 255, 0.14);
    --line-light: rgba(9, 42, 70, 0.12);
    --font-display: 'Space Grotesk', 'Segoe UI', sans-serif;
    --font-body: 'Inter', 'Segoe UI', sans-serif;
    --font-mono: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
    --page-max: 1240px;
    --gutter: clamp(1.25rem, 4vw, 4.5rem);
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    min-height: 100%;
    font-family: var(--font-body);
    color: var(--ink);
    background-color: var(--ink);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  #root {
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    padding: 0;
    margin: 0;
  }

  button, a, input, select, textarea {
    font-family: inherit;
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

  img, svg {
    display: block;
    max-width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  ::selection {
    background: var(--light-blue);
    color: var(--ink);
  }

  :focus-visible {
    outline: 2px solid var(--light-blue);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default Globals;
