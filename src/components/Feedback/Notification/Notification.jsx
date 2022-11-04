import React from "react";
import css from './Notification.module.css'
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
    <p className={css.Notfication_title}>{message}</p>
)

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}