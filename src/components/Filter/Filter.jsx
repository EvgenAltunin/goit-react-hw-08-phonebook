import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValueAction } from 'redux/filter.slice';
import { getFilterValue } from 'redux/selectors';

import { Lable, Input } from 'components/Filter/Filter.styled';
export const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const handleFilterChange = event => {
    dispatch(setFilterValueAction(event.target.value));
  };

  return (
    <Lable>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        onChange={handleFilterChange}
        value={filter}
      />
    </Lable>
  );
};
