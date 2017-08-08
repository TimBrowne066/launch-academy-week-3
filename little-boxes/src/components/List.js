import React from 'react';

const List = props => {

  let spaceList =["Asteroids", "Comets", "Moon", "Planets", "Stars", "Sun"]

  let list = spaceList.map((item) =>
    <li>{item}</li>
  )
  
  return (
    <div className='box list'>
      <h1>{props.header}</h1>
      <ul>{list}</ul>
    </div>
  )
}

export default List;
