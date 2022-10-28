import styled, { keyframes } from 'styled-components';
import { Image } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


// const FadeIn = styled.img`
const FadeIn = styled(Image)`
   display: inline-block;
   height: 1920px;
   width: 1080px;
   margin-right: calc(50% - 50vw);
   margin-left: calc(50% - 50vw);
   animation: ${fadeIn} 5s ease-in-out;
`;

export default FadeIn

