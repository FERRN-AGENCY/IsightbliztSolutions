import React from 'react'
import './Props.css'

const Props = ({
  company,
  highlightOne,
  highlightTwo,
  highlightThree,
  description,
  buttonText,
  buttonText2,
  passage,
  passage2,
  passage3,
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
                <span>{highlightOne}</span> {passage}
                <span> {highlightTwo}</span> {passage2} <span>{highlightThree}</span> {passage3}
            </h1>

            <p>{description}</p>
          <div className='flex'>
              <div className="app__props-button" style={showLine ? { display: 'flex' } : { display: 'none' }}> 
                <a href="https://calendly.com/jeffersonmeet/30min" className=""><span></span>{buttonText}</a>
              </div>

              <div className="app__props-button two" style={showLine ? { display: 'flex' } : { display: 'none' }}> 
                <a href="https://calendly.com/jeffersonmeet/30min" className=""><span></span>{buttonText2}</a>
              </div>
          </div>
        </div>
  )
}

export default Props