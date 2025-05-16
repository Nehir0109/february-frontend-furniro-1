
import style from "./NumberBox.module.scss"

const NumberBox = () => {
    return (
       
         
        <div className={style.boxs} >
          
             <div className={style.box}>1</div>
             <div className={style.box}>2</div>
             <div className={style.box}>3</div>
             <div className={style.boxNext}>Next</div>
            
        </div>
       
    )
}

export default NumberBox ;