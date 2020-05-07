import * as React from "react";
import styled from "styled-components";
import { Form } from "semantic-ui-react";
import UserForm from "@components/form/Form";
import account from '../mockdata/account';
import AuthForm from '@components/authorization/Authorization';


const AccountStyled = styled(Form)({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const AccountFormComponent: React.FC = () => {
  return(
    <AccountStyled divided>
      <AuthForm/>
    </AccountStyled>
  );
};

export default AccountFormComponent;