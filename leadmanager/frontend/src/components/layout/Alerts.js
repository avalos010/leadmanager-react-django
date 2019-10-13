import React,{Component, Fragment, useEffect} from 'react';
import {  withAlert  } from 'react-alert';
import {connect} from 'react-redux';


function Alerts(props) {
    useEffect(() => {
    props.alert.show(props.errors.status)
      
    },[props.errors.status])

    return <Fragment />
}

const mapStateToProps = state => ({errors: state.errors});

const connectAlerts = connect(mapStateToProps)(Alerts);
export default withAlert()(connectAlerts);
