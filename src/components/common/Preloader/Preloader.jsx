import React from 'react';
import preloader from './../../../images/preloader.gif';

let Preloader = (props) => {
    return(
        <img alt={'loading'} style={{position: 'absolute', transform: 'translate(-50%)', top: '50%', left: '50%'}} src={preloader} />
    )
}

export default Preloader;