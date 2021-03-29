import styled from '@emotion/styled';

const HideVisually = styled.span(`
border: 0 !important;
clip: rect(0 0 0 0) !important;
height: 1px !important;
margin: -1px !important;
overflow: hidden !important;
padding: 0 !important;
position: absolute !important;
width: 1px !important;
white-space: nowrap !important;`);

export { HideVisually };
