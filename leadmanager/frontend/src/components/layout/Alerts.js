import React,{Component, Fragment, useEffect} from 'react';
import {  withAlert  } from 'react-alert';


function Alerts({alert}) {
    useEffect(() => {
        alert.show('Testing')
    },[])

    return <Fragment />
}

export default withAlert()(Alerts);
