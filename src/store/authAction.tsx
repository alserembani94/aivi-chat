import { createAction } from '@reduxjs/toolkit';

export const authenticationBegan: (any) = createAction("auth/authenticationBegan");
export const authenticationSuccess: (any) = createAction("auth/authenticationSuccess");
export const authenticationFailed: (any) = createAction("auth/authenticationFailed");