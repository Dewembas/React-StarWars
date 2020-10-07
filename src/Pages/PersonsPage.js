import React, { useState } from 'react';
import PersonsContent from '../Elements/PersonsContent'
import PersonMenu from '../Elements/PersonMenu'
function PersonPage(props) {
  const [personNumber, setPersonNumber]=useState("")
  const [search, setSearch]=useState('')
  return (
    <div>
      <PersonMenu
      personNumber={personNumber}
      setPersonNumber={setPersonNumber}
      setSearch={setSearch}
      />
        <PersonsContent 
        personNumber={personNumber}
        search={search}
        />
    </div>
  );
}

export default PersonPage;