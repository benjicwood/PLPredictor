import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import TeamList from '../components/TeamList';
import Fixtures from '../components/Fixtures';

class PLPredictor extends Component {
    componentWillMount() {
        this.props.getTeamData();
    }

    render () {
        const { teamData } = this.props;

        return (
            <div>
                {/*<AppHeader />*/}
                <TeamList data={ teamData } />
                <Fixtures />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTeamData: () => dispatch( actions.setTeam() ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( PLPredictor );