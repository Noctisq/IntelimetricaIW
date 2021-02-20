import React from 'react'

export default function Restaurant({ rating, name, contact, address }) {
  
  const { site, email, phone } = contact;
  const { street, city, state, location } = address;
  return (
    <article className='restaurant'>
      <div className='img-container'>
        <img src={"https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"} ></img>
      </div>
      <div className='restaurant-footer'>
        <h3>{rating}</h3>
        <h4>{name}</h4>
        <p>{site}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <h4>Location: </h4>
        <p>{street}</p>
        <p>{city}</p>
        <p>{state}</p>


        
      </div>
      <div className="fb-like" data-href="https://www.facebook.com/FinalFantasyXIV" data-width="250" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>
    </article>
  )
}
