
import React from 'react'
export interface Props {
  character: string,
}

export default function InfoCard ({
  character
}: Props) {
  return (
      <span className= 'cursor-text'>{character}</span>
  )
};
