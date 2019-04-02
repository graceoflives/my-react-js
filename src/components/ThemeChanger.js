import React from 'react';
import * as Constants from '../Constants';
import _ from 'lodash';

export default class ThemeChanger extends React.Component {
    render() {
        const {themes} = Constants;
        const {activeTheme, onChangeActiveTheme} = this.props;
        return (
            <div className={'form-group row'}>
                <label className={'col-sm-2 col-form-label'} htmlFor={'theme'}>Select theme:</label>
                <div className={'col-sm-10'}>
                    <select className={'form-control'} id={'theme'} onChange={onChangeActiveTheme} value={activeTheme}>
                        {themes.map((theme, index) => (
                            <option key={index} value={theme}>{_.upperFirst(theme)}</option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }
}