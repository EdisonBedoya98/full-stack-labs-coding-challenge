import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  fetchMonstersData,
  setSelectedMachineMonster,
  setSelectedMonster,
} from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  selectedMachineMonster: Monster | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  selectedMachineMonster: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));
  //

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));
  builder.addCase(setSelectedMachineMonster, (state, action) => {
    if (action.payload === null) {
      return { ...state, selectedMachineMonster: null };
    }
    const avaibleMonsters = state.monsters.filter(
      (monster) => state.selectedMonster?.id !== monster?.id,
    );
    const randomIndex = Math.floor(Math.random() * avaibleMonsters.length);

    const randomMonster = avaibleMonsters[randomIndex];

    return {
      ...state,
      selectedMachineMonster: randomMonster,
    };
  });
});
