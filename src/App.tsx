import 'styles/global.css';
import 'styles/theme.css';
import { Conteiner } from './components/Conteiner';
import { Heading } from './components/Headin';

export function App() {

    console.log('ola');
    return (
       <>
       <Conteiner> 
        <Heading text="LOGO" />
        </Conteiner>


        <Conteiner>
            <Heading text="MENU" />
        </Conteiner>





       </>
    );

}