import * as React from "react";
import Item from "../components/item/Item";
import users from '../mockdata/users';
import { List } from 'semantic-ui-react';
import styled from "styled-components";

const UsersStyled = styled(List)({
    height: '50%',
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'scroll',
    overflowX: 'hidden',
});

const UsersComponent: React.FC = () => {
    return (
      <UsersStyled divided relaxed>
          {users.map((item) => (
            <Item name={item.name} rate={item.rate} img={item.img} key={item.id} />
          ))}        </UsersStyled>
    );
};

export default UsersComponent;