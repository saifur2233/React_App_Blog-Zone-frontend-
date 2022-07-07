import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
//import style from './pagination.css'

function pagination() {

    let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        
        <Pagination >{items}</Pagination>
        
    </div>
  )
}

export default pagination