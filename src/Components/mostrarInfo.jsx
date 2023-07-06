import styles from './climaApp.module.css'
const MostrarInfo = ({clima})=>{
    return (
        <div>
            <h1 className={styles.mostrar_titulo}>{clima?.location.name}</h1>
            
            <div className={styles.divicion}>
                <img className={styles.divcion_img} src={clima?.current.condition.icon}/>
                <div>
                    <h2>{clima?.current.condition.text}</h2>
                    <h2>{clima?.current.temp_c}°</h2>
                </div>
                
            </div>
           
            

        </div>
    )
}
export default MostrarInfo