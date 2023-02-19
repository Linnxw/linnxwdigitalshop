import {useState} from 'react';
import {useNavigate} from "react-router-dom"
import MenuBack from "../component/MenuBack.js"
import SearchProduct from "../component/SearchProduct.js"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./search.css"
export default function Search(){
  const [keyword,setKeyword]=useState("")
  const [product,setProduct]=useState([])
  const navigate=useNavigate()
  const handleChange=({target})=>{
    setKeyword(target.value)
  }
  const handleButton=()=>{
    getProduk()
  }
  const getProduk=async()=>{
    const req=await fetch(`https://dummyjson.com/products/search?q=${keyword}`)
    const pars=await req.json()
    setProduct(pars.products)
  }
const handleCheckout=(id)=>{
    navigate(`/${id}`)
  }
 const handleBack=()=>{
    navigate("/")
  }
  return (
    <div className="container-search">
     <MenuBack text="Category" event={handleBack}/>
   <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search product"
          aria-label="Search Product"
          aria-describedby="basic-addon2"
        onChange={handleChange}/>
        <Button variant="outline-secondary" id="button-addon2" onClick={handleButton}>
          Button
        </Button>
      </InputGroup>
      <div className="list-product">
         {
     product.map((m)=>{
       return <SearchProduct title={m.title} category={m.category} description={m.description} price={m.price} img={m.thumbnail} event={()=>handleCheckout(m.id)}/>
     })
   }
      </div>

    </div>
    )

}