import React from 'react';
import { Image } from 'react-native';

import { Container, Text } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Text>SIGNIN</Text>
    </Container>
  );
};

export default SignIn;
