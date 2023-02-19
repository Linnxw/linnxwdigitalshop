import img from "../icons/612885.png";
import go from  "../icons/go.png";
import "./gratisongkir.css"
export default function GratisOngkir(){
  return(
    <div className="container-g">
      <img src={img} alt="Voucher"/>
      <i>Gunakan Voucher/Masukan kode promo</i>
      <img src={go} alt="" className="go"/>
    </div>
    )
}