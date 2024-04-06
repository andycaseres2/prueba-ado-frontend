import { createAction } from '@reduxjs/toolkit';
import { User } from '../../types/User.types';

export const login = createAction<User>('auth/login');
export const logout = createAction('auth/logout');
