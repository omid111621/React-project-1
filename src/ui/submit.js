'use strict';

import React from 'react';

export default function Submit(props){
    
    return (
        <button className='submit' onClick={() => props.submit()}>submit</button>
    )

}