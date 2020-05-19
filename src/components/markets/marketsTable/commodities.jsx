import React from 'react';
import { FormattedMessage } from 'react-intl';

function CommoditiesTable() {
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
                        <th>Volume pitch</th>
                        <th>Max leverage</th>
                        <th>Number of contracts for 1 lot</th>
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
            <div className="table_last text_left">
                *часы закрытия и открытия торгов указаны по UTC+0
            </div>
        </>
    )
}

export default CommoditiesTable;