import * as React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { BlockHeader } from './styledComponent';

const Header: React.FC = () => {
  return(
    <BlockHeader>
      <Button icon size='big' name='circle outline' >
        <Icon name='user' />
      </Button>
      <Button icon size='big' name='circle outline' >
        <Icon name='sign-out' />
      </Button>
    </BlockHeader>
  )
};

export default Header;