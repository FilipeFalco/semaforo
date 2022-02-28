import { useState } from 'react';
import { Sinal } from '../Sinal';
import './style.css';

export const Semaforo = () => {
  const [click, setClick] = useState([false, false, false]);
  const [message, setMessage] = useState(String);

  return (
    <div className='container'>
      <div id='semaforo'>
        <Sinal
          onClick={() => {
            setClick([true, false, false]);
            setMessage('Cuidado! espere o sinal abrir');
          }}
          active={click[0]}
          color='#fe1017'
        />
        <Sinal
          onClick={() => {
            setClick([false, true, false]);
            setMessage('Atenção esta prestes a ficar vermelho');
          }}
          active={click[1]}
          color='#ffff3b'
        />
        <Sinal
          onClick={() => {
            setClick([false, false, true]);
            setMessage('Pode passar!');
          }}
          active={click[2]}
          color='#0c741a'
        />
      </div>

      <div>
        <p>{message == null ? '' : message}</p>
      </div>
    </div>
  );
};
