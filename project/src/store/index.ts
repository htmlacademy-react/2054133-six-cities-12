import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, State } from '../types/state';
import { reducer } from './reducer';

const store = configureStore({reducer});

const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export { store, useAppDispatch, useAppSelector };
