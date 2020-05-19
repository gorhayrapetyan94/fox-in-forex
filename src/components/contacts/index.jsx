import React, { useState, useEffect } from 'react';
import './index.css';
import './media.css';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import Modal from 'react-modal';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import { FormattedMessage } from 'react-intl';
const showSecond = true;
const str = showSecond ? 'HH:mm:ss' : 'HH';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

const countries = [
    { label: "Россия", value: "Россия" },
    { label: "Украина", value: "Украина" },
    { label: "Казахстан", value: "Казахстан" },
    { label: "Англия", value: "Англия" },
    { label: "Испания", value: "Испания" },
    { label: "Германия", value: "Германия" },
    { label: "Франция", value: "Франция" },
    { label: "Китай", value: "Китай" },
    { label: "Италия", value: "Италия" },
    { label: "Другая", value: "Другая" }
];

function Contacts(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [name, setName] = useState('');
    const [nameErrorMsg, setNameErrorMsg] = useState(false);

    const [lastName, setLastName] = useState('');
    const [lastNameErrorMsg, setLastNameErrorMsg] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');

    const [email, setEmail] = useState('');
    const [emailErrorMsg, setEmailErrorMsg] = useState(false);

    const [country, setCountry] = useState('');
    const [countryErrorMsg, setCountryErrorMsg] = useState(false);

    const [language, setLanguage] = useState(props.lang);
    const [timeToCall, setTimeToCall] = useState('');

    useEffect(() => {
        setLanguage(props.lang);
        if (name !== '') {
            setNameErrorMsg(false);
        }
        if (lastName !== '') {
            setLastNameErrorMsg(false);
        }
        if (email !== '') {
            setEmailErrorMsg(false);
        }
        if (country !== '') {
            setCountryErrorMsg(false);
        }
    });

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    }

    const handleTimeToCallChange = (e) => {
        setTimeToCall(e.target.value);
    }

    const timeChange = (value) => {
        const selectedTime = (value.format(str)).slice(0, (value.format(str).length - 6)) + ':00';
        value = (value.format(str)).slice(0, (value.format(str).length - 6)) + ':00';
        setTimeToCall(selectedTime);
    }

    const _onSelect = (option) => {
        setCountry(option.value);
    }

    const handleFormSubmit = () => {

        const formUrl = 'http://casino.local/sender.php';

        const formData = {
            first_name: name,
            last_name: lastName,
            phone_number: phoneNumber,
            email: email,
            country: country,
            language: language,
            time_to_call: timeToCall,
            form_name: 'form_content'

        };

        if (name === '' || lastName === '' || email === '' || country === '') {
            setNameErrorMsg(true);
            setLastNameErrorMsg(true);
            setEmailErrorMsg(true);
            setCountryErrorMsg(true);
            return;
        }

        const requestOptions = {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        fetch(formUrl, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <>
            <div className="contacts_wrapper">
                <div className="main_content">
                    <div className="contacts_title font_bold text_center">
                        <FormattedMessage id="personalUserSupport" defaultMessage="personalUserSupport" />
                    </div>
                    <div className="order_call_wrapper text_center">
                        <button className="order_call transitioned" onClick={openModal}>
                            <span className="call_icon inline_block">
                                <img src="/images/call.svg" alt="" />
                            </span>
                            <span className="inline_block">
                                <FormattedMessage id="requestCallback" defaultMessage="requestCallback" />
                            </span>
                        </button>
                    </div>
                    <div className="call_order_text text_center">
                        запросите звонок и мы свяжемся с вами
                        в ближайшее время
                        </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div className="modal_title text_center font_bold">
                            Оставьте заявку
                            </div>
                        <div className="contacts_inps">
                            <div className="contacts_input">
                                <input type="text" placeholder="Имя*" name="first_name" onChange={handleNameChange} autoComplete="off" />
                                {
                                    nameErrorMsg ?
                                        <div className="contacts_error_msg">field is required</div>
                                        : null
                                }
                            </div>
                            <div className="contacts_input">
                                <input type="text" placeholder="Фамилия*" name="last_name" onChange={handleLastNameChange} autoComplete="off" />
                                {
                                    lastNameErrorMsg ?
                                        <div className="contacts_error_msg">field is required</div>
                                        : null
                                }
                            </div>
                            <div className="contacts_input">
                                <input type="text" placeholder="Ваш номер телефона" name="phone_number" onChange={handlePhoneNumberChange} autoComplete="off" />
                            </div>
                            <div className="contacts_input">
                                <input type="text" placeholder="Ваш E-mail*" name="email" onChange={handleEmailChange} autoComplete="off" />
                                {
                                    emailErrorMsg ?
                                        <div className="contacts_error_msg">field is required</div>
                                        : null
                                }
                            </div>
                            <div className="contacts_input">
                                <Dropdown
                                    options={countries}
                                    onChange={_onSelect}
                                    value={'Страна'}
                                    placeholder="Select an option"
                                    arrowClosed={<span className="arrow_closed" />}
                                    arrowOpen={<span className="arrow_opened" />}
                                />
                                {
                                    countryErrorMsg ?
                                        <div className="contacts_error_msg">field is required</div>
                                        : null
                                }
                            </div>
                            <div className="contacts_input">
                                <input type="text" placeholder="Язык" name="language" onChange={handleLanguageChange} value={props.lang} autoComplete="off" readOnly />
                            </div>
                            <div className="contacts_input contacts_input_time">
                                <div className="contacts_input_time_inner">
                                    <input type="text" placeholder="Удобное время для звонка" name="time_to_call" value={timeToCall} onChange={handleTimeToCallChange} readOnly />
                                </div>
                                <div className="contacts_input_time_inner">
                                    <TimePicker
                                        onChange={timeChange}
                                        defaultValue={moment()}
                                        showMinute={false}
                                        showSecond={false}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="send_wrapper text_center">
                            <input type="button" className="send transitioned" value="Отправить" onClick={handleFormSubmit} />
                        </div>
                    </Modal>
                    <div className="contacts_items">
                        <div className="why_forex_items text_center">
                            <div className="why_forex_item inline_block why_forex_left">
                                <div className="why_forex_inner">
                                    <div className="why_forex_inner_title font_bold">
                                        Международный номер
                                        </div>
                                    <div className="why_forex_inner_text">
                                        +7 90 99090909090
                                        </div>
                                </div>
                            </div>
                            <div className="why_forex_item inline_block why_forex_left">
                                <div className="why_forex_inner">
                                    <div className="why_forex_inner_title font_bold">
                                        Почта
                                        </div>
                                    <div className="why_forex_inner_text">
                                        support@foxinforex.com
                                        </div>
                                </div>
                            </div>
                            <div className="why_forex_item inline_block why_forex_left">
                                <div className="why_forex_inner">
                                    <div className="why_forex_inner_title font_bold">
                                        Месторасположение
                                        </div>
                                    <div className="why_forex_inner_text">
                                        Берется из копирайтинга
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts;