import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';

class NumberAnimation extends Component {
    render() {
        return (
            <div className="numbers_item font_bold">
                <AnimatedNumber
                    stepPrecision={0}
                    value={this.props.count}
                    duration={1000}
                />
                {
                    this.props.symbolVisibility ?
                        <span className="symbol">
                            {this.props.symbol}
                        </span>
                        : null
                }
            </div>
        );
    }
}

export default NumberAnimation;