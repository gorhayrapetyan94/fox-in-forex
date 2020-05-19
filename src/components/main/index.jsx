import React, { useState, useEffect } from 'react';
import ScrollToTop from './scrollTop/index';

import '../../fonts/SegoeUI-SemiBold.ttf';
import '../../fonts/SegoeUI-SemiBold.woff';
import '../../fonts/SegoeUI-SemiBold.eot';
import '../../fonts/SegoeUI-Black.ttf';
import '../../fonts/SegoeUI-Black.woff';
import '../../fonts/SegoeUI-Black.eot';

import './index.css';
import './media.css';

import HomePage from '../home/index';
import Markets from '../markets/index';
import AboutCompany from '../aboutCompany/index';
import Contacts from '../contacts/index';
import PageNotFound from '../pageNotFound/index';

import { IntlProvider, FormattedMessage } from 'react-intl';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import messages_ru from "../../translations/ru.json";
import messages_en from "../../translations/en.json";
import messages_cn from "../../translations/cn.json";
import messages_de from "../../translations/de.json";
import messages_fr from "../../translations/fr.json";
import messages_it from "../../translations/it.json";
import messages_es from "../../translations/es.json";

const messages = {
	'ru': messages_ru,
	'en': messages_en,
	'cn': messages_cn,
	'de': messages_de,
	'fr': messages_fr,
	'it': messages_it,
	'es': messages_es,
};

const options = [
	{ label: "Русский", value: "ru" },
	{ label: "English", value: "en" },
	{ label: "Español", value: "es" },
	{ label: "Deutsch", value: "de" },
	{ label: "Français", value: "fr" },
	{ label: "繁體中文", value: "cn" },
	{ label: "Italiano", value: "it" }
]

if (!localStorage.getItem("casinoLanguage")) {
	localStorage.setItem("casinoLanguage", "ru");
}

function App() {

	const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("casinoLanguage"));
	const [openMobileMenu, setOpenMobileMenu] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const _onSelect = (option) => {
		setSelectedLanguage(option.value);
		setOpenMobileMenu(!openMobileMenu);
		localStorage.setItem("casinoLanguage", option.value);
	}

	const toggleMobleMenu = () => {
		setOpenMobileMenu(!openMobileMenu);
	}

	const handleWindowResize = () => {
		setWindowWidth(window.innerWidth);
	}

	const closeMobileMenu = () => {
		setOpenMobileMenu(false);
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
	});

	return (
		<div className="wrapper">
			<IntlProvider locale={localStorage.getItem("casinoLanguage")} messages={messages[localStorage.getItem("casinoLanguage")]}>
				<Router>
					<header>
						<div className="main_content flex_container">
							<NavLink to="/">
								<img className="logo" src="/images/logo.png" alt="" />
							</NavLink>
							<div className="nav_links">
								<NavLink className="nav_link" to="/markets" activeClassName="nav_link_active">
									<FormattedMessage id="markets" defaultMessage="markets" />
								</NavLink>
								<NavLink className="nav_link" to="/aboutCompany" activeClassName="nav_link_active">
									<FormattedMessage id="aboutCompany" defaultMessage="aboutCompany" />
								</NavLink>
								<NavLink className="nav_link" to="/contacts" activeClassName="nav_link_active">
									<FormattedMessage id="contacts" defaultMessage="contacts" />
								</NavLink>
							</div>
							<div className="header_right">
								<span className="dropdown">
									<Dropdown
										options={options}
										onChange={_onSelect}
										value={selectedLanguage}
										placeholder="Select an option"
										arrowClosed={<span className="arrow_closed" />}
										arrowOpen={<span className="arrow_opened" />}
									/>
								</span>
								<button className="header_btn login_btn transitioned">
									<FormattedMessage id="login" defaultMessage="login" />
								</button>
								<button className="header_btn reg_btn transitioned">
									<FormattedMessage id="registration" defaultMessage="registration" />
								</button>
							</div>
							<button className={openMobileMenu ? "cmn-toggle-switch cmn-toggle-switch__htx active" : "cmn-toggle-switch cmn-toggle-switch__htx"} onClick={toggleMobleMenu}>
								<span></span>
							</button>
							<div className={openMobileMenu ? "mobile_menu mobile_menu_opened transitioned" : "mobile_menu transitioned"}>
								<div className="nav_links">
									<NavLink className="nav_link" to="/markets" activeClassName="nav_link_active" onClick={closeMobileMenu}>
										<FormattedMessage id="markets" defaultMessage="markets" />
									</NavLink>
									<NavLink className="nav_link" to="/aboutCompany" activeClassName="nav_link_active" onClick={closeMobileMenu}>
										<FormattedMessage id="aboutCompany" defaultMessage="aboutCompany" />
									</NavLink>
									<NavLink className="nav_link" to="/contacts" activeClassName="nav_link_active" onClick={closeMobileMenu}>
										<FormattedMessage id="contacts" defaultMessage="contacts" />
									</NavLink>
								</div>
								<div className="header_right">
									<button className="header_btn login_btn transitioned">
										<FormattedMessage id="login" defaultMessage="login" />
									</button>
									<button className="header_btn reg_btn transitioned">
										<FormattedMessage id="registration" defaultMessage="registration" />
									</button>
									<span className="dropdown">
										<Dropdown
											options={options}
											onChange={_onSelect}
											value={selectedLanguage}
											placeholder="Select an option"
											arrowClosed={<span className="arrow_closed" />}
											arrowOpen={<span className="arrow_opened" />}
										/>
									</span>
								</div>
							</div>
						</div>
					</header>
					<ScrollToTop />
					<Switch>
						<Route exact path="/">
							<HomePage lang={selectedLanguage} />
						</Route>
						<Route path="/markets">
							<Markets />
						</Route>
						<Route path="/aboutCompany">
							<AboutCompany />
						</Route>
						<Route path="/contacts">
							<Contacts lang={selectedLanguage} />
						</Route>
						<Route exact path="*">
							<PageNotFound />
						</Route>
					</Switch>
					<div>
						<img src={
							windowWidth <= 768 ?
								`/images/footer_mobile_${selectedLanguage}.png`
								: windowWidth <= 1350 ?
									`/images/footer_hd_${selectedLanguage}.png` :
									`/images/footer_${selectedLanguage}.png`
						} alt="" style={{ width: '100%' }} />
					</div>
				</Router>
			</IntlProvider>
		</div>
	);
}

export default App;