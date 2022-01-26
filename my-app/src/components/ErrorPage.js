import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return <div>
      
      <br/>
      <div style={{textDecoration:'1'}}>EROR 404</div>
      <br/>
      Question Not Found
      <Link to='/'><button>Return to login</button></Link>
  </div>;
}
