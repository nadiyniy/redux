import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
// import { setStatusFilter } from 'redux/del/actions';
import { getStatusFilter } from 'redux/selectors';
import css from './StatusFilter.module.css';
import { setStatusFilter } from 'redux/filtersSlice';

export const StatusFilter = () => {
  const dispatch = useDispatch();

  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => {
          handleFilterChange(statusFilters.all);
        }}
        selected={filter === statusFilters.all}
      >
        All
      </Button>
      <Button
        onClick={() => {
          handleFilterChange(statusFilters.active);
        }}
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => {
          handleFilterChange(statusFilters.completed);
        }}
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};
