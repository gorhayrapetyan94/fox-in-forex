import React from 'react';
import { FormattedMessage } from 'react-intl';

function EtfsTable() {
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
                        <th><FormattedMessage id="maxLeverage" defaultMessage="maxLeverage" /></th>
                        <th><FormattedMessage id="numberOfContractsForOneLot" defaultMessage="numberOfContractsForOneLot" /></th>
                        <th><FormattedMessage id="opening" defaultMessage="opening" /></th>
                        <th><FormattedMessage id="closing" defaultMessage="closing" /></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>iPatd S&P 500</td>
                        <td>VXX</td>
                        <td>0.01</td>
                        <td>1</td>
                        <td>100000</td>
                        <td>1 : 50</td>
                        <td>1</td>
                        <td>8:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>Samsung</td>
                        <td>SMSN</td>
                        <td>0.5</td>
                        <td>1</td>
                        <td>100000</td>
                        <td>1 : 50</td>
                        <td>1</td>
                        <td>7:15</td>
                        <td>14:15</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default EtfsTable;