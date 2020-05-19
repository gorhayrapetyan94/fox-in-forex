import React from 'react';
import { FormattedMessage } from 'react-intl';

function EtfsTable() {
    return (
        <>
            <table className="markets_table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th><FormattedMessage id="tool" defaultMessage="tool" /></th>
                        <th><FormattedMessage id="minPriceChange" defaultMessage="minPriceChange" /></th>
                        <th>Min volume</th>
                        <th>Max volume</th>
                        <th>Max leverage</th>
                        <th>Number of contracts for 1 lot</th>
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
            <div className="table_last text_left">
                *часы закрытия и открытия торгов указаны по UTC+0
            </div>
        </>
    )
}

export default EtfsTable;