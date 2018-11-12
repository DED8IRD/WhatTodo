// RenderArraysAsList.js
import React from 'react';

const RenderArraysAsList = (props) => {
  const arr = ['this', 'is', 'a', 'list', null, '', false];
  
  return (
    <div>
			<ol>
				{arr.map((item) => <li>{item}</li>)}
			</ol>    	
    </div>
  )
}

export default RenderArraysAsList;