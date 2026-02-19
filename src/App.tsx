import 'styles/global.css';
import 'styles/theme.css';
import { Container } from './components/Container';
import { Heading } from './components/Headin';

export function App() {

    console.log('ola');
    return (
       <>
       <Container> 
        <Heading text="LOGO" />
        </Container>


        <Container>
            <Heading text="MENU" />
        </Container>





       </>
    );

}