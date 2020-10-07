import React, {useState} from 'react';
 
function MainMenu(props) {
    let {setPersonNumber, setSearch} = props
    let searcCor = (e)=>setPersonNumber(e.target.value)
    let [val, setVal] = useState(0)  
    
  return (
    <div className="main-menu">
    
      <input type="text"
             placeholder="search"
             onChange={(e) => setVal(e.target.value)}
            />
             
             <input type="submit" value="Search" onClick={() => { setSearch(val) }} />
             
    </div>
  );
  
}

export default MainMenu;
