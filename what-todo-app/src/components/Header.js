import React from 'react';

const Header = (props) => {
   return (
     <div>
        <h1 className="title">{props.title}</h1>
        {props.subtitle && <h3 className="subtitle">{props.subtitle}</h3>}        
     </div>
   )
}

export default Header
