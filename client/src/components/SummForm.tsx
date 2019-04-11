import React from 'react';
import styled from 'styled-components';
import { ReactComponent as RorLogo } from '../assets/ror-logo.svg';

interface Props {
  setSummName: Function;
  summQuery: string;
  setSummQuery: Function;
  summName: string;
}

const SummForm: React.FC<Props> = (props: Props) => {
  const { setSummName, setSummQuery, summQuery, summName } = props;
  const summonerFormData = new FormData();

  const findSummoner = () => {
    setSummQuery(summName);
    summonerFormData.set('summonerName', summQuery);
  };

  return (
    <FormContainer>
      <RorLogo />
      <SummonerForm
        method="POST"
        action="/api/summoner"
        onSubmit={findSummoner}
      >
        <SummInput
          placeholder="Summoner Name"
          value={summName}
          // autoComplete="off"
          name="summName"
          onChange={e => setSummName(e.target.value)}
        />
        <SubmitButt
          type="submit"
          // @ts-ignore
          disabled={summName === ''}
        >
          submit
        </SubmitButt>
      </SummonerForm>
    </FormContainer>
  );
};

export default SummForm;

const FormContainer = styled.div`
  height: 100%;
  background-color: #151a27;
  border-radius: 4px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //z-index: 2;
  overflow: auto;

  h1 {
    color: white;
  }
`;

const SummonerForm = styled.form`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 6px;
`;

const SummInput = styled.input`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.25);
  outline: none;
  border: none;
  padding: 0.6rem 1rem;
  width: 25%;
  border-radius: 2px;
  margin: 1rem;
  transition: width 0.2s ease-in-out;
  background-color: #f3f8ff;
  caret-color: #565b63;
  color: #565b63;

  ::placeholder {
    color: #565b63;
  }

  &:focus {
    width: 40%;
  }
`;

const SubmitButt = styled.button`
  //width: 10%;
  margin-top: 1rem;
  padding: 0.6rem 2rem;
  text-decoration: none;
  outline: none;
  //border: none;
  border-radius: 6px;
  background-color: transparent;
  border: solid #1380f0 1px;
  //color: white;
  color: #1380f0;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;

  transition: background-color 0.2s ease-in-out, letter-spacing 0.2s ease-in-out,
    color 0.2s ease-in-out;

  &:hover {
    //width: 25%;
    background-color: #1380f0;
    //letter-spacing: 4px;
    color: #151a27;
  }

  &:disabled {
    opacity: 0.4;

    &:hover {
      background-color: transparent;
      color: #1380f0;
      cursor: default;
    }
  }
`;
