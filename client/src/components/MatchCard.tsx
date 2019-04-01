import React from 'react';
import styled from 'styled-components';
// import useAxios from '@use-hooks/axios';
// import useAxios from 'axios-hooks';

interface MatchProps {
  // matchDetails?: object | any;
  // summonerName: string;
  // gameId: string;
  gameDuration: number;
  win?: string;
  participantPlayerId: string;
  summAId: any;
  summBId: any;
  champLevel: number;
  totalMinionsKilled: number;
  neutralMinionsKilled: number;
  teamJgMinionsKilled: number;
  enemyJgMinionsKilled: number;
  primaryKeystone: string;
  primaryRune1: string;
  primaryRune2: string;
  primaryRune3: string;
  secondaryRune1: string;
  secondaryRune2: string;
  championId: string;
  item0: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
  kills: number;
  deaths: number;
  assists: number;
}

const MatchCard: React.FC<MatchProps> = (props: MatchProps) => {
  const {
    win,
    gameDuration,
    // participantPlayerId,
    summAId,
    summBId,
    champLevel,
    totalMinionsKilled,
    neutralMinionsKilled,
    teamJgMinionsKilled,
    enemyJgMinionsKilled,
    primaryKeystone,
    primaryRune1,
    primaryRune2,
    primaryRune3,
    secondaryRune1,
    secondaryRune2,
    championId,
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    kills,
    deaths,
    assists,
  } = props;

  // let summName: string;
  //
  // const getSummData = (spellId: number) => {
  //   switch (spellId) {
  //     case 21:
  //       summName = 'Barrier';
  //       break;
  //     case 1:
  //       summName = 'Cleanse';
  //       break;
  //     case 14:
  //       summName = 'Ignite';
  //       break;
  //     case 3:
  //       summName = 'Exhaust';
  //       break;
  //     case 4:
  //       summName = 'Flash';
  //       break;
  //     case 6:
  //       summName = 'Ghost';
  //       break;
  //     case 7:
  //       summName = 'Heal';
  //       break;
  //     case 13:
  //       summName = 'Clarity';
  //       break;
  //     case 11:
  //       summName = 'Smite';
  //       break;
  //     case 32:
  //       summName = 'Mark';
  //       break;
  //     case 12:
  //       summName = 'Teleport';
  //       break;
  //     default:
  //       console.log(`unable to find ${spellId}`);
  //   }
  //   return summName;
  // };

  const TotalCS: any = (
    totalMinionsKilled +
    neutralMinionsKilled +
    teamJgMinionsKilled +
    enemyJgMinionsKilled
  ).toFixed(1);

  const CsPerMin: any = (TotalCS / gameDuration).toFixed(1);

  const KDA: any = ((kills + assists) / deaths).toFixed(2);

  return (
    <CardWrapper>
      <CardRow>
        <CardCol>
          {win === 'Win' ? <p>Win</p> : <p>Lose</p>}
          <p>
            {`${Math.floor(gameDuration / 60)}:${
              gameDuration % 60 ? gameDuration % 60 : '00'
            }`}
          </p>
        </CardCol>
        <CardCol>
          <p>{championId}</p>
        </CardCol>
        <CardCol>
          <p>{summAId}</p>
          <p>{summBId}</p>
        </CardCol>
        <CardCol>
          <p>
            {kills}/{deaths}/{assists}
          </p>
          {deaths === 0 ? <p>Perfect</p> : <p>{KDA}:1 KDA</p>}
        </CardCol>
        <CardCol>
          <p>{champLevel}</p>
          <p>
            {TotalCS} ({CsPerMin}) CS
          </p>
        </CardCol>
        <CardCol>
          <p>{item0}</p>
          <p>{item1}</p>
          <p>{item2}</p>
          <p>{item3}</p>
        </CardCol>
        <CardCol>
          <p>{item4}</p>
          <p>{item5}</p>
          <p>{item6}</p>
        </CardCol>
      </CardRow>
      <CardRow>
        <p>Keystone: {primaryKeystone}</p>
        <p>Primary Rune 1: {primaryRune1}</p>
        <p>Primary Rune 2: {primaryRune2}</p>
        <p>Primary Rune 3: {primaryRune3}</p>
        <p>Secondary Rune 1: {secondaryRune1}</p>
        <p>Secondary Rune 2: {secondaryRune2}</p>
      </CardRow>
    </CardWrapper>
  );
};

export default MatchCard;

const CardWrapper = styled.div`
  height: auto;
  width: 100%;
  border: 2px solid black;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: aliceblue;

  p {
    font-size: 0.6rem;
  }
`;

const CardRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  border: 1px dotted black;
  margin: 0.4rem;
`;

const CardCol = styled.div`
  height: 100%;
  width: 10%;
  max-width: 100px;
  margin: 0 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border: 1px dotted black;
`;