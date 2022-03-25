import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateSortTabs } from '../../redux/actions';
import classes from './Tabs.module.scss';

const Tabs = ({ sortTabs, updateSortTabs }) => {
  const tabs = sortTabs.map(({ name, label, isActive }) => {
    let className = 'classes.button';

    if (isActive) {
      className = classes.active;
    }

    const onClick = () => {
      const newArr = [...sortTabs].map((el) => {
        if (el.name === name) {
          el.isActive = true;
        } else {
          el.isActive = false;
        }
        return el;
      });
      updateSortTabs(newArr);
    };
    return (
      <button type="button" onClick={onClick} key={name} onKeyDown={onClick} tabIndex={0} className={className}>
        {label}
      </button>
    );
  });

  return <div className={classes.container}>{tabs}</div>;
};

Tabs.defaultProps = {
  sortTabs: [],
};

Tabs.propTypes = {
  sortTabs: PropTypes.arrayOf(PropTypes.object),
  updateSortTabs: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sortTabs }) => ({
  sortTabs,
});

const mapDispatchToProps = (dispatch) => ({
  updateSortTabs: (newSortTabs) => dispatch(updateSortTabs(newSortTabs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
