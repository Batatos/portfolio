import React from 'react';
import DrawerBar from './DrawerBar';
import ParticlesBg from 'particles-bg';

export default class Root extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <DrawerBar/>
                    <ParticlesBg type="cobweb" bg={true} />
                </div>
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        )
    }
}