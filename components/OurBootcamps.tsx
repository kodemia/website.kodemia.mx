
import React from 'react'
// My components
import BootcampCard from './BootcampCard'
import Lenguage from './LenguageCard'
// Data
import Bootcamps from '../config/bootcamps.json'

export default function OurBootcamps () {
  return (
    <div className='our-bootcamps'>
      <h3 className='title'>Nuestros Bootcamps</h3>
      <div className='bootcamp'>
        <Lenguage
          name={Bootcamps.name}
          lenguage={Bootcamps.javascript.lenguage}
          description={Bootcamps.javascript.description}
          duration={Bootcamps.javascript.duration}
        />
        <div className='modalities-conteiner'>
          {
            Bootcamps.javascript.modalities.map(({ name, description, schedule: { day, month, days, hour } }, index) => (
              <div className='modality'>
                <BootcampCard 
                  key={index}
                  mode={name} 
                  date={`${day} de ${month}`} 
                  schedule={`${days} de ${hour}`}
                  feature={description}
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className='bootcamp'>
        <Lenguage
          name={Bootcamps.name}
          lenguage={Bootcamps.python.lenguage}
          description={Bootcamps.python.description}
          duration={Bootcamps.python.duration}
        />
        <div className='modalities-conteiner'>
          {
            Bootcamps.python.modalities.map(({name, description, schedule: { day, month, days, hour } }, index) => (
              <div className='modality'>
                <BootcampCard 
                  key={index}
                  mode={name} 
                  date={`${day} de ${month}`} 
                  schedule={`${days} de ${hour}`}
                  feature={description}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}