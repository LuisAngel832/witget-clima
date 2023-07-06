import { useEffect, useState } from "react"
import MostrarInfo from "./mostrarInfo"
import ClimaFormulario from "./climaFormulario"
import ClimaMapa from "./climaMapa"
import styles from './climaApp.module.css'

const ClimaApp = ()=>{

    const [Clima, setClima] = useState(null)
    useEffect(()=>{
        mandarInfo()
    },[])


    const handleSubmit = (City)=>{
        setClima(null)
        mandarInfo(City)
    }

    const mandarInfo = async (city = 'mexico')=>{
        try{
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)

            const json = await request.json()
            setClima(json)
            console.log(Clima)
        }catch(error){}
    }




    return (
        <div className={styles.container}>
            <ClimaFormulario
            handleSubmit={handleSubmit}
            />

            <MostrarInfo
            clima={Clima}
            />

            <ClimaMapa
            Clima={Clima}
            />
        </div>

    )
}

export default ClimaApp