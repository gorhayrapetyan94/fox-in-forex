import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import './media.css';

import { FormattedMessage } from 'react-intl';

function HomePage(props) {
    var rssData = [];

    const [firstHover, setFirstHover] = useState(true);
    const [secondHover, setSecondHover] = useState(false);
    const [thirdHover, setThirdHover] = useState(false);
    const [fourthHover, setFourthHover] = useState(false);

    const handleFirstHover = () => {
        setFirstHover(true);
        setSecondHover(false);
        setThirdHover(false);
        setFourthHover(false);
    }
    const handleSecondHover = () => {
        setFirstHover(false);
        setSecondHover(true);
        setThirdHover(false);
        setFourthHover(false);
    }
    const handleThirdHover = () => {
        setFirstHover(false);
        setSecondHover(false);
        setThirdHover(true);
        setFourthHover(false);
    }
    const handleFourthHover = () => {
        setFirstHover(false);
        setSecondHover(false);
        setThirdHover(false);
        setFourthHover(true);
    }

    const getRssNewsData = () => {
        const rssUrl = 'https://api.foxinforex.lionix-team.com/rssrequest.php?lang=' + props.lang;

        fetch(rssUrl, { mode: 'no-cors' })
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                rssData = data;
            });
    }
    getRssNewsData();

    useEffect(() => {
        getRssNewsData();
    });

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    const newsSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "0",
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "0",
                    slidesToShow: 1.8,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "0",
                    slidesToShow: 1.3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "0",
                    slidesToShow: 1.2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "0",
                    slidesToShow: 1,
                }
            }
        ]
    };

    const infoSliderSettings = {
        infinite: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 940,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "30%",
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "22%",
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "15%",
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "10%",
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 390,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "5%  ",
                    slidesToShow: 1,
                }
            }
        ]
    }   

    return (
        <>
            <div>
                <Slider {...settings}>
                    <div className="slider_item background_styles relative slider_item_first">
                        <div className="slider_item_inner">
                            <div className="main_content">
                                <div className="slider_item_content">
                                    <div className="slider_item_title font_bold">
                                        <FormattedMessage id="sliderTitle1" defaultMessage="sliderTitle1" />
                                    </div>
                                    <div className="slider_item_text">
                                        <FormattedMessage id="sliderText1" defaultMessage="sliderText1" />
                                    </div>
                                    <div>
                                        <button className="start_trading transitioned">
                                            <FormattedMessage id="startTrading" defaultMessage="startTrading" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider_item background_styles relative slider_item_second">
                        <div className="slider_item_inner">
                            <div className="main_content">
                                <div className="slider_item_content">
                                    <div className="slider_item_title font_bold">
                                        <FormattedMessage id="sliderTitle2" defaultMessage="sliderTitle2" />
                                    </div>
                                    <div className="slider_item_text">
                                        <FormattedMessage id="sliderText2" defaultMessage="sliderText2" />
                                    </div>
                                    <div>
                                        <button className="start_trading transitioned">
                                            <FormattedMessage id="startTrading" defaultMessage="startTrading" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider_item background_styles relative slider_item_third">
                        <div className="slider_item_inner">
                            <div className="main_content">
                                <div className="slider_item_content">
                                    <div className="slider_item_title font_bold">
                                        <FormattedMessage id="sliderTitle3" defaultMessage="sliderTitle3" />
                                    </div>
                                    <div className="slider_item_text">
                                        <FormattedMessage id="sliderText3" defaultMessage="sliderText3" />
                                    </div>
                                    <div>
                                        <button className="start_trading transitioned">
                                            <FormattedMessage id="startTrading" defaultMessage="startTrading" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider_item background_styles relative slider_item_fourth">
                        <div className="slider_item_inner">
                            <div className="main_content">
                                <div className="slider_item_content">
                                    <div className="slider_item_title font_bold">
                                        <FormattedMessage id="sliderTitle4" defaultMessage="sliderTitle4" />
                                    </div>
                                    <div className="slider_item_text">
                                        <FormattedMessage id="sliderText4" defaultMessage="sliderText4" />
                                    </div>
                                    <div>
                                        <button className="start_trading transitioned">
                                            <FormattedMessage id="startTrading" defaultMessage="startTrading" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="why_forex">
                <div className="main_content">
                    <div className="why_forex_title text_center font_bold">
                        <FormattedMessage id="whyIsAFoxInForex" defaultMessage="whyIsAFoxInForex" />
                    </div>
                    <div className="why_forex_items text_center">
                        <div className="why_forex_item inline_block why_forex_left">
                            <div className="why_forex_inner">
                                <div className="why_forex_icon display_table">
                                    <span className="inline_middle">
                                        <img className="syun" src="/images/syun.svg" alt="" />
                                    </span>
                                </div>
                                <div className="why_forex_mobile">
                                    <div className="why_forex_mobile_inner">
                                        <div className="why_forex_inner_title font_bold">
                                            <FormattedMessage id="whyForexTitle1" defaultMessage="whyForexTitle1" />
                                        </div>
                                        <div className="why_forex_inner_text">
                                            <FormattedMessage id="whyForexText1" defaultMessage="whyForexText1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="why_forex_item inline_block why_forex_left">
                            <div className="why_forex_inner">
                                <div className="why_forex_icon display_table">
                                    <span className="inline_middle">
                                        <img className="heraditak" src="/images/heraditak.svg" alt="" />
                                    </span>
                                </div>
                                <div className="why_forex_mobile">
                                    <div className="why_forex_mobile_inner">
                                        <div className="why_forex_inner_title font_bold">
                                            <FormattedMessage id="whyForexTitle2" defaultMessage="whyForexTitle2" />
                                        </div>
                                        <div className="why_forex_inner_text">
                                            <FormattedMessage id="whyForexText2" defaultMessage="whyForexText2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="why_forex_item inline_block why_forex_left">
                            <div className="why_forex_inner">
                                <div className="why_forex_icon display_table">
                                    <span className="inline_middle">
                                        <img className="gavat" src="/images/gavat.svg" alt="" />
                                    </span>
                                </div>
                                <div className="why_forex_mobile">
                                    <div className="why_forex_mobile_inner">
                                        <div className="why_forex_inner_title font_bold">
                                            <FormattedMessage id="whyForexTitle3" defaultMessage="whyForexTitle3" />
                                        </div>
                                        <div className="why_forex_inner_text">
                                            <FormattedMessage id="whyForexText3" defaultMessage="whyForexText3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="why_forex_items text_center">
                        <div className="why_forex_item inline_block why_forex_left">
                            <div className="why_forex_inner">
                                <div className="why_forex_icon display_table">
                                    <span className="inline_middle">
                                        <img className="xoz" src="/images/xoz.svg" alt="" />
                                    </span>
                                </div>
                                <div className="why_forex_mobile">
                                    <div className="why_forex_mobile_inner">
                                        <div className="why_forex_inner_title font_bold">
                                            <FormattedMessage id="whyForexTitle4" defaultMessage="whyForexTitle4" />
                                        </div>
                                        <div className="why_forex_inner_text">
                                            <FormattedMessage id="whyForexText4" defaultMessage="whyForexText4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="why_forex_item inline_block why_forex_left">
                            <div className="why_forex_inner">
                                <div className="why_forex_icon display_table">
                                    <span className="inline_middle">
                                        <img className="settings" src="/images/settings.svg" alt="" />
                                    </span>
                                </div>
                                <div className="why_forex_mobile">
                                    <div className="why_forex_mobile_inner">
                                        <div className="why_forex_inner_title font_bold">
                                            <FormattedMessage id="whyForexTitle5" defaultMessage="whyForexTitle5" />
                                        </div>
                                        <div className="why_forex_inner_text">
                                            <FormattedMessage id="whyForexText5" defaultMessage="whyForexText5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="why_forex_item inline_block why_forex_left">
                            <div className="why_forex_inner">
                                <div className="why_forex_icon display_table">
                                    <span className="inline_middle">
                                        <img className="raket" src="/images/raket.svg" alt="" />
                                    </span>
                                </div>
                                <div className="why_forex_mobile">
                                    <div className="why_forex_mobile_inner">
                                        <div className="why_forex_inner_title font_bold">
                                            <FormattedMessage id="whyForexTitle6" defaultMessage="whyForexTitle6" />
                                        </div>
                                        <div className="why_forex_inner_text">
                                            <FormattedMessage id="whyForexText6" defaultMessage="whyForexText6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="awards_wrapper">
                    <div className="main_content">
                        <div className="awards_title text_center font_bold">
                            Награды компании
                        </div>
                        <div className="awards_items text_center">
                            <div className="awards_item">
                                <div className="award_item_inner font_bold">
                                    <span>
                                        2017
                                    </span>
                                </div>
                                <div className="awards_desc">
                                    <div className="awards_desc_text">
                                        <FormattedMessage id="awardsTop1" defaultMessage="awardsTop1" />
                                    </div>
                                    <div className="awards_desc_text">
                                        <FormattedMessage id="awardsBottom1" defaultMessage="awardsBottom1" />
                                    </div>
                                </div>
                            </div>
                            <div className="awards_item">
                                <div className="award_item_inner font_bold">
                                    <span>
                                        2017
                                    </span>
                                </div>
                                <div className="awards_desc">
                                    <div className="awards_desc_text">
                                        <FormattedMessage id="awardsTop2" defaultMessage="awardsTop2" />
                                    </div>
                                    <div className="awards_desc_text">
                                        <FormattedMessage id="awardsBottom2" defaultMessage="awardsBottom2" />
                                    </div>
                                </div>
                            </div>
                            <div className="awards_item">
                                <div className="award_item_inner font_bold">
                                    <span>
                                        2017
                                    </span>
                                </div>
                                <div className="awards_desc">
                                    <div className="awards_desc_text">
                                        <FormattedMessage id="awardsTop3" defaultMessage="awardsTop3" />
                                    </div>
                                    <div className="awards_desc_text">
                                        <FormattedMessage id="awardsBottom3" defaultMessage="awardsBottom3" />
                                    </div>
                                </div>
                            </div>
                            <div className="awards_item">
                                <div className="award_item_inner font_bold">
                                    <span>
                                        2018
                                    </span>
                                </div>
                                <div className="awards_desc">
                                    <div className="awards_desc_text">
                                        <FormattedMessage id="awardsTop4" defaultMessage="awardsTop4" />
                                    </div>
                                    <div className="awards_desc_text">
                                        <FormattedMessage id="awardsBottom4" defaultMessage="awardsBottom4" />
                                    </div>
                                </div>
                            </div>
                            <div className="awards_item">
                                <div className="award_item_inner font_bold">
                                    <span>
                                        2018
                                    </span>
                                </div>
                                <div className="awards_desc">
                                    <div className="awards_desc_text">
                                        <FormattedMessage id="awardsTop5" defaultMessage="awardsTop5" />
                                    </div>
                                    <div className="awards_desc_text">
                                        <FormattedMessage id="awardsBottom5" defaultMessage="awardsBottom5" />
                                    </div>
                                </div>
                            </div>
                            <div className="awards_item">
                                <div className="award_item_inner font_bold">
                                    <span>
                                        2019
                                    </span>
                                </div>
                                <div className="awards_desc">
                                    <div className="awards_desc_text">
                                        <FormattedMessage id="awardsTop6" defaultMessage="awardsTop6" />
                                    </div>
                                    <div className="awards_desc_text">
                                        <FormattedMessage id="awardsBottom6" defaultMessage="awardsBottom6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="awards_items_mobile text_center">
                            <div className="awards_item_mobile">
                                <div className="awards_item">
                                    <div className="award_item_inner font_bold">
                                        <span>
                                            2017
                                    </span>
                                    </div>
                                    <div className="awards_desc">
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsTop1" defaultMessage="awardsTop1" />
                                        </div>
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsBottom1" defaultMessage="awardsBottom1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="awards_item">
                                    <div className="award_item_inner font_bold">
                                        <span>
                                            2017
                                    </span>
                                    </div>
                                    <div className="awards_desc">
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsTop2" defaultMessage="awardsTop2" />
                                        </div>
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsBottom2" defaultMessage="awardsBottom2" />
                                        </div>
                                    </div>
                                </div>
                                <div className="awards_item">
                                    <div className="award_item_inner font_bold">
                                        <span>
                                            2017
                                    </span>
                                    </div>
                                    <div className="awards_desc">
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsTop3" defaultMessage="awardsTop3" />
                                        </div>
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsBottom3" defaultMessage="awardsBottom3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="awards_item_mobile">
                                <div className="awards_item">
                                    <div className="award_item_inner font_bold">
                                        <span>
                                            2018
                                    </span>
                                    </div>
                                    <div className="awards_desc">
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsTop4" defaultMessage="awardsTop4" />
                                        </div>
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsBottom4" defaultMessage="awardsBottom4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="awards_item">
                                    <div className="award_item_inner font_bold">
                                        <span>
                                            2018
                                    </span>
                                    </div>
                                    <div className="awards_desc">
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsTop5" defaultMessage="awardsTop5" />
                                        </div>
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsBottom5" defaultMessage="awardsBottom5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="awards_item">
                                    <div className="award_item_inner font_bold">
                                        <span>
                                            2019
                                    </span>
                                    </div>
                                    <div className="awards_desc">
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsTop6" defaultMessage="awardsTop6" />
                                        </div>
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsBottom6" defaultMessage="awardsBottom6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="awards_items_mobile_small text_center">
                            <div className="awards_item_mobile">
                                <div className="awards_item">
                                    <div className="award_item_inner font_bold">
                                        <span>
                                            2017
                                    </span>
                                    </div>
                                    <div className="awards_desc">
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsTop1" defaultMessage="awardsTop1" />
                                        </div>
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsBottom1" defaultMessage="awardsBottom1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="awards_item">
                                    <div className="award_item_inner font_bold">
                                        <span>
                                            2017
                                    </span>
                                    </div>
                                    <div className="awards_desc">
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsTop2" defaultMessage="awardsTop2" />
                                        </div>
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsBottom2" defaultMessage="awardsBottom2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="awards_item_mobile">
                                <div className="awards_item">
                                    <div className="award_item_inner font_bold">
                                        <span>
                                            2017
                                    </span>
                                    </div>
                                    <div className="awards_desc">
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsTop3" defaultMessage="awardsTop3" />
                                        </div>
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsBottom3" defaultMessage="awardsBottom3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="awards_item">
                                    <div className="award_item_inner font_bold">
                                        <span>
                                            2018
                                    </span>
                                    </div>
                                    <div className="awards_desc">
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsTop4" defaultMessage="awardsTop4" />
                                        </div>
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsBottom4" defaultMessage="awardsBottom4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="awards_item_mobile">
                                <div className="awards_item">
                                    <div className="award_item_inner font_bold">
                                        <span>
                                            2018
                                    </span>
                                    </div>
                                    <div className="awards_desc">
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsTop5" defaultMessage="awardsTop5" />
                                        </div>
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsBottom5" defaultMessage="awardsBottom5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="awards_item">
                                    <div className="award_item_inner font_bold">
                                        <span>
                                            2019
                                    </span>
                                    </div>
                                    <div className="awards_desc">
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsTop6" defaultMessage="awardsTop6" />
                                        </div>
                                        <div className="awards_desc_text">
                                            <FormattedMessage id="awardsBottom6" defaultMessage="awardsBottom6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text_center">
                            <NavLink to="/aboutCompany" className="learn_more inline_block transitioned">
                                <FormattedMessage id="learnMore" defaultMessage="learnMore" />
                            </NavLink>
                        </div>
                    </div>
                </div> */}
            <div className="benefits_wrapper font_bold text_center">
                <div className="benefits_title">
                    <FormattedMessage id="additionalBenefits" defaultMessage="additionalBenefits" />
                </div>
                <div className="benefits_left inline_block">
                    <div className="comp_block background_styles">
                        {
                            firstHover ?
                                <div className="comp_block_inner background_styles" style={{ backgroundImage: 'url(/images/comp_block1.png)' }}></div>
                                : null
                        }
                        {
                            secondHover ?
                                <div className="comp_block_inner background_styles" style={{ backgroundImage: 'url(/images/comp_block2.png)' }}></div>
                                : null
                        }
                        {
                            thirdHover ?
                                <div className="comp_block_inner background_styles" style={{ backgroundImage: 'url(/images/comp_block3.png)' }}></div>
                                : null
                        }
                        {
                            fourthHover ?
                                <div className="comp_block_inner background_styles" style={{ backgroundImage: 'url(/images/comp_block4.png)' }}></div>
                                : null
                        }
                    </div>
                </div>
                <div className="benefits_right inline_block">
                    <div className={firstHover ? "benefit_item benefit_item_active text_left" : "benefit_item text_left"}
                        onMouseEnter={handleFirstHover}>
                        <div className="benefit_title font_bold">
                            <FormattedMessage id="benefitTitle1" defaultMessage="benefitTitle1" />
                        </div>
                        <div className="benefit_text">
                            <FormattedMessage id="benefitText1" defaultMessage="benefitText1" />
                        </div>
                    </div>
                    <div className={secondHover ? "benefit_item benefit_item_active text_left" : "benefit_item text_left"}
                        onMouseEnter={handleSecondHover}>
                        <div className="benefit_title font_bold">
                            <FormattedMessage id="benefitTitle2" defaultMessage="benefitTitle2" />
                        </div>
                        <div className="benefit_text">
                            <FormattedMessage id="benefitText2" defaultMessage="benefitText2" />
                        </div>
                    </div>
                    <div className={thirdHover ? "benefit_item benefit_item_active text_left" : "benefit_item text_left"}
                        onMouseEnter={handleThirdHover}>
                        <div className="benefit_title font_bold">
                            <FormattedMessage id="benefitTitle3" defaultMessage="benefitTitle3" />
                        </div>
                        <div className="benefit_text">
                            <FormattedMessage id="benefitText3" defaultMessage="benefitText3" />
                        </div>
                    </div>
                    <div className={fourthHover ? "benefit_item benefit_item_active text_left" : "benefit_item text_left"}
                        onMouseEnter={handleFourthHover}>
                        <div className="benefit_title font_bold">
                            <FormattedMessage id="benefitTitle4" defaultMessage="benefitTitle4" />
                        </div>
                        <div className="benefit_text">
                            <FormattedMessage id="benefitText4" defaultMessage="benefitText4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="steps_wrapper">
                <div className="steps_title text_center font_bold">
                    <FormattedMessage id="threeStepsToStartTrading" defaultMessage="threeStepsToStartTrading" />
                </div>
                <div className="stepes_items text_center">
                    <div className="steps_item inline_block">
                        <div className="steps_icon inline_block">
                            <span>
                                <img className="registration" src="/images/registration.svg" alt="" />
                            </span>
                            <div className="steps_arrow">
                                <img className="steps_arrow_icon" src="/images/steps_arrow.png" alt="" />
                            </div>
                        </div>
                        <div className="steps_subtitle font_bold">
                            <FormattedMessage id="stepsTitle1" defaultMessage="stepsTitle1" />
                        </div>
                        <div className="steps_text">
                            <FormattedMessage id="stepsText1" defaultMessage="stepsText1" />
                        </div>
                    </div>
                    <div className="steps_item inline_block">
                        <div className="steps_icon inline_block">
                            <span>
                                <img className="deposit" src="/images/deposit.svg" alt="" />
                            </span>
                            <div className="steps_arrow">
                                <img className="steps_arrow_icon" src="/images/steps_arrow.png" alt="" />
                            </div>
                        </div>
                        <div className="steps_subtitle font_bold">
                            <FormattedMessage id="stepsTitle2" defaultMessage="stepsTitle2" />
                        </div>
                        <div className="steps_text">
                            <FormattedMessage id="stepsText2" defaultMessage="stepsText2" />
                        </div>
                    </div>
                    <div className="steps_item inline_block">
                        <div className="steps_icon inline_block">
                            <span>
                                <img className="deal" src="/images/deal.svg" alt="" />
                            </span>
                        </div>
                        <div className="steps_subtitle font_bold">
                            <FormattedMessage id="stepsTitle3" defaultMessage="stepsTitle3" />
                        </div>
                        <div className="steps_text">
                            <FormattedMessage id="stepsText3" defaultMessage="stepsText3" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="news_wrapper">
                <div className="main_content">
                    <div className="news_title text_center font_bold">
                        <FormattedMessage id="latestEconomicNews" defaultMessage="latestEconomicNews" />
                    </div>
                    <Slider {...newsSliderSettings}>
                        {
                            rssData.map(item => {
                                return (
                                    <div className="news_slider_top_wrapper" key={item.author}>
                                        <div className="news_slider_item relative">
                                            <div className="news_item_top background_styles" style={{ backgroundImage: 'url(' + item.img_url + ')' }}></div>
                                            <div className="news_slider_content">
                                                <div className="news_slider_title font_bold">
                                                    {item.title}
                                                </div>
                                                {/* <div className="news_slider_text">
                                                        Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но фрагмент классической латыни 45 года н.э.,
                                                    </div> */}
                                                <div className="news_slider_info">
                                                    <span>
                                                        <FormattedMessage id="source" defaultMessage="source" /> : {item.author}
                                                    </span>
                                                    <span>
                                                        {(item.date).slice(0, (item.date).length - 5)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="news_read_wrapper">
                                                <a href={item.link} className="news_read_link" target="_blank">
                                                    <FormattedMessage id="read" defaultMessage="read" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
            <div className="info_wrapper">
                <div className="main_content">
                    <div className="info_title text_center font_bold">
                        <FormattedMessage id="accountInformation" defaultMessage="accountInformation" />
                    </div>
                    <div className="info_items">
                        <Slider {...infoSliderSettings}>

                            <div className="inline_block">
                                <div className="info_item info_item_left relative">
                                    <div className="info_item_left_title font_bold text_center">
                                        <FormattedMessage id="silver" defaultMessage="silver" />
                                    </div>
                                    <div className="info_item_left_subtitle font_bold">
                                        <FormattedMessage id="silverTitle" defaultMessage="silverTitle" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="silverDecs1" defaultMessage="silverDecs1" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="silverDecs2" defaultMessage="silverDecs2" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="silverDecs3" defaultMessage="silverDecs3" />
                                    </div>
                                    <div className="info_item_button text_center">
                                        <button className="info_button transitioned">
                                            <FormattedMessage id="openAnAccount" defaultMessage="openAnAccount" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="inline_block">
                                <div className="info_item info_item_middle relative">
                                    <div className="info_item_middle_title font_bold text_center">
                                        <FormattedMessage id="gold" defaultMessage="gold" />
                                    </div>
                                    <div className="info_item_left_subtitle font_bold">
                                        <FormattedMessage id="goldTitle" defaultMessage="goldTitle" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="goldDecs1" defaultMessage="goldDecs1" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="goldDecs2" defaultMessage="goldDecs2" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="goldDecs3" defaultMessage="goldDecs3" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="goldDecs4" defaultMessage="goldDecs4" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="goldDecs5" defaultMessage="goldDecs5" />
                                    </div>
                                    <div className="info_item_button text_center">
                                        <button className="info_button transitioned">
                                            <FormattedMessage id="openAnAccount" defaultMessage="openAnAccount" />
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="inline_block">
                                <div className="info_item info_item_right relative">
                                    <div className="info_item_right_title font_bold text_center">
                                        <FormattedMessage id="platinum" defaultMessage="platinum" />
                                    </div>
                                    <div className="info_item_left_subtitle font_bold">
                                        <FormattedMessage id="platinumTitle" defaultMessage="platinumTitle" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platinumDecs1" defaultMessage="platinumDecs1" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platinumDecs2" defaultMessage="platinumDecs2" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platinumDecs3" defaultMessage="platinumDecs3" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platinumDecs4" defaultMessage="platinumDecs4" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platinumDecs5" defaultMessage="platinumDecs5" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platinumDecs6" defaultMessage="platinumDecs6" />
                                    </div>
                                    <div className="platform_list_item relative">
                                        <FormattedMessage id="platinumDecs7" defaultMessage="platinumDecs7" />
                                    </div>
                                    <div className="info_item_button text_center">
                                        <button className="info_button transitioned">
                                            <FormattedMessage id="openAnAccount" defaultMessage="openAnAccount" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

// class HomePage extends React.Component {
//     constructor(props) {
//         super(props);



//         this.getRssData = this.getRssData.bind(this);
//     }





//     componentDidUpdate(){
//         console.log(this.props.lang);
//     }

//     render() {



//         // test data from rss
//         

export default HomePage;