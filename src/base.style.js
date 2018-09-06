/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'styled-components';

export default injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;
