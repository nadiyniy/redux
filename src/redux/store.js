//=======================redux toolkit

import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';
// import { filtersReducer, tasksReducer } from './del/reducer';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';
// // Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
