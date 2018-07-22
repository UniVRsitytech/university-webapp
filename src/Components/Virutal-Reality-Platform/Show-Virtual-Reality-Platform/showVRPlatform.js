import React, { Component } from 'react';
import '../../../assets/css/main.css';
import '../../../assets/css/noscript.css';

class ShowVRPlatform extends Component {

    render() {
        var elem = <div>HELLO VIRTUAL REALITY PLATFORM</div>

        return (
            <div>
                {this.props.toggleComp ? elem : null}
            </div>
        );
    }
}

export default ShowVRPlatform;
