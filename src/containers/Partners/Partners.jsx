import React from 'react'
import Props from '../../components/Props/Props'
import { PartnerMarquee } from '../../components'


const Partners = () => {
  return (
    <div className='Partners'>
        <Props
            company="Partners"
            title=""
            passage="With the"
            passage2="Partners"
            highlightOne="Working"
            highlightTwo="Right"
            description="We partner with early-stage blockchain teams to execute go-to-market systems that drive real traction."
            buttonText=""
            id="Partners"
            showLine={false}
        /> 
        <PartnerMarquee />
    </div>
  )
}

export default Partners