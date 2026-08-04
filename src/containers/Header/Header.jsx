import React from 'react'
import Props from '../../components/Props/Props'

const Header = () => {
  return (
    <div className='app__header'>
       <Props
            company="Insightblitz Solutions"
            passage="That Answer Every"
            passage2="And"
            passage3="Every Lead"
            highlightOne="AI Employees"
            highlightTwo="Call"
            highlightThree="book"
            description=" We build and deploy AI systems for clinics, real estate teams, and high ticket service
                          businesses. Your leads get answered in seconds. Every time. Even at 2am."
            buttonText="Book A Call"
            buttonText2="Hear It Answer A Call"
            id=""
            showLine={true}
        />
    </div>
  )
}

export default Header