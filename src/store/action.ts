import {createAction} from '@reduxjs/toolkit';

export const cityChange = createAction<string>('cityChange');
export const listFilling = createAction('listFilling');

