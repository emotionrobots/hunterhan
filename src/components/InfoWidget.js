import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

class InfoWidget extends Component {
    render() {
        return (
            <Card height='full' width='full' bgColor={this.props.bgColor} contents={
                <div className="flex content-center">
                    <div className="text-white">{this.props.data}</div>
                </div>
            }></Card>
        );
    }
}

InfoWidget.propTypes = {
    data: PropTypes.string,
    dataType: PropTypes.string,
    bgColor: PropTypes.string
};

export default InfoWidget;