import React, { Component } from 'react';
import '../../../assets/css/main.css';
import '../../../assets/css/noscript.css';

class ShowTheTeam extends Component {

    render() {
        var elem = <div>HELLO THE TEAM</div>

        return (
            <div>
                {this.props.toggleComp ? elem : null}
            </div>
        );
    }
}

export default ShowTheTeam;
