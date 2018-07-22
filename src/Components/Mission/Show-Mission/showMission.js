import React, { Component } from 'react';
import '../../../assets/css/main.css';
import '../../../assets/css/noscript.css';

class ShowMission extends Component {

    render() {
        var elem = <div>HELLO MISSION</div>

        return (
            <div>
                {this.props.toggleComp ? elem : null}
            </div>
        );
    }
}

export default ShowMission;
