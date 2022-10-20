import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


const FadeIn = styled.img`
   display: inline-block;
   height: 1920px;
   width: 1080px;
   margin-right: calc(50% - 50vw);
   margin-left: calc(50% - 50vw);
   animation: ${fadeIn} 5s ease-in-out;
`;

export default FadeIn
