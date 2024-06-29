import React, { useContext } from 'react'
import { TaiSanContext } from '../context/TaiSanContext';


const TaiSan = ({data}) => {
    const  value = useContext(TaiSanContext);

  return (
    <div>
      <h1>Danh sach san pham </h1>
      {data.map((item) => (
               <div className="card">
               <img src="..." className="card-img-top" alt="..."/>
             <div className="card-body">
               <h5 className="card-title">{item.title}</h5>
               
               <a href="#" className="btn btn-primary">Xem chi tiet </a>
             </div>
           </div>
      ))}
    </div>
  )
}

export default TaiSan;
