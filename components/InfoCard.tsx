
import React from 'react';

type Props = {
  icon: string,
  title: string,
  description: string

}

export default function InfoCard({
  icon,
  title,
  description
}: Props) {


  return (
    <div className='info-card'>
      <img src={icon} className='ikon' />
      <h2 className='title'>{title}</h2>
      <p className='description'>{description}</p>
    </div>
  );
};