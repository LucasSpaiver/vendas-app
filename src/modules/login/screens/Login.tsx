import { Text, View } from 'react-native';

import Button from '../../../shared/components/button/button';
import Input from '../../../shared/components/input/Input';
import { ContainerLogin } from '../styles/login.styles';

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Text>Login</Text>
        <Input />
        <Button margin="16px" title="ENTRAR" />
      </ContainerLogin>
    </View>
  );
};

export default Login;
