import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import BioCard from './BioCard';
import BioCardAuto from './BioCardAuto';
import "../../assets/css/team.css";
import { teaminfo } from "../../info/teamdata"
import { CardContent, Card } from '../../../node_modules/@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RadioSelector from "./RawSelector";


function TeamList(props) {
    const people = props.people;
    const listItems = people.map((personinfo) =>
        // {
        // if(props.team === personinfo.team || props.team==="all")
        // return(
        <Grid item xs={3} key={personinfo.id}>
            <BioCardAuto personinfo={personinfo} />
        </Grid>
        // );
        // }
    );
    return (
        <Grid container spacing={24}>{listItems}</Grid>
    );
}

class TeamLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            team: null,

        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    componentDidUpdate() {
        if (this.team != + this.prevState.team) {

        }
    }


    render() {
        return (
            <div class="spacer">
            <section>
                <div>
                <RadioSelector />
                </div>
            </section>
                <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
                    <div class="spacer">
                        <FormControl>
                            <InputLabel htmlFor="Pick">Team</InputLabel>
                            <Select
                                value={this.state.team}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'team',
                                    id: 'team-simple',
                                }}
                            >
                                <MenuItem value="All">
                                    <em>All</em>
                                </MenuItem>
                                <MenuItem value={"dev"}>Developers</MenuItem>
                                <MenuItem value={"bus"}>Business</MenuItem>
                                <MenuItem value={"ece"}>Electrical</MenuItem>
                            </Select>
                            <FormHelperText>Pick a Team!</FormHelperText>
                        </FormControl>
                    </div>
                    <TeamList people={teaminfo} team={this.state.team} />
                </section>
            </div>
        );
    }
}

export default TeamLayout;