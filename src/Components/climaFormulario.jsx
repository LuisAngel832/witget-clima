import { useState } from "react"
import styles from './climaApp.module.css'

const ClimaFormulario = ({handleSubmit})=>{
    const [City, setCity] = useState('')

    const handleChange = (e)=>{
        setCity(e.target.value)
    }
    
    const handleSubmitForm = (e)=>{
        e.preventDefault()
        handleSubmit(City)
    }

    return (
        <form className={styles.formulario_container} onSubmit={handleSubmitForm}>
            <input className={styles.formulario_input} onChange={handleChange} type="text"/>
            <button className={styles.formulario_boton} >enviar</button>
        </form>
    )
}

export default ClimaFormulario