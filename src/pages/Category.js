import SearchProduct from "../component/SearchProduct.js"
import {useNavigate} from "react-router-dom";
import MenuBack from "../component/MenuBack.js"
import Button from 'react-bootstrap/Button';
import "./category.css"
import {useState} from "react"
export default function Category(){
  const [product,setProduct]=useState([])
  const navigate=useNavigate()
  const getCategoryProduct=async(key)=>{
   const req=await fetch(`https://dummyjson.com/products/category/${key}`)
   const pars=await req.json()
   setProduct(pars.products)
  }
  
  const categoryPhone=()=>{
    getCategoryProduct("smartphones")
  }
  
  const categoryLaptop=()=>{
      getCategoryProduct("laptops")
  }
  
  const categoryParfum=()=>{
   getCategoryProduct("fragrances")
  }
  
  const handleCheckout=(id)=>{
    navigate(`/${id}`)
  }

const categorySkincare=()=>{
   getCategoryProduct("skincare")
  }
const handleBack=()=>{
    navigate("/")
  }
  return (
    <div className="c-category">
   <MenuBack text="Category" event={handleBack}/>
        <div className="buttons">

          <Button variant="secondary"  onClick={categoryPhone}>Smartphone</Button>
          <Button variant="secondary" onClick={categoryLaptop}>Laptop</Button>
          <Button variant="secondary" onClick={categoryParfum}>parfum</Button>
          <Button variant="secondary" onClick={categorySkincare}>skincare</Button>
        </div>
      <div className="container">
      {
        product.map((m)=>{
          return <SearchProduct title={m.title} category={m.category} description={m.description} price={m.price} img={m.thumbnail} event={()=>handleCheckout(m.id)}/>
        })
      }
       
      </div>
    </div>
    
    )
}