import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        return (
            <div class={"rounded-2xl p-6 h-" + this.props.height + " w-" + this.props.width + " bg-" + this.props.bgColor}>
                {this.props.contents}
            </div>
        );
    }
}

/*
Documentation Here
*/
Card.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    bgColor: PropTypes.string,
    contents: PropTypes.object
};

export default Card;