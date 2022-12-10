import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Button, Container} from '../components';
import useAuth from '../modules/auth/hook';
import {TParentNavigator} from '../navigations/types';
import {RootState} from '../store/reducers';
import {AuthState} from '../store/reducers/auth';

type Props = NativeStackScreenProps<TParentNavigator>;

const HomeScreen = ({navigation}: Props) => {
  const {logout} = useAuth();

  const {userLogin}: AuthState = useSelector((ev: RootState) => ev.auth);

  return (
    <Container>
      <Text style={styles.title}>
        Wellcome {userLogin?.firstName} {userLogin?.lastName}!
      </Text>
      <Button
        title="Logout"
        onPress={() =>
          logout(() => {
            navigation.navigate('AuthRoute' as never);
          })
        }
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    marginBottom: 50,
    fontWeight: '400',
  },
});

export default HomeScreen;
