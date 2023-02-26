import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  Divider,
  Image,
  MonsterName,
  MonsterSkill,
  ProgressBar,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    <BattleMonsterCard centralized={!monster}>
      {monster && <Image src={monster?.imageUrl} />}
      {false && <BattleMonsterTitle>{title!}</BattleMonsterTitle>}{' '}
      <MonsterName>Dead Unicor</MonsterName>
      {monster && (
        <>
          <Divider />

          <MonsterSkill>HP</MonsterSkill>
          <ProgressBar variant="determinate" value={monster?.hp} />
          <MonsterSkill>Attack</MonsterSkill>
          <ProgressBar variant="determinate" value={monster?.attack} />
          <MonsterSkill>Defense</MonsterSkill>
          <ProgressBar variant="determinate" value={monster?.defense} />
          <MonsterSkill>Speed</MonsterSkill>
          <ProgressBar variant="determinate" value={monster?.speed} />
        </>
      )}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
