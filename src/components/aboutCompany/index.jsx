import React from 'react';
import NumberAnimation from './animatedNumbers/index';
import { FormattedMessage } from 'react-intl';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './index.css';
import './media.css';

class AboutCompany extends React.Component {
    render() {
        return (
            <>
                <div className="about_wrapper">
                    <div className="slider_item background_styles relative" style={{ backgroundImage: 'url(/images/about.jpg)' }}>
                        <div className="slider_item_inner">
                            <div className="main_content">
                                <div className="slider_item_content">
                                    <div className="slider_item_title font_bold">
                                        <FormattedMessage id="companySliderTitle" defaultMessage="companySliderTitle" />
                                    </div>
                                    <div className="slider_item_text">
                                        <FormattedMessage id="companySliderteText" defaultMessage="companySliderteText" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="statistics">
                            <div className="main_content">
                                <div className="statistics_items text_center">
                                    <div className="statistics_item">
                                        <div className="statistic_number">
                                            <NumberAnimation
                                                count={370000}
                                                symbolVisibility
                                                symbol="+"
                                            />
                                        </div>
                                        <div className="statistics_text">
                                            <FormattedMessage id="companyNumber1" defaultMessage="companyNumber1" />
                                        </div>
                                    </div>
                                    <div className="statistics_item">
                                        <div className="statistic_number">
                                            <NumberAnimation
                                                count={2}
                                                symbolVisibility
                                                symbol={<FormattedMessage id="million" defaultMessage="million" />}
                                            />
                                        </div>
                                        <div className="statistics_text">
                                            <FormattedMessage id="companyNumber2" defaultMessage="companyNumber2" />
                                        </div>
                                    </div>
                                    <div className="statistics_item">
                                        <div className="statistic_number">
                                            <NumberAnimation
                                                count={120}
                                                symbolVisibility
                                                symbol="+"
                                            />
                                        </div>
                                        <div className="statistics_text">
                                            <FormattedMessage id="companyNumber3" defaultMessage="companyNumber3" />
                                        </div>
                                    </div>
                                    <div className="statistics_item">
                                        <div className="statistic_number">
                                            <NumberAnimation
                                                count={120}
                                                symbolVisibility
                                                symbol={<FormattedMessage id="million" defaultMessage="million" />}
                                            />
                                        </div>
                                        <div className="statistics_text">
                                            <FormattedMessage id="companyNumber4" defaultMessage="companyNumber4" />
                                        </div>
                                    </div>
                                    <div className="statistics_item">
                                        <div className="statistic_number">
                                            <NumberAnimation
                                                count={3}
                                                symbolVisibility
                                                symbol={<FormattedMessage id="years" defaultMessage="years" />}
                                            />
                                        </div>
                                        <div className="statistics_text">
                                            <FormattedMessage id="companyNumber5" defaultMessage="companyNumber5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about_top_wrapper">
                        <div className="main_content">
                            <div className="about_top_icon text_center">
                                <img className="heart" src="/images/heart.svg" alt="" />
                            </div>
                            <div className="about_top_title font_bold text_center">
                                <FormattedMessage id="aboutTopTitle" defaultMessage="aboutTopTitle" />
                            </div>
                            <div className="about_top_text text_center">
                                <FormattedMessage id="aboutTopText" defaultMessage="aboutTopText" />
                            </div>
                            <div className="about_start_trading_wrapper text_center">
                                <button className="about_start_trading transitioned">
                                    <FormattedMessage id="startTrading" defaultMessage="startTrading" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="goals_wrapper">
                        <div className="main_content">
                            <div className="goals_title text_center font_bold">
                                <FormattedMessage id="goalsTitle" defaultMessage="goalsTitle" />
                            </div>
                            <div className="goals_items">
                                <div className="goals_item text_center">
                                    <div className="goals_item_icon">
                                        <img className="goals_left" src="/images/goals_left.svg" alt="" />
                                    </div>
                                    <div className="goals_mobile">
                                        <div className="goals_mobile_inner">
                                            <div className="goals_item_title font_bold">
                                                <FormattedMessage id="goalsTitle1" defaultMessage="goalsTitle1" />
                                            </div>
                                            <div className="goals_item_text">
                                                <FormattedMessage id="goalsText1" defaultMessage="goalsText1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="goals_item text_center">
                                    <div className="goals_item_icon">
                                        <img className="goals_right" src="/images/goals_right.svg" alt="" />
                                    </div>
                                    <div className="goals_mobile">
                                        <div className="goals_mobile_inner">
                                            <div className="goals_item_title font_bold">
                                                <FormattedMessage id="goalsTitle2" defaultMessage="goalsTitle2" />
                                            </div>
                                            <div className="goals_item_text">
                                                <FormattedMessage id="goalsText1" defaultMessage="goalsText1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="possibilities_wrapper">
                        <div className="main_content">
                            <div className="posibilities_item_title_mobile">
                                <div className="posibilities_item_title font_bold">
                                    <FormattedMessage id="posibilitiesTitle" defaultMessage="posibilitiesTitle" />
                                </div>
                            </div>
                            <div className="possibilities_inner">
                                <div className="posibilities_item posibilities_item_left">
                                    <div className="posibilities_left">
                                        <div className="comp_block background_styles">
                                            <div className="comp_block_inner background_styles comp_block_inner_company_first"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="posibilities_item posibilities_item_right">
                                    <div className="posibilities_item_title font_bold">
                                        <FormattedMessage id="posibilitiesTitle" defaultMessage="posibilitiesTitle" />
                                    </div>
                                    <div className="posibilities_item_text">
                                        <FormattedMessage id="posibilitiesText" defaultMessage="posibilitiesText" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="history_wrapper">
                        <div className="main_content">
                            <div className="history_title font_bold text_center">
                                <FormattedMessage id="historyTitle" defaultMessage="historyTitle" />
                            </div>
                            {/* <div className="history_text text_center">
                                Мы делаем все для того, чтобы работа трейдера ежедневно приносила
                                максимальный комфорт и прибыль. Специально разработанный и технологически оснащенный
                                терминал помогает клиентам анализировать и прогнозировать рынки, совершать сделки с
                                минимальными спредами, а также безопасно выводить заработанные средства.
                            </div> */}
                            <div className="history_tabs">
                                <Tabs>
                                    <TabList>
                                        <Tab>2017</Tab>
                                        <Tab>2018</Tab>
                                        <Tab>2019</Tab>
                                        <Tab>2020</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div className="about_tab_item">
                                            <div className="about_tabs_title font_bold">
                                                <FormattedMessage id="historyTitle1" defaultMessage="historyTitle1" />
                                            </div>
                                            <div className="about_tabs_text">
                                                <FormattedMessage id="historyText1" defaultMessage="historyText1" />
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="about_tab_item">
                                            <div className="about_tabs_title font_bold">
                                                <FormattedMessage id="historyTitle2" defaultMessage="historyTitle2" />
                                            </div>
                                            <div className="about_tabs_text">
                                                <FormattedMessage id="historyText2" defaultMessage="historyText2" />
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="about_tab_item">
                                            <div className="about_tabs_title font_bold">
                                                <FormattedMessage id="historyTitle3" defaultMessage="historyTitle3" />
                                            </div>
                                            <div className="about_tabs_text">
                                                <FormattedMessage id="historyText3" defaultMessage="historyText3" />
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="about_tab_item">
                                            <div className="about_tabs_title font_bold">
                                                <FormattedMessage id="historyTitle4" defaultMessage="historyTitle4" />
                                            </div>
                                            <div className="about_tabs_text">
                                                <FormattedMessage id="historyText4" defaultMessage="historyText4" />
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <div className="platform_wrapper">
                        <div className="main_content">
                            <div className="platform_title font_bold text_center">
                                <FormattedMessage id="platformTitle" defaultMessage="platformTitle" />
                            </div>
                            <div className="platform_top_text text_center">
                                <FormattedMessage id="platformText" defaultMessage="platformText" />
                            </div>
                            <div className="platform_bottom">
                                <div className="platform_bottom_item_right_mobile">
                                    <div className="platform_bottom_item platform_bottom_item_right">
                                        <div className="comp_block background_styles">
                                            <div className="comp_block_inner background_styles comp_block_inner_company_second"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="platform_bottom_item platform_bottom_item_left">
                                    <div className="platform_bottom_title font_bold">
                                        <FormattedMessage id="platformBottomTitle" defaultMessage="platformBottomTitle" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platformItem1" defaultMessage="platformItem1" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platformItem2" defaultMessage="platformItem2" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platformItem3" defaultMessage="platformItem3" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platformItem4" defaultMessage="platformItem4" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platformItem5" defaultMessage="platformItem5" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platformItem6" defaultMessage="platformItem6" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platformItem7" defaultMessage="platformItem7" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platformItem8" defaultMessage="platformItem8" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platformItem9" defaultMessage="platformItem9" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platformItem10" defaultMessage="platformItem10" />
                                    </div>
                                    <div className="open_demo_wrapper">
                                        <button className="open_demo transitioned">
                                            <FormattedMessage id="openDemoAccount" defaultMessage="openDemoAccount" />
                                        </button>
                                    </div>
                                </div>
                                <div className="platform_bottom_item platform_bottom_item_right">
                                    <div className="comp_block background_styles">
                                        <div className="comp_block_inner background_styles comp_block_inner_company_second"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AboutCompany;