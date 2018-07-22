import React, { Component } from 'react';
import '../../../assets/css/main.css';
import '../../../assets/css/noscript.css';

class ShowInteractiveExperiences extends Component {

    render() {
        var elem = <div>HELLO INTERACTIVE EXPERIENCES</div>

        return (
            <div>
                {this.props.toggleComp ? elem : null}
            </div>
        );
    }
}

export default ShowInteractiveExperiences;
