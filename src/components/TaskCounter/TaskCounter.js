import { useSelector } from 'react-redux';
import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(state => state.tasks);
  console.log(tasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      }
      if (task.active) {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  console.log(count);

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
