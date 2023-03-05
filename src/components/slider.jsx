import React from 'react'
import dog from '../rsc/собака.jpg'
import mouse from '../rsc/мышь.jpg'
import gorilla from '../rsc/горилла.jpg'
const Slider = () => {
    return (
        <div>
          <div id="carouselExampleIndicators" className="carousel slide m-auto bg-info bg-opacity-25 w-75 p-2" data-bs-ride="carousel" style={{minHeight:'400px'}}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={dog} className="d-block mx-auto" alt="Собака" style={{width:'25%',height:'25%'}}/>
          <h2 className="text-center">Найдена собака</h2>
          <p className="fs-5 text-black">Собака рыжая, была утеряна в красногвардейском районе</p>
        </div>
        <div className="carousel-item">
          <img src={mouse} className="d-block mx-auto" alt="Мышь" style={{width:'30%',height:'30%'}}/>
         <h2 className="text-center">Найдена мышь</h2>
          <p className="fs-5 text-black">Мышь серая, была утеряна в центральном районе</p>
        </div>
        <div className="carousel-item">
          <img src={gorilla} className="d-block mx-auto" alt="Горилла" style={{width:'30%',height:'30%'}}/>
          <h2 className="text-center">Найдена горилла</h2>
          <p className="fs-5 text-black">Горилла, была утеряна в красногвардейском районе</p>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Предыдущий</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Следующий</span>
      </button>
    </div>
        </div>
    )
}
        
export default Slider