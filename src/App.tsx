
import '../styles/theme.css';
import '../styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu/App';
import { CountDown } from './components/CountDown/App';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';

export function App() {
  let numero = 0;

  function handleClick() {
    const span = document.getElementById('numero');

    if (!span) return;

    numero += 1;
    span.innerText = numero.toString();
    console.log(numero, Date.now());
  }

  return (
    <>
    <Heading>{`Número: ${numero}`}</Heading>
     <button onClick={handleClick}>Aumenta</button>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='from' action=''>
          <div className='formRow'>
            <DefaultInput labelText='task' id='meuInput' type='text' title='titulo' placeholder='Digite algo'/>
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
               <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />}/>
          </div>
        </form>
      </Container>

      <Container> 
       <Footer />
      </Container>

    </>
  );
}