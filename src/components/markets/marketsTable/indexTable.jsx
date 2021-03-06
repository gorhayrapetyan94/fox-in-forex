import React from 'react';
import { FormattedMessage } from 'react-intl';

function IndexTable() {
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
                        <td>CAC40</td>
                        <td>CAC40</td>
                        <td>0.01</td>
                        <td>1</td>
                        <td>100000</td>
                        <td>1 : 100</td>
                        <td>1</td>
                        <td>6:15</td>
                        <td>19:45</td>
                    </tr>
                    <tr>
                        <td>DAX30</td>
                        <td>DAX30</td>
                        <td>0.01</td>
                        <td>1</td>
                        <td>100000</td>
                        <td>1 : 100</td>
                        <td>1</td>
                        <td>6:15</td>
                        <td>19:45</td>
                    </tr>
                    <tr>
                        <td>Dow Jones</td>
                        <td>DJI30</td>
                        <td>0.1</td>
                        <td>1</td>
                        <td>100000</td>
                        <td>1 : 100</td>
                        <td>1</td>
                        <td>22:45</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>FTSE100</td>
                        <td>FTSE100</td>
                        <td>0.01</td>
                        <td>1</td>
                        <td>100000</td>
                        <td>1 : 100</td>
                        <td>1</td>
                        <td>6:15</td>
                        <td>19:45</td>
                    </tr>
                    <tr>
                        <td>MICEX</td>
                        <td>MCX</td>
                        <td>0.001</td>
                        <td>1</td>
                        <td>100000</td>
                        <td>1 : 100</td>
                        <td>1</td>
                        <td>7:15</td>
                        <td>14:15</td>
                    </tr>
                    <tr>
                        <td>Nasdaq 100</td>
                        <td>NDX100</td>
                        <td>0.1</td>
                        <td>1</td>
                        <td>100000</td>
                        <td>1 : 100</td>
                        <td>1</td>
                        <td>22:45</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>Nikkei 225</td>
                        <td>NKY225</td>
                        <td>0.01</td>
                        <td>1</td>
                        <td>100000</td>
                        <td>1 : 100</td>
                        <td>1</td>
                        <td>22:15</td>
                        <td>18:45</td>
                    </tr>
                    <tr>
                        <td>RTS</td>
                        <td>RTS</td>
                        <td>0.0001</td>
                        <td>1</td>
                        <td>100000</td>
                        <td>1 : 100</td>
                        <td>1</td>
                        <td>7:15</td>
                        <td>14:15</td>
                    </tr>
                    <tr>
                        <td>S&P 500</td>
                        <td>SPX500</td>
                        <td>0.1</td>
                        <td>1</td>
                        <td>100000</td>
                        <td>1 : 100</td>
                        <td>1</td>
                        <td>22:45</td>
                        <td>20:45</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default IndexTable;