import React from 'react';
import { FormattedMessage } from 'react-intl';

function CryptoTable() {
    return (
        <>
            <table className="markets_table">
                <thead>
                    <tr>
                        <th><FormattedMessage id="tool" defaultMessage="tool" /></th>
                        <th><FormattedMessage id="minPriceChange" defaultMessage="minPriceChange" /></th>
                        <th><FormattedMessage id="standardLot" defaultMessage="standardLot" /></th>
                        <th>Min volume</th>
                        <th>Max volume</th>
                        <th>Max leverage</th>
                        <th><FormattedMessage id="opening" defaultMessage="opening" /></th>
                        <th><FormattedMessage id="closing" defaultMessage="closing" /></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>BCH/USD</td>
                        <td>0.0001</td>
                        <td>1</td>
                        <td>1</td>
                        <td>100</td>
                        <td>1:2</td>
                        <td>0:05</td>
                        <td>23:45</td>
                    </tr>
                    <tr>
                        <td>BTC/USD</td>
                        <td>0.01</td>
                        <td>1</td>
                        <td>1</td>
                        <td>100</td>
                        <td>1:2</td>
                        <td>0:05</td>
                        <td>23:45</td>
                    </tr>
                    <tr>
                        <td>ETH/USD</td>
                        <td>0.00001</td>
                        <td>1</td>
                        <td>1</td>
                        <td>100</td>
                        <td>1:1</td>
                        <td>0:05</td>
                        <td>23:45</td>
                    </tr>
                    <tr>
                        <td>LTC/USD</td>
                        <td>0.01</td>
                        <td>1</td>
                        <td>1</td>
                        <td>100</td>
                        <td>1:1</td>
                        <td>0:05</td>
                        <td>23:45</td>
                    </tr>
                    <tr>
                        <td>XMR/USD</td>
                        <td>0.00001</td>
                        <td>1</td>
                        <td>1</td>
                        <td>100</td>
                        <td>1:1</td>
                        <td>0:05</td>
                        <td>23:45</td>
                    </tr>
                    <tr>
                        <td>XRP/USD</td>
                        <td>0.00001</td>
                        <td>1</td>
                        <td>1</td>
                        <td>100</td>
                        <td>1:1</td>
                        <td>0:05</td>
                        <td>23:45</td>
                    </tr>
                    <tr>
                        <td>ZEC/USD</td>
                        <td>0.00001</td>
                        <td>1</td>
                        <td>1</td>
                        <td>100</td>
                        <td>1:1</td>
                        <td>0:05</td>
                        <td>23:45</td>
                    </tr>
                </tbody>
            </table>
            <div className="table_last text_left">
                *часы закрытия и открытия торгов указаны по UTC+0
            </div>
        </>
    )
}

export default CryptoTable;