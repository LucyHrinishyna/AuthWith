import * as React from 'react';
import { Image, Form, Button, List } from 'semantic-ui-react';

interface IUsProps {
  name?: string;
  img?: string;
}

const UserForm = (props:IUsProps) => (
  <Form>
    <Image src={props.img} avatar/>
    <Form.Input>{props.name}</Form.Input>
    <Form.Button>Button</Form.Button>
  </Form>
);

export default UserForm;