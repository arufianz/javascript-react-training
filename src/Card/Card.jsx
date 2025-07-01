import cardPic from '../assets/ElainaChibi.jpg'
import PropTypes, { checkPropTypes, string } from 'prop-types';
import styles from './Card.module.css';

function Card({name = "Hu Tao"}){

    checkPropTypes(Card.PropTypes,{name},'context','Card');
    return(
        <div className={styles.card}>
            <img className={styles.cardPic} src={cardPic} alt="my picture" />
            <h2>{name}</h2>
            <p>Lorem, ipsum dolor sit amet consectetu
                r adipisicing elit. Quae, sint. Lorem
                 ipsum dolor sit amet.</p>
        </div>
    );
};

Card.PropTypes={
    name: PropTypes.string,
};

export default Card