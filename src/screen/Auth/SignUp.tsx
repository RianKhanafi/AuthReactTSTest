import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, StyleSheet, Text} from 'react-native';
import {
  Button,
  Container,
  FormField,
  Input,
  TextButton,
} from '../../components';
import useAuth from '../../modules/auth/hook';
import {AuthStackParamList} from '../../navigations/types';
import {useDispatch, useSelector} from 'react-redux';
import {AuthState} from '../../store/reducers/auth';
import {RootState} from '../../store/reducers';
import {setSignUpForm} from '../../store/actions/auth';
import {IUserCredential} from '../../modules/auth/dto';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

const SignUp = ({navigation}: Props) => {
  const {signUpForm, isLoadingSignin}: AuthState = useSelector(
    (ev: RootState) => ev.auth,
  );

  const {signIn} = useAuth();
  const dispatch = useDispatch();

  const handleChange = (key: string, value: string) => {
    dispatch(
      setSignUpForm({
        ...(signUpForm as IUserCredential),
        [key]: value,
      }),
    );
  };

  return (
    <Container>
      <View style={styles.container}>
        <Text style={styles.title}>SignUp</Text>
        <FormField title="Username">
          <Input
            placeholder="Entry Username"
            value={signUpForm?.username}
            onChangeText={event => handleChange('username', event)}
          />
        </FormField>
        <FormField title="Email" style={{marginTop: 15}}>
          <Input
            placeholder="Entry Email"
            value={signUpForm?.email}
            onChangeText={event => handleChange('email', event)}
          />
        </FormField>
        <FormField title="Password" style={{marginTop: 15}}>
          <Input
            placeholder="Entry Password"
            secureTextEntry
            value={signUpForm?.password}
            onChangeText={event => handleChange('password', event)}
          />
        </FormField>
        <View style={styles.textButton}>
          <TextButton
            title="Login"
            onPress={() => {
              navigation.navigate('Login' as never);
            }}
          />
        </View>

        <View style={styles.actionButton}>
          <Button
            title="SignUp"
            loading={isLoadingSignin}
            onPress={() => {
              signIn(() => {
                navigation.navigate('Login' as never);
              });
            }}
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

export default SignUp;
