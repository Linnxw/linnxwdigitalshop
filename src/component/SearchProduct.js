import "./searchproduct.css"
export default function SearchProduct({title,category,description,event,price,img}){
  return(
    <div className="card-search">
      <div className="card-search-img">
       <img src={img} alt="card"/>
      </div>
      <div className="info-search-buy">
     <div className="card-search-info">
         <p><strong>{title}</strong></p>
         <p>{category}</p>
         <p className="descr">{description}</p>
     </div>
      <div className="card-search-buy">
       <button onClick={event}>{"$"}{price}</button>
      </div>
      </div>
     
    </div>
    )
}