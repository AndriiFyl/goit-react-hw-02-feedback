import React from "react";
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { FaSmile, FaMeh, FaAngry, FaChartLine} from "react-icons/fa";
import { MdThumbsUpDown } from "react-icons/md";


 const Statistics = ({good, neutral, bad, total, positivePercentage,}) => (
     <div 
         className={css.Statistics__wrapper}>
                <ul>
             <li className={css.Statistics__good}>
                 <span className={css.icon}><FaSmile /></span>
                 Good:
                            <span className={css.Statistics__number}>{good}</span>
                            </li>
             <li className={css.Statistics__neutral}>
                 <span className={css.icon}><FaMeh /></span>
                 Neutral:
                        <span className={css.Statistics__number}>{neutral}</span>
                            </li>
             <li className={css.Statistics__bad}>
                 <span className={css.icon}><FaAngry /></span>
                 Bad:
                    <span className={css.Statistics__number}>{bad}</span>
                        </li>
             <li className={css.Statistics__total}>
                 <span className={css.icon}><MdThumbsUpDown /></span>
                 Total:
                            <span className={css.Statistics__number}>{total}</span>
                        </li>
                        {/* #ffa500 */}
             <li className={css.Statistics__percent}
                //  style={positivePercentage > 64 ? { color: "#008000" } : { color: "#ff0000" }}
                 
                 style={positivePercentage > 39 && positivePercentage < 74 ? { color: "#ffa500" } : { color: "#ff0000" } &&
                        positivePercentage >= 74? { color: "#008000" } : { color: "#ff0000" } }
             >
                
                 <span className={css.icon}><FaChartLine/></span>
                     Positive Feedback:
                 <span className={css.Statistics__number}>{positivePercentage}% </span>
                           </li>
                    </ul>
                    </div>
)
// "#008000"
export default Statistics;


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}








