import React from 'react';

export function whatever() {
  
  let miser = 5;
  let randomMess = Math.random();
  let result = miser + randomMess;

  if(result > 5.5) {
    miser = 100;
  } else {
    miser = 300;
  }

  return (
    <p>Man, I wonder if miser will equal 100 or not.. miser ={miser}</p>
  );
}