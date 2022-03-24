function mineLocation(field){
  let estimate, exact;
  field.forEach((chunk, i)=>{
    if(chunk.includes(1)){
      estimate = i
    }
  })
  field[estimate].forEach((attempt, i)=>{
    if(attempt === 1){
      exact = i
    }
  })
  return [estimate, exact]
}