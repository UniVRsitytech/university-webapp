import React, { Component } from 'react';
import '../../assets/css/main.css';
import '../../assets/css/noscript.css';


class Mission extends Component {
    render() {
        return (
            //     <button className="square" onClick={() => alert('click')}>
            //     {this.props.value}
            //   </button>
            <div id="wrapper" class="divided">
                <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                    <div class="content">
                        {/* <img src="../images/logo.png" alt="" styles={{paddingBottom: '8px'}} /> */}
                        <img src={ require('../../assets/images/logo.png') } styles={{paddingBottom: '8px'}} />
                        <h1 styles={{paddingBottom:'8px'}}>"Learning as an experience"</h1>
                        <ul class="actions stacked">
                            <li>
                                <a id="button1" class="button big wide smooth-scroll-middle">Learn more</a>
                            </li>
                        </ul>
                    </div>
                    <div class="image">
                        {/* <img src="../images/banner.jpg" alt="" /> */}
                        <img src={ require('../../assets/images/banner.jpg') } />
                    </div>
                </section>
            </div>
        );
    }
}

export default Mission;
