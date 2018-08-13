import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
// import '../../assets/css/main.css';
// import '../../assets/css/noscript.css';

class Partners extends Component {
    render() {
        const studentAgencies = './../../assets/images/studentagencies.png';
        return (
            <div>
                <section class="spotlight style1">
                    <div class="content">
                        <Grid container spacing={8}>
                            <Grid item xs={12} container spacing={24}>
                                <Grid item xs={6}>
                                    <h5>Student Agencies</h5>
                                    <p>https://www.studentagencies.com/</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <img class="pic" src={require('./../../assets/images/studentagencies.png') } />
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <h5>Student Agencies</h5>
                        <p>https://www.studentagencies.com/</p>
                        <div>
                        </div> */}
                    </div>
                </section>
            </div>
        );
    }
}

export default Partners;
