import React from 'react';
import MeuSVG from '../assets/react.svg';
import { FaCircleArrowDown } from "react-icons/fa6";

const Botao = ({dias, meses, anos , setDataFormatada}) => {
  const handleClick = (e  )=>{
    const dataNascimentoObj = new Date(`${dias}/${meses}/${anos}`);
    const dataAtual = new Date();

    // Calcula a diferença em milissegundos
    const diferencaEmMilissegundos = dataAtual - dataNascimentoObj;

    // Converte a diferença de milissegundos para dias
    const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
    const diferencaEmDias = Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos);

    // Calcula a idade em anos
    const idadeEmAnos = Math.floor(diferencaEmDias / 365);

    // Calcula o resto dos dias para calcular os meses
    const diasRestantes = diferencaEmDias % 365;

    // Calcula a idade em meses
    const idadeEmMeses = Math.floor(diasRestantes / 30);

    // Calcula o resto dos dias para calcular os dias
    const diasRestantesFinal = diasRestantes % 30;

    // Formata a idade em uma string legível
    const idadeFormatada ={
      anos: idadeEmAnos,
      meses: idadeEmMeses,
      dias: diasRestantesFinal
    } 
    

     setDataFormatada(idadeFormatada);
  }
  return (
    <div onClick={handleClick}>
      <FaCircleArrowDown size={80} /> 
    </div>
  )
}

export default Botao