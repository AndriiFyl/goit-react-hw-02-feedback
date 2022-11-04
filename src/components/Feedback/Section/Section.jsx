import React from "react";
import css from "./Section.module.css";
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
    <section className={css.Section__title}>
       <p>{title}</p>
        {children}
    </section>
)

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}