import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';
import { getContactsFilter } from 'redux/selectors';
import { contactFilter } from 'redux/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);

  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={event => dispatch(contactFilter(event.currentTarget.value))}
      />
    </FilterWrapper>
  );
}

