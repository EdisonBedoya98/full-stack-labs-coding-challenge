import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import {
  selectMonsters,
  selectSelectedMachineMonster,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  fetchMonstersData,
  setSelectedMachineMonster,
} from '../../reducers/monsters/monsters.actions';

export function useMonster() {
  const dispatch = useAppDispatch();
  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const selectedMachineMonster = useSelector(selectSelectedMachineMonster);
  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  useEffect(() => {
    if (selectedMonster) {
      dispatch(setSelectedMachineMonster(selectedMonster));
    } else {
      dispatch(setSelectedMachineMonster(null));
    }
  }, [selectedMonster]);

  return {
    monsters,
    selectedMonster,
    selectedMachineMonster,
  };
}
