import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LoginStyle} from './style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleLogin = () => {
    Alert.alert('Login', `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View style={LoginStyle.container}>
      <Text style={LoginStyle.title}>Welcome Back!</Text>
      <Text style={LoginStyle.subtitle}>Login to your account</Text>

      <View style={LoginStyle.inputWrapper}>
        <TextInput
          style={LoginStyle.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Icon name="email-outline" size={20} color="#A0A0A0" />
      </View>

      <View style={LoginStyle.inputWrapper}>
        <TextInput
          style={LoginStyle.input}
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

      <TouchableOpacity style={LoginStyle.loginButton} onPress={handleLogin}>
        <Text style={LoginStyle.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={LoginStyle.footerText}>
        Don't have an account? <Text style={LoginStyle.highlight}>Sign Up</Text>
      </Text>
    </View>
  );
};

export default Login;
