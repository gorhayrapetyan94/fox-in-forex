import React from 'react';
import { FormattedMessage } from 'react-intl';

function CommoditiesTable() {
    return (
        <>
            <table className="markets_table">
                <thead>
                    <tr>
                        <th><FormattedMessage id='title' defaultMessage='title' /></th>
                        <th><FormattedMessage id="tool" defaultMessage="tool" /></th>
                        <th><FormattedMessage id="minPriceChange" defaultMessage="minPriceChange" /></th>
                        <th><FormattedMessage id="minVolume" defaultMessage="minVolume" /></th>
                        <th><FormattedMessage id="maxVolume" defaultMessage="maxVolume" /></th>
                        <th><FormattedMessage id="volumePitch" defaultMessage="volumePitch" /></th>
                        <th><FormattedMessage id="maxLeverage" defaultMessage="maxLeverage" /></th>
                        <th><FormattedMessage id="numberOfContractsForOneLot" defaultMessage="numberOfContractsForOneLot" /></th>
                        <th><FormattedMessage id="opening" defaultMessage="opening" /></th>
                        <th><FormattedMessage id="closing" defaultMessage="closing" /></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Brent Crude Oil</td>
                        <td>BRENT</td>
                        <td>0.01</td>
                        <td>1</td>
                        <td>100000</td>
                        <td>1</td>
                        <td>1 : 100</td>
                        <td>1</td>
                        <td>0:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>Natural Gas</td>
                        <td>NG</td>
                        <td>0.001</td>
                        <td>1</td>
                        <td>100000</td>
                        <td>1</td>
                        <td>1 : 100</td>
                        <td>1</td>
                        <td>0:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>WTI Crude Oil</td>
                        <td>WTI</td>
                        <td>0.01</td>
                        <td>1</td>
                        <td>100000</td>
                        <td>1</td>
                        <td>1 : 100</td>
                        <td>1</td>
                        <td>0:15</td>
                        <td>20:45</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CommoditiesTable;