import {useState} from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


const App = () => {
  const [name, setName] = useState('Henrique');
  
  const [bg, setBg] = useState('#ff0000');

  const[list, setList] = useState([
    "Hello world!",
    "Teste",
    "Aqui vai uma frase"
  ])

  const handleClick = () => {
    setBg('#0000ff');
  }

  const handleClick2 = () => {
    setBg('#ff0000');
  }

  const handleName = () => {
    setName('Henrique Nery')
  }

  const handleName2 = () => {
    setName('Bonieky')
  }

  return (
    <div style={{backgroundColor: bg}}>
      <Header name={name} />

      {bg === '#ff0000' &&
        <button onClick={handleClick}>Clique para mudar o background</button>
      }

      {bg === '#0000ff' &&
        <button onClick={handleClick2}>Clique para mudar o background</button>
      }

      <button onClick={handleName}>Clique para mudar o nome</button>

      <button onClick={handleName2}>Clique para mudar o nome</button>

      {name === 'Henrique Nery' && 'nome do desenvolvedor'}
      {name === 'Bonieky' && 'nome do professor'}
      <hr/>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Footer />
    </div>
  )
}

export default App