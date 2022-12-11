import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Button, Container} from '../components';
import useAuth from '../modules/auth/hook';
import useUsers from '../modules/users/hook';
import {TParentNavigator} from '../navigations/types';
import {RootState} from '../store/reducers';
import {AuthState} from '../store/reducers/auth';

type Props = NativeStackScreenProps<TParentNavigator>;

const HomeScreen = ({navigation}: Props) => {
  const {logout} = useAuth();
  const {users} = useUsers();

  const {userLogin}: AuthState = useSelector((ev: RootState) => ev.auth);

  return (
    <Container>
      <Text style={styles.title}>
        Wellcome {userLogin?.firstName} {userLogin?.lastName}!
      </Text>
      <View style={{marginBottom: 100}}>
        <FlatList
          data={users?.users}
          renderItem={({item}) => <Text>{item.firstName}</Text>}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <Button
        title="Logout"
        onPress={() =>
          logout(() => {
            navigation.navigate('AuthRoute', {screen: 'Login'});
          })
        }
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 50,
    fontWeight: '400',
  },
});

export default HomeScreen;
