import {createReducer} from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { cityChange, sortTypeSelect, loadOffers, setError, setOffersDataLoadingStatus, setSelectedPoint} from './action';
import { City } from '../types/offers';

type StateType = {
  city: City;
  offers: Offer[];
  sortType: string;
  isOffersDataLoading:boolean;
  error: string|null;
  selectedPoint: {
    title: string;
  } | null;
};

const initialState: StateType = {
  city: {
    name: 'Paris',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },
  offers: [],
  sortType: 'Popular',
  isOffersDataLoading: false,
  error: null,
  selectedPoint: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, {payload}) => {
      state.city = payload;
    })
    .addCase(loadOffers, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(sortTypeSelect, (state, {payload}) => {
      state.sortType = payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setSelectedPoint, (state, { payload }) => {
      state.selectedPoint = payload;
    });
});

export {reducer};
