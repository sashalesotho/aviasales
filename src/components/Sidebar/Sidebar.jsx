import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Sidebar.module.scss';
import * as actions from '../../redux/actions';

const Sidebar = ({ filterItems, updateFilters }) => {
  let countSelectFilters = 0;

  const filters = [...filterItems].map(({ label, name, isCheck }) => {
    if (isCheck) {
      countSelectFilters += 1;
    }

    const onChange = (event) => {
      const newArr = [...filterItems];
      if (name === 'all' && isCheck === false) {
        newArr.map((el) => {
          el.isCheck = true;
          return el;
        });
      }
      if (name === 'all' && isCheck === true) {
        newArr.map((el) => {
          el.isCheck = false;
          return el;
        });
      }

      if (name !== 'all') {
        newArr.map((el) => {
          if (el.name === name) {
            el.isCheck = event.target.checked;
            if (!event.target.checked) {
              countSelectFilters -= 1;
            }
          }
          if (el.name === 'all') {
            el.isCheck = false;
          }
          return el;
        });
      }

      if (countSelectFilters === 3 && name !== 'all') {
        newArr.map((el) => {
          el.isCheck = true;
          return el;
        });
      }

      updateFilters(newArr);
    };
    return (
      <label className={classes.label}>
        <input className={classes.input} type="checkbox" checked={isCheck} onChange={onChange} id={name} />
        <span className={classes.checkbox} />
        {label}
      </label>
    );
  });
  return (
    <form className={classes.sidebar}>
      <fieldset className={classes.filter}>
        <legend className={classes.legend}>Количество пересадок</legend>
        {filters}
      </fieldset>
    </form>
  );
};

Sidebar.propTypes = {
  filterItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateFilters: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filterItems }) => ({
  filterItems,
});

const mapDispatchToProps = (dispatch) => ({
  updateFilters: (newFilters) => dispatch(actions.updateFilters(newFilters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
