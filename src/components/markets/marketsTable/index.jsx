import React from 'react';
import { FormattedMessage } from 'react-intl';

function MarketsTable() {
    return (
        <>
            <table className="markets_table">
                <thead>
                    <tr>
                        <th><FormattedMessage id="tool" defaultMessage="tool" /></th>
                        <th><FormattedMessage id="minPriceChange" defaultMessage="minPriceChange" /></th>
                        <th><FormattedMessage id="standardLot" defaultMessage="standardLot" /></th>
                        <th><FormattedMessage id="minLotSize" defaultMessage="minLotSize" /></th>
                        <th><FormattedMessage id="maxLotSize" defaultMessage="maxLotSize" /></th>
                        <th><FormattedMessage id="stepOfChangingTheVolumeInLots" defaultMessage="stepOfChangingTheVolumeInLots" /></th>
                        <th><FormattedMessage id="maxShoulder" defaultMessage="maxShoulder" /></th>
                        <th><FormattedMessage id="opening" defaultMessage="opening" /></th>
                        <th><FormattedMessage id="closing" defaultMessage="closing" /></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>AUD/CAD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>AUD/CHF</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>AUD/JPY</td>
                        <td>0.001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>AUD/NZD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>AUD/USD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>CAD/CHF</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>CAD/JPY</td>
                        <td>0.001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>CHF/JPY</td>
                        <td>0.001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>EUR/AUD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>EUR/CAD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>EUR/CHF</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>EUR/GBP</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>EUR/JPY</td>
                        <td>0.001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>EUR/NOK</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>EUR/NZD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>EUR/PLN</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>500</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>EUR/SEK</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>EUR/TRY</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>500</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>EUR/USD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>GBP/AUD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>GBP/CAD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>GBP/CHF</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>GBP/JPY</td>
                        <td>0.001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>GBP/NZD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>GBP/SEK</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>GBP/USD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>NOK/SEK</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>NZD/CAD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>NZD/CHF</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>NZD/JPY</td>
                        <td>0.001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>NZD/USD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>USD/CAD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>USD/CHF</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>USD/CNH</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>500</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>USD/JPY</td>
                        <td>0.001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>USD/MXN</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>500</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>USD/NOK</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>USD/PLN</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>500</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>USD/RUB</td>
                        <td>0.0001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>500</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>USD/SEK</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>1000</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>USD/SGD</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>500</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>USD/TRY</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>500</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                    <tr>
                        <td>USD/ZAR</td>
                        <td>0.00001</td>
                        <td>100000</td>
                        <td>0.01</td>
                        <td>500</td>
                        <td>0.01</td>
                        <td>1 : 500</td>
                        <td>21:15</td>
                        <td>20:45</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default MarketsTable;