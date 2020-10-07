import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan: (any) = createAction("api/callBegan");
export const apiCallSuccess: (any) = createAction("api/callSuccess");
export const apiCallFailed: (any) = createAction("api/callFailed");

export const lexApiCallBegan: (any) = createAction("lexApi/callBegan");
export const lexApiCallSuccess: (any) = createAction("lexApi/callSuccess");
export const lexApiCallFailed: (any) = createAction("lexApi/callFailed");
