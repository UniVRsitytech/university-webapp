import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import BioCard from './BioCard'
import "../../assets/css/team.css"

class TeamLayout extends React.Component {

    render() {
        return (
            <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
                {/* <div class="content">
                    <h2>Social Connection</h2>
                    <p>UniVRsity values the power of social connectivy and focuses on aplications connecting students to peers, tutors, and
                    teachers to aid them in their educational endeavors.</p>
                </div> */}
                <Grid container spacing={18}>
                    <Grid item xs={3}>
                        <BioCard />
                    </Grid>
                    <Grid item xs={3}>
                        <BioCard />
                    </Grid>
                    <Grid item xs={3}>
                        <BioCard />
                    </Grid>
                    <Grid item xs={3}>
                        <BioCard />
                    </Grid>
                </Grid>
            </section>
        );
    }
}

export default TeamLayout;