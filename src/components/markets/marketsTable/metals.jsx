import React from 'react';
import { FormattedMessage } from 'react-intl';

function MetalsTable() {
    return (
        <>
            <table className="markets_table">
                <thead>
                    <tr>
                        <th>Title</th>
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
                        <td>Gold</td>
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
                </tbody>
            </table>
            <div className="table_last text_left">
                *часы закрытия и открытия торгов указаны по UTC+0
            </div>
        </>
    )
}

export default MetalsTable;