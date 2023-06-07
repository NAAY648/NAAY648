import React from 'react'
import { Navbar } from '../navbar'
import heroimage from "./images/hero-img.png"
import { useNavigate } from 'react-router-dom'
import client1 from "./images/client-1.png"
import client2 from "./images/client-2.png"
import client3 from "./images/client-3.png"
import client4 from "./images/client-4.png"
import client5 from "./images/client-4.png"
import client6 from "./images/client-6.png"
import client7 from "./images/client-7.png"
import client8 from "./images/client-8.png"

export const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Navbar></Navbar>
        <div className='mybg'>
            <h2 className='purple mt-4 text-center'>We offer Agricultural Solution</h2>
            <p className="mt-3 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero architecto quo, repudiandae veritatis ullam mollitia reiciendis voluptates, maxime placeat odio velit. Voluptates aliquam doloribus officia ex ratione eos incidunt praesentium.
            </p>

            <button className='btn btn-primary btn-lg my-3'
            onClick={() => {navigate("/pricing")}}>Get Started</button>
            <img src={heroimage} alt="" className='mt-4 img-fluid'/>
        </div>

        <div className='clients p-4'>
            <h2 className='purple mt-3 fs-2 text-center'>Our Clients</h2>

            <div className='allclients d-flex justify-content-center align-items-center flex-wrap gap-5 my-5'>
                <img src={client1} alt="" className='clientimage' />
                <img src={client2} alt="" className='clientimage' />
                <img src={client3} alt="" className='clientimage' />
                <img src={client4} alt="" className='clientimage' />
                <img src={client5} alt="" className='clientimage' />
                <img src={client6} alt="" className='clientimage' />
                <img src={client7} alt="" className='clientimage' />
                <img src={client8} alt="" className='clientimage' />
            </div>
        </div>

        <div className='who'>
            <h2 className='purple fs-2 my-4'>Who are we?</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor praesentium delectus aperiam adipisci magni illum soluta quam voluptatum id fugit, facere consectetur tenetur sed unde dignissimos dicta aliquam impedit debitis aspernatur numquam! Ex sit aut quia, necessitatibus vitae itaque cupiditate? Minus unde debitis similique fugiat totam itaque consequuntur est voluptate voluptatem quas! Voluptatem, sequi voluptates! Recusandae iste ea adipisci saepe, obcaecati et nesciunt voluptate cupiditate, dicta asperiores eveniet distinctio totam?
            </p>

            <button data-aos="flip-left"
            className='btn btn-danger btn-lg' 
            onClick={() => {navigate("/about")}}>Learn More</button>
        </div>
    </div>
  )
}
