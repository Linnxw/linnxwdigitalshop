import "./listproduk.css"
export default function Listproduk({title,img,des,event}){
  return(
    <div className="card">
      <div className="card-img">
       <img src={img} alt="card"/>
      </div>
       <div className="card-info">
         <p>{title}</p>
         <p>{des}</p>
       </div>
      <div className="card-buy">
       <button onClick={event}>Buy</button>
      </div>
    </div>
    )
}