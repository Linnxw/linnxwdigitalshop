import img from "../icons/back.png";
import "./menuback.css"
export default function MenuBack({text,event}){
  return(
    <div className="container-back">
     <div className="img-back" onClick={event}>
      <img src={img} alt="back menu"/>
     </div>
     <div className="text-page">
      <p>{text}</p>
     </div>
    </div>
    )
}