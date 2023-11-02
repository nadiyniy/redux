// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  setStatusFilter,
  toggleCompleted,
} from './actions';

const { statusFilters } = require('../constants');

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];
// Відповідає лише за оновлення властивості tasks
// Тепер значенням параметра state буде масив завдань

// export const tasksReducer_old = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     // case 'tasks/addTask':
//     case addTask.type:
// return [...state, action.payload];

//     // case 'tasks/deleteTask':
//     case deleteTask.type:
// return state.filter(task => task.id !== action.payload);

//     // case 'tasks/toggleCompleted':
//     case toggleCompleted.type:
// return state.map(task => {
//   if (task.id !== action.payload) {
//     return task;
//   }

//   return { ...task, completed: !task.completed };
// });

//     default:
//       return state;
//   }
// };

export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    // return [...state, action.payload];
    //==immer
    state.push(action.payload);
  },
  [deleteTask]: (state, action) => {
    // return state.filter(task => task.id !== action.payload);
    //==immer
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
  },
  [toggleCompleted]: (state, action) => {
    // return state.map(task => {
    //   if (task.id !== action.payload) {
    //     return task;
    //   }
    //   return { ...task, completed: !task.completed };
    // });
    //==immer
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  },
});

const filtersInitialState = {
  status: statusFilters.all,
};
// Відповідає лише за оновлення властивості filters
// Тепер значенням параметра state буде об'єкт фільтрів

// export const filtersReducer_old = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     // case 'filters/setStatusFilter':
//     case setStatusFilter.type:
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    // return {
    //   ...state,
    //   status: action.payload,
    // };
    //==immer
    state.status = action.payload;
  },
});

//видалили і додали експорт на функції
// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });
