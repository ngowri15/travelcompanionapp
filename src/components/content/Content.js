import "./Content.css";
import React, { useRef, useState } from 'react';


export default function Content() {
 return (

    <div className="content">
      <h1>Content</h1>
      <div>
      <label>From</label>
      <select>
      <option>From Country</option>
      <option>UK</option>
      <option>Germany</option>
</select>
<select>
      <option>To Country</option>
      <option>UK</option>
      <option>Germany</option>
</select>
<input type="date"/>

</div>
    </div>
  );
}
