import { Title } from '../../components/title/Title';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.styled';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';
import { useMonster } from '../../components/hooks/useMonster';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';

const BattleOfMonsters = () => {
  const { monsters, selectedMonster, selectedMachineMonster } = useMonster();

  const handleStartBattleClick = () => {
    // Fight!
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />
      <WinnerDisplay text="Dead unicorn" />
      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title="Computer"
          monster={selectedMachineMonster}></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
