import React from 'react'

export default function Carousal() {
  return (
    <div>
        <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"cover !important" }}>
        <div className="carousel-inner" id='carousel'>

   


    <div className="carousel-item active">


    


      <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?pasta" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?tofu" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></div></div>
  )
}
