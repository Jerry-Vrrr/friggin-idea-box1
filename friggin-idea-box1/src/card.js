import React from 'react';
import Form from './form'

const Card = ({ title, body, id }) => {

  return (
    <div>
      <article>Card
      <h3>{title}</h3>
      <p>{body}</p>
      <button>delete</button>
      </article>
    </div>
  )
}

export default Card;
