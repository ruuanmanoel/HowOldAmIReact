import './App.css'
import { FaCircleArrowDown } from "react-icons/fa6";
import Form from './components/Form'
import { useState } from 'react';
import Tempo from './components/Tempo';
import Botao from './components/Botao';

function App() {
  const [days, setDays] = useState(0)
  const [months, setMonths] = useState(0)
  const [years, setYears] = useState(0)
  const [dataFormatada, setDataFormatada] = useState({})
  return (
    <div className="container">
      <div className="form-area">
        <Form nome={"Dia"} placeholder={"DD"} data={setDays}/>
        <Form nome={"Mes"} placeholder={"MM"} data={setMonths}/>
        <Form nome={"Ano"} placeholder={"AAAA"} data={setYears}/>
      </div>
      <div className="area-divisor">
        <div className="linha"></div>
        <div className="botao">
           <Botao dias={days} meses={months} anos={years} setDataFormatada={setDataFormatada}/>
        </div>
      </div>
      <Tempo data={dataFormatada}/>
    </div>
  )
}

export default App
