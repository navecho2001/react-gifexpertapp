import React, { useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

const [categories, SetCategories] = useState(['One Punch']);

// const handleAdd = () => {
//   //Solución 1
//   //SetCategories( ['HunterXHunter' , ...categories ]);

//   //Solucion 2
//   SetCategories( cats => [...cats, 'HunterXHunter']);
// }

  return (
  <div>
<h2>GifExpertApp</h2>

<AddCategory SetCategories={ SetCategories }/>
<hr/>
{/* <button onClick={ handleAdd }>Agregar</button> */}

<ol>
  {
    categories.map( category  => (
     <GifGrid 
     key = { category }
     category={ category } /> 
    ))
  }
</ol>

  </div>
  )
};
