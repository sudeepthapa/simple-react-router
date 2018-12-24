import React from 'react';
const Rainbow = (WrappedComponent) =>{

    const colors = ['red', 'pink', 'yellow', 'blue' , 'orange', 'green'];
    const randomColors = colors[Math.floor(Math.random()*5)];
    const classes= randomColors + '-text';
    return(props) =>{
        return(
            <div className={classes}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;