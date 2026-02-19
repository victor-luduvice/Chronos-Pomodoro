
import './styles/theme.css';
import './styles/global.css';


import { Container } from './components/Container';
import { Heading } from './components/Heading';
 
 export function App() {
     
     return (
       <>
         <Container>
          <Heading children="LOGO" />
         </Container>
 
         <Container>
          <Heading children ="MENU" />
         </Container>
       </>
     );
 }