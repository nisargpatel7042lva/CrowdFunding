'use client';

import styled from 'styled-components';
import { FormState } from '../Form';
import { useContext } from 'react';

const FormLeftWrapper = () => {
  const Handler = useContext(FormState);

  return (
    <FormLeft>
      <FormInput>
        <label>Campaign Title</label>
        <Input 
          onChange={Handler.FormHandler} 
          value={Handler.form.campaignTitle} 
          placeholder='Campaign Title' 
          name='campaignTitle'
          suppressHydrationWarning
        />
      </FormInput>
      <FormInput>
        <label>Story</label>
        <TextArea 
          onChange={Handler.FormHandler} 
          value={Handler.form.story} 
          placeholder='Campaign Story' 
          name='story'
          suppressHydrationWarning
        />
      </FormInput>
    </FormLeft>
  );
};

const FormLeft = styled.div`
  width: 45%;
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'poppins';
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 15px;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: large;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 15px;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: large;
  width: 100%;
  min-height: 120px;
  resize: vertical;
`;

export default FormLeftWrapper;