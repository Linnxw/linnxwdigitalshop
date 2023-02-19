import {useState,useEffect} from 'react';
import Navigasibar from '../component/Navbar.js'
import shoping from "../icons/home.png";
import Listproduk from "../component/Listproduk.js"
import "./home.css"
import {useNavigate} from "react-router-dom"

export default function Home(){
  const [produk,setProduk]=useState([])
  const [load,setLoad]=useState(false)
  const navigate=useNavigate()
  useEffect(()=>{
    reqApi()
  },[])
  const reqApi=async()=>{
    const req=await fetch("https://dummyjson.com/products")
    const pars=await req.json()
    setProduk(pars.products)
    setLoad(true)
  }
  const handleSearch=()=>{
    navigate("/search")
  }
const handleCategory=()=>{
    navigate("/category")
  }
 const handleCheckout=(id)=>{
   navigate(`/${id}`)
 }
  return (
    <div className="container-home">
   <Navigasibar/>
     <div className="banner-info">
      <div className="info-img">
        <img src={shoping} alt="shoping"/>
      </div>
      <div className="info-text">
       <h1>Welcome to my store</h1>
       <div className="description">
         <p>I provide various kinds of cellphones and laptops at affordable prices</p>
       </div>

      </div>
     </div>
    <div className="menu-select">
     <button className="btn-search"  onClick={handleSearch}>Search</button>
     <button className="btn-category" onClick={handleCategory}>Category</button>
    </div>
   
    <div className="container-card">
    <div className="cards">
    {
      load ? (
        
     produk.map((m)=>{
       return <Listproduk title={m.title} img={m.thumbnail} des={m.category} event={()=>handleCheckout(m.id)}/>
     })
   
      )
      :
    <i>loading</i>
    }

    </div>

    </div>
    </div>
    
    )
}