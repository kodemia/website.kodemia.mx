
import React from 'react'
// My components
import BootcampCard from '../../BootcampCard'
import LanguageCard from '../../LanguageCard'
// Data
import Bootcamps from '../../../config/bootcamps.json'

export default function OurBootcamps () {
  return (
    <div className='our-bootcamps'>
      <h3 className='title'>Nuestros Bootcamps</h3>
      <div className='bootcamp'>
        <LanguageCard
          name={Bootcamps.name}
          lenguage={Bootcamps.javascript.language}
          description={Bootcamps.javascript.description}
          duration={Bootcamps.javascript.duration}
        />
        <div className='modalities-conteiner'>
          {
            Bootcamps.javascript.modalities.map((modality, index) => (
              <div className='modality' key={index}>
                <BootcampCard
                  mode={modality.name}
                  date={`${modality.schedule.day} de ${modality.schedule.month}`}
                  schedule={`${modality.schedule.days} de ${modality.schedule.hour}`}
                  feature={modality.description}
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className='bootcamp'>
        <LanguageCard
          name={Bootcamps.name}
          lenguage={Bootcamps.python.language}
          description={Bootcamps.python.description}
          duration={Bootcamps.python.duration}
        />
        <div className='modalities-conteiner'>
          {
            Bootcamps.python.modalities.map((modality, index) => (
              <div className='modality' key={index}>
                <BootcampCard
                  mode={modality.name}
                  date={`${modality.schedule.day} de ${modality.schedule.month}`}
                  schedule={`${modality.schedule.days} de ${modality.schedule.hour}`}
                  feature={modality.description}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
