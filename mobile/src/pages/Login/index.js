import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { Button, ButtonText, Container, Input } from "./styles";

import logo from "../../assets/logo.png";
import api from "../../services/api";

export default function Login({ navigation }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    AsyncStorage.getItem("user").then(_id => {
      if (_id) {
        navigation.navigate("Main", {
          id: _id
        });
      }
    });
  }, []);

  async function handleLogin() {
    const response = await api.post(`/devs`, { username: user });
    const { _id } = response.data;
    await AsyncStorage.setItem("user", _id);
    navigation.navigate("Main", {
      id: _id
    });
  }

  return (
    <Container>
      <Image source={logo} />
      <Input
        value={user}
        onChangeText={value => setUser(value)}
        placeholder="Digite seu usuário do github"
      />
      <Button onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
}
