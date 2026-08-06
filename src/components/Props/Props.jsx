import React from 'react'
import './Props.css'

const Props = ({
  company,
  title,
  highlightOne,
  highlightTwo,
  description,
  buttonText,
  passage,
  passage2,
  id,
  showLine    
}) => {
  return (
        <div className="app__props" id={id}>
            <div className='app__props-title'>
              <span></span>
                <h3>{company}</h3>
              <span></span>
            </div>

            <h1>
                {title} <span>{highlightOne}</span> {passage}
                <span> {highlightTwo}</span> {passage2}
            </h1>

            <p>{description}</p>

            <div className="app__props-button" style={showLine ? { display: 'flex' } : { display: 'none' }}> 
              <a href="https://calendly.com/jeffersonmeet/30min" className=""><span></span>{buttonText}</a>
            </div>
        </div>
  )
}

export default Props