import React from 'react';
import '../../App.css';
import { FavouriteOff, FavouriteOn } from '../image/WIMicons';

export const isActive = (value, arr) => {
  return (arr.find(item => item.id === value.id) ? true : false)
}

export const Favourite = ({ flyer, modifyChoices, active }) => (
  < button
    type="button"
    onClick={() => modifyChoices(flyer, (active ? 'REMOVE_FAVOURITE_FLYERS' : 'ADD_TO_FAVOURITE_FLYERS'))}
  >
    {(active ? <FavouriteOn /> : <FavouriteOff />)}
  </button >
);
