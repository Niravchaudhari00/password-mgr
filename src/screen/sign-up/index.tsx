import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SingUpStyle} from './style';

const SignUp = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      Alert.alert(
        'Success',
        `Account created for ${userCredential.user.email}`,
      );
      navigation.navigate('Login'); // Navigate to Login screen after successful sign-up
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'This email is already in use.');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'Invalid email format.');
      } else if (error.code === 'auth/weak-password') {
        Alert.alert('Error', 'Password should be at least 6 characters.');
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <View style={SingUpStyle.container}>
      <Text style={SingUpStyle.title}>Create Account</Text>
      <Text style={SingUpStyle.subtitle}>Sign up to start using the app</Text>

      <View style={SingUpStyle.inputWrapper}>
        <TextInput
          style={SingUpStyle.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Icon name="email-outline" size={20} color="#A0A0A0" />
      </View>

      <View style={SingUpStyle.inputWrapper}>
        <TextInput
          style={SingUpStyle.input}
          placeholder="Password"
          secureTextEntry={hidePassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Icon
            name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#A0A0A0"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={SingUpStyle.signUpButton} onPress={handleSignUp}>
        <Text style={SingUpStyle.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={SingUpStyle.footerText}>
        Already have an account?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={SingUpStyle.highlight}>Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default SignUp;
