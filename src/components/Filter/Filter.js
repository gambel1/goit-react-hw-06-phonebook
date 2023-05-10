import { getContactFilter } from 'redux/selectors';
import { setContactFilter } from 'redux/filterSlice';
import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getContactFilter);

  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={event => dispatch(setContactFilter(event.currentTarget.value))}
      />
    </FilterWrapper>
  );
}
