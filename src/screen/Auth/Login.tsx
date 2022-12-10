import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  Container,
  FormField,
  Input,
  TextButton,
} from '../../components';
import {IUserCredential} from '../../modules/auth/dto';
import useAuth from '../../modules/auth/hook';
import {AuthStackParamList, TParentNavigator} from '../../navigations/types';
import {setLoginForm} from '../../store/actions/auth';
import {RootState} from '../../store/reducers';
import {AuthState} from '../../store/reducers/auth';

type Props = NativeStackScreenProps<TParentNavigator & AuthStackParamList>;

const LoginScreen = ({navigation}: Props) => {
  const {login} = useAuth();
  const dispatch = useDispatch();
  const {loginForm, isLoadingLogin}: AuthState = useSelector(
    (ev: RootState) => ev.auth,
  );

  const handleChange = (key: string, value: string) => {
    dispatch(
      setLoginForm({
        ...(loginForm as IUserCredential),
        [key]: value,
      }),
    );
  };

  return (
    <Container>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <FormField title="Username">
          <Input
            placeholder="Entry Username"
            onChangeText={event => handleChange('username', event)}
            value={loginForm?.username}
          />
        </FormField>
        <FormField title="Password" style={{marginTop: 15}}>
          <Input
            placeholder="Entry Password"
            value={loginForm?.password}
            secureTextEntry
            onChangeText={password => handleChange('password', password)}
          />
        </FormField>
        <View style={styles.textButton}>
          <TextButton
            title="SignUp"
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>

        <View style={styles.actionButton}>
          <Button
            title="Login"
            onPress={() => {
              login(() => {
                navigation.navigate('PageRoute' as never);
              });
            }}
            loading={isLoadingLogin}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  actionButton: {
    marginTop: 50,
  },
  title: {
    fontSize: 50,
    marginBottom: 50,
    fontWeight: '400',
  },
  textButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
});

export default LoginScreen;
