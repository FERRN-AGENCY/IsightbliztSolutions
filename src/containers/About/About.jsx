import React from 'react'
import Props from '../../components/Props/Props'
import { ShardGrid } from '../../components'
import './About.css'

const About = () => {
  return (
    <div className='About'>
        <Props
            company="About Us"
            title=""
            passage="on What Actually"
            passage2=""
            highlightOne="Focused"
            highlightTwo="Works"
            description="We help early-stage blockchain teams execute go-to-market systems that drive real traction."
            buttonText=""
            id="AboutUs"
            showLine={false}
        /> 
        <ShardGrid />
    </div>
  )
}

export default About