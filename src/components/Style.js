import React from 'react';

export default class Style extends React.Component {
    render() {
        const {styleName} = this.props;
        const styleLink = 'https://bootswatch.com/4/' + styleName + '/bootstrap.min.css';
        return (
            <link rel={'stylesheet'} href={styleLink}/>
        )
    }
}