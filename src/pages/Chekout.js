import {useParams,useNavigate,useHistory} from "react-router-dom";
import Swal from 'sweetalert2'
import "./checkout.css"
import MenuBack from "../component/MenuBack.js"
import Protect from "../component/Protect.js"
import Vourcer from '../component/GratisOngkir.js'
import {useEffect,useState} from "react"

export default function Chekout(){
  const [product,setProduct]=useState({})
  const [count,setCount]=useState(1)
  const [buy,setBuy]=useState({})
  const navigate=useNavigate()
 const {chekout}=useParams()
 const history=useHistory()
  const getProduct=async()=>{
    const req=await fetch(`https://dummyjson.com/products/${chekout}`)
    const pars=await req.json()
  setProduct(pars)
  }
 const getProductBuy=async()=>{
    const req=await fetch(`https://dummyjson.com/products/${chekout}`)
    const pars=await req.json()
  setBuy({price:pars.price})
  }
  useEffect(()=>{
    getProduct()
   getProductBuy()
  })
  
  const handlePlus=()=>{
    
    if(count < product.stock){
   setCount(count+1)
   setBuy({price:buy.price+product.price})
    }
  }
  const handleMinus=()=>{
    if(count > 0){
      setCount(count-1)
    }
    if(buy.price > 0){
      setBuy({price:buy.price-product.price})
    }
    
    
  }
  const handleBack=()=>{
    history.goBack()
  }
  
  const handleAlertSucces=()=>{
   Swal.fire(
  'Berhasil Checkout',
  'Terimakasih sudah percaya kami',
  'success'
)
  }
  return (
    <div className="c-container">
    <MenuBack text="Keranjang saya" event={handleBack}/>
     
      <div className="c-select">
        <div className="c-img">
          <img src={product.thumbnail} alt="img"/>
        </div>
        <div className="c-input">
          <p>{product.title}</p>
          <p>{"$"}{product.price}</p>
          <i>Stock:{product.stock}</i>
          <div className="c-count">
         <button className="minus" onClick={handleMinus}>-</button>
         <div className="counter">
          <p>{count}</p>
         </div>
         <button className="plus" onClick={handlePlus}>+</button>

          </div>
        </div>
      </div>
      <div className="protect">
       <Protect/>
      </div>

      <Vourcer/>
      <div className="cc-cal">
      <p>Total : {"$ "}{buy.price}</p>
      <button onClick={handleAlertSucces}>Checkout</button>
      </div>
    </div>
    )
}