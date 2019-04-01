import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ThemeChanger from './components/ThemeChanger';
import Style from './components/Style';
import ThemeDisplay from './components/ThemeDisplay';
import * as Constants from './constants';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as themeChanger from './redux/actions/themeChanger.actions';
import _ from 'lodash';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTheme: Constants.themes[0]
        };
        this._onChangeActiveTheme = this._onChangeActiveTheme.bind(this);
    }

    _onChangeActiveTheme(event) {
        const value = event.target.value;
        this.props.actions.setTheme(value);
    }

    render() {
        const activeTheme = _.isEmpty(this.props.activeTheme) ? this.state.activeTheme : this.props.activeTheme;
        return (
            <div className={'container-fluid'}>
                <h1 className={'page-header'}>My Simple Page</h1>
                <ThemeChanger activeTheme={activeTheme} onChangeActiveTheme={this._onChangeActiveTheme}/>
                <ThemeDisplay/>
                <Style styleName={activeTheme}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    activeTheme: state.themeChanger.activeTheme
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(themeChanger, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
