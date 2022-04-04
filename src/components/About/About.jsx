import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div>
      <div className="about m-auto p-12 md:p-24">
        <div className="text-center text-4xl text-yellow-200 my-12">ABOUT US</div>
        <div className="about2 gap-8 m-auto flex flex-col-reverse md:flex-row  md:p-12">
          <p className="textt text-center text-1xl md:text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptas id perferendis recusandae? Sequi numquam quidem illum! Delectus quasi ipsam dolores ipsum vel cupiditate voluptatem veritatis, fuga, repellendus voluptatum reiciendis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptas id perferendis recusandae? Sequi numquam quidem illum! Delectus quasi ipsam dolores ipsum vel cupiditate voluptatem veritatis, fuga, repellendus voluptatum reiciendis!
          </p>
          <video width="280" height="280" autoPlay loop>
            <source src='/images/ojaslogo.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  )
}

export default About