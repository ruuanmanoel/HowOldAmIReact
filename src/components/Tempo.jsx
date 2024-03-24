import React from 'react'
import './Tempo.css'

const Tempo = ({data}) => {
  return (
    <div className='container-tempo'>
        <span><span className="interativo">{!data.anos ? '--' : data.anos}</span> anos</span>
        <span><span className="interativo">{!data.meses ? '--' : data.meses}</span> meses</span>
        <span><span className="interativo">{!data.dias ? '--' : data.dias}</span> dias</span>    
    </div>
  )
}

export default Tempo