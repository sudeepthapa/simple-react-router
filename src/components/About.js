import React from 'react';
import Rainbow from '../hoc/Rainbow'
const About = () =>{
    return(
        <div className="container">
            <h4 className="center">
                This is a About Page.
            </h4>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptatum accusantium eaque quibusdam rem vel, consequuntur, nisi quaerat totam voluptas labore non beatae, omnis quis repudiandae illo vitae voluptate? Unde.</p>
        </div>

    )
}

export default Rainbow(About);