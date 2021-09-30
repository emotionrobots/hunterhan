import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import Loading from './InfoWidgetTypes/Loading';
import Report from './InfoWidgetTypes/Report';
import Single from './InfoWidgetTypes/Single';
import { getInfoWidget } from '../data/user_data';

export const InfoWidgetTypes = {
    SINGLE: "infocard.single",
    REPORT: "infocard.report",
    CHART: "infocard.chart",
    LOADING: "infocard.waiting"
}

class InfoWidget extends Component {
    state = {
        cardType: InfoWidgetTypes.LOADING,
        attributes: {

        }
    }

    componentDidMount(){
        getInfoWidget(this.props.data, (ret) => {
            this.setState(ret)
        })
    }

    renderBody() {
        switch (this.state.cardType) {
            case InfoWidgetTypes.LOADING:
                return Loading();
            case InfoWidgetTypes.REPORT:
                return Report();
            case InfoWidgetTypes.SINGLE:
                return Single(this.state.attributes.data);
            default:
                break;
        }
    }

    render() {
        return (
            <Card bgColor={this.props.bgColor}>
                {this.renderBody()}
            </Card>
        );
    }
}

InfoWidget.propTypes = {
    data: PropTypes.string,
    bgColor: PropTypes.string
};

export default InfoWidget;