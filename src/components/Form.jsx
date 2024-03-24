import './Form.css'

const Form = ({nome, placeholder, data}) => {
  return (
    <div className='container-inputs'>
        <label>{nome}</label>
        <input type="text"  placeholder={placeholder} onChange={(e) =>{ data(e.target.value)}}/>
    </div>
  )
}

export default Form