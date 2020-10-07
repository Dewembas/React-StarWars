
import React, {useState, useEffect} from 'react';
const api = 'https://swapi.dev/api/'
function PersonContent(props) {
  const [data, setData] = useState(null)
  let {personNumber, search} = props
  useEffect(()=>{
    fetch(`${api}people/?search=${search}/`)
    .then(res=>res.json())
    .then(res=>setData(res))
    .catch(error=>console.log(error))
  },[search])
  // let{personName} = props
  // fetch(`${api}people/?search=${personName}`)
  // .then(res=>res.json())
  // .then(res=>setData(res))
  // .catch(error=>console.log(error))
  
  if(search){
  
    return (
   
    <>
   Name: {data?.name}<br /><br />
    Birth year: {data?.birth_year}<br /><br />
    Gender: {data?.gender}<br /><br />
    Height: {data?.height}<br /><br />
   </>
    
  
  );
}else{
  return( <div>
    <div><h1>No people</h1></div>
  </div>)
}
}

export default PersonContent;