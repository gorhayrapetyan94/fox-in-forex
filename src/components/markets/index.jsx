import React from 'react';
import './index.css';
import './media.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FormattedMessage } from 'react-intl';

import MarketsTable from "./marketsTable/index";
import MetalsTable from "./marketsTable/metals";
import StocksTable from "./marketsTable/stocks";
import CommoditiesTable from "./marketsTable/commodities";
import EtfsTable from "./marketsTable/etfs";
import IndexTable from "./marketsTable/indexTable";
import CryptoTable from "./marketsTable/crypto";

class Markets extends React.Component {
    render() {
        return (
            <>
                <div className="markets_wrapper">
                    <div className="slider_item background_styles relative" style={{ backgroundImage: 'url(/images/markets.jpg)' }}>
                        <div className="slider_item_inner">
                            <div className="main_content">
                                <div className="slider_item_content">
                                    <div className="slider_item_title font_bold">
                                        <FormattedMessage id="marketsSliderTitle" defaultMessage="marketsSliderTitle" />
                                    </div>
                                    <div className="slider_item_text">
                                        <FormattedMessage id="marketsSliderText" defaultMessage="marketsSliderText" />
                                    </div>
                                    <div>
                                        <button className="start_trading transitioned">
                                            <FormattedMessage id="openAnAccount" defaultMessage="openAnAccount" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="open_for_you">
                        <div className="main_content">
                            <div className="open_for_you_title font_bold text_center">
                                <FormattedMessage id="openForYouTitle" defaultMessage="openForYouTitle" />
                            </div>
                            <div className="why_forex_items text_center">
                                <div className="why_forex_item inline_block why_forex_left">
                                    <div className="why_forex_inner">
                                        <div className="why_forex_icon display_table">
                                            <span className="inline_middle">
                                                <img className="forex" src="/images/forex.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="why_forex_mobile">
                                            <div className="why_forex_mobile_inner">
                                                <div className="why_forex_inner_title font_bold">
                                                    <FormattedMessage id="openForYouTitle1" defaultMessage="openForYouTitle1" />
                                                </div>
                                                <div className="why_forex_inner_text">
                                                    <FormattedMessage id="openForYouText1" defaultMessage="openForYouText1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="why_forex_item inline_block why_forex_left">
                                    <div className="why_forex_inner">
                                        <div className="why_forex_icon display_table">
                                            <span className="inline_middle">
                                                <img className="bitcoin" src="/images/bitcoin.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="why_forex_mobile">
                                            <div className="why_forex_mobile_inner">
                                                <div className="why_forex_inner_title font_bold">
                                                    <FormattedMessage id="openForYouTitle2" defaultMessage="openForYouTitle2" />
                                                </div>
                                                <div className="why_forex_inner_text">
                                                    <FormattedMessage id="openForYouText2" defaultMessage="openForYouText2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="why_forex_item inline_block why_forex_left">
                                    <div className="why_forex_inner">
                                        <div className="why_forex_icon display_table">
                                            <span className="inline_middle">
                                                <img className="percent" src="/images/percent.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="why_forex_mobile">
                                            <div className="why_forex_mobile_inner">
                                                <div className="why_forex_inner_title font_bold">
                                                    <FormattedMessage id="openForYouTitle3" defaultMessage="openForYouTitle3" />
                                                </div>
                                                <div className="why_forex_inner_text">
                                                    <FormattedMessage id="openForYouText3" defaultMessage="openForYouText3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="instruments_wrapper">
                        <div className="main_content">
                            <div className="instruments_title font_bold text_center">
                                <span className="inline_block">
                                    <FormattedMessage id="instrumentsTitle" defaultMessage="instrumentsTitle" />
                                </span>
                            </div>
                            <div className="instruments_top_text text_center">
                                <FormattedMessage id="instrumentsText1" defaultMessage="instrumentsText1" />
                            </div>
                            <div className="instruments_top_text text_center">
                                <FormattedMessage id="instrumentsText2" defaultMessage="instrumentsText2" />
                            </div>
                            <div className="instruments_top_text text_center">
                                <FormattedMessage id="instrumentsText3" defaultMessage="instrumentsText3" />
                            </div>
                        </div>
                        <div className="instruments_tables">
                            <div className="main_content">
                                <Tabs>
                                    <div className="scroll_x">
                                        <TabList>
                                            <Tab>Forex</Tab>
                                            <Tab>Metals</Tab>
                                            <Tab>Stocks</Tab>
                                            <Tab>Commodities</Tab>
                                            <Tab>ETF’s</Tab>
                                            <Tab>Index</Tab>
                                            <Tab>Crypto</Tab>
                                        </TabList>
                                    </div>
                                    <TabPanel>
                                        <MarketsTable />
                                    </TabPanel>
                                    <TabPanel>
                                        <MetalsTable />
                                    </TabPanel>
                                    <TabPanel>
                                        <StocksTable />
                                    </TabPanel>
                                    <TabPanel>
                                        <CommoditiesTable />
                                    </TabPanel>
                                    <TabPanel>
                                        <EtfsTable />
                                    </TabPanel>
                                    <TabPanel>
                                        <IndexTable />
                                    </TabPanel>
                                    <TabPanel>
                                        <CryptoTable />
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Markets;