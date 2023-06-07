import React from 'react'
import { Navbar } from '../navbar'
import pricingfree from "./images/pricing-free.png"
import pricingbusiness from "./images/pricing-business.png"
import pricingstarter from "./images/pricing-starter.png"
import pricingultimate from "./images/pricing-ultimate.png"
import { useNavigate } from 'react-router-dom'

export const Pricing = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Navbar></Navbar>
         <h3 className='purple text-center mt-5 fw-bold'>Our Pricing</h3>
         <h3 className='text-center fs-4 mt-4'>
            Here is our Pricing List
         </h3>

     <div className='d-flex my-5 justify-content-around align-items-center flex-wrap'>

     <div class="card" style={{width: "18rem"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <img src={pricingfree} alt="" />
    </li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>

     <div class="card" style={{width: "18rem"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <img src={pricingbusiness} alt="" />
    </li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>

     <div class="card" style={{width: "18rem"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <img src={pricingstarter} alt="" />
    </li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>

     <div class="card" style={{width: "18rem"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <img src={pricingultimate} alt="" />
    </li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>
    </div>    
 </div>
  )
}
