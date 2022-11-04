import React from "react";
import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    

     <div className={css.Feedback__btn_wrapper}>
        {options.map(option => (
            <button className={css.Feedback__btn} type="button" name={option}
            key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
        ))}
    </div>
)

export default FeedbackOptions;


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}