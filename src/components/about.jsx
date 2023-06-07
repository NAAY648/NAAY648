import React from 'react'
import { Navbar } from '../navbar'
import about1 from "./images/about1.jpg"
import about2 from "./images/about2.jpg"
import about3 from "./images/about3.jpg"
import about4 from "./images/about4.jpg"
import about5 from "./images/about5.jpg"
import about6 from "./images/about6.jpg"
import about7 from "./images/about7.jpg"
import about8 from "./images/about8.jpg"
import about9 from "./images/about9.jpg"

export const About = () => {
  return (
    <div>
        <Navbar></Navbar>
        <h2 className='purple fs-2 fw-bold text-center mt-4'>About Us</h2>

        <p px-5 fs-6 mt-4>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum eaque quaerat, magni ipsa dolorum voluptates illo ex eum temporibus blanditiis esse nam fugiat quis, error quam minima eligendi velit saepe nemo aliquam sequi? Ipsum iure quae rem ut culpa? Expedita perspiciatis exercitationem consequatur quis alias blanditiis quod commodi ullam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi temporibus odio ipsam sed, dolore tenetur odit quisquam dicta tempore vel obcaecati. Voluptate odio blanditiis eum. Quidem id, maxime numquam sed neque doloremque nostrum cupiditate commodi nam est aspernatur hic animi laboriosam tempora ut dolorum molestiae asperiores vel nobis. Fugit, dicta.
        </p>

        <div className='allimages px-5'>
            <img src={about1} alt="" className='aboutimage'/>
            <img src={about2} alt="" className='aboutimage'/>
            <img src={about3} alt="" className='aboutimage'/>
            <img src={about4} alt="" className='aboutimage'/>
            <img src={about5} alt="" className='aboutimage'/>
            <img src={about6} alt="" className='aboutimage'/>
            <img src={about7} alt="" className='aboutimage'/>
            <img src={about8} alt="" className='aboutimage'/>
            <img src={about9} alt="" className='aboutimage'/>
        </div>

        <p className="fs-6 mt-4 px-4 purple">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos veritatis, debitis voluptatum accusantium, magni deserunt sit soluta tenetur asperiores tempora omnis dolorum, nobis ipsum. Ab aliquam quasi non, commodi eum quidem nobis libero vero possimus incidunt voluptates, officiis odio debitis recusandae, accusantium ipsum sit expedita? Id suscipit dignissimos ab voluptas asperiores dicta tenetur in. Maxime corporis minima tempora quod nobis. Eos sequi nam eligendi minus, deleniti laborum dolore quaerat explicabo, est corporis porro voluptatum exercitationem? Rem esse quibusdam praesentium corporis natus enim ullam eligendi consectetur, quidem, provident illo beatae optio quaerat, laborum sequi nisi vel voluptates a nesciunt dolores porro.
        </p>
  </div>
  )
}
