import {Fragment} from 'react';
import PropTypes from 'prop-types';

import styles from './filter.module.scss';

const Filter = ({filter, changeFilter}) => {
    return (
        <Fragment>
            <p className={styles.message}>Find contacts by name</p>
            <input 
                type="text"
                value={filter} 
                onChange={changeFilter} 
                className={styles.input}
            />
        </Fragment>
    )
}

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
}

