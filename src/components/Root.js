import React from 'react';
import Navbar from './Navbar';
import ParticlesBg from 'particles-bg';
// import { Navbar } from 'react-bootstrap';

export default class Root extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Navbar/>
                    <ParticlesBg type="cobweb" bg={true} />
                </div>
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        )
    }
}