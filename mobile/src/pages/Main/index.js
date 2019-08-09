import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import {
  Avatar,
  Button,
  Buttons,
  Container,
  Card,
  CardsContainer,
  Empty,
  Footer,
  Logo,
  UserName,
  UserBio
} from "./styles";

import logo from "../../assets/logo.png";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import api from "../../services/api";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Main({ navigation }) {
  const id = navigation.getParam("id");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get(`/devs`, {
        headers: {
          user: id
        }
      });
      setUsers(response.data);
    }

    loadUsers();
  }, [id]);

  async function handleLike() {
    const loggedUserId = id;
    const [user, ...rest] = users;
    const targetUserId = user._id;
    await api.post(`/devs/${targetUserId}/likes`, null, {
      headers: {
        user: loggedUserId
      }
    });
    setUsers(rest);
  }

  async function handleDislike() {
    const loggedUserId = id;
    const [user, ...rest] = users;
    const targetUserId = user._id;
    await api.post(`/devs/${targetUserId}/deslikes`, null, {
      headers: {
        user: loggedUserId
      }
    });
    setUsers(rest);
  }

  async function handleLogout() {
    await AsyncStorage.clear();
    navigation.navigate("Login");
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleLogout}>
        <Logo source={logo} />
      </TouchableOpacity>
      <CardsContainer>
        {users.length > 0 ? (
          users.map((user, index) => (
            <Card key={user._id} style={{ zIndex: users.length - index }}>
              <Avatar
                source={{
                  uri: user.avatar
                }}
              />
              <Footer>
                <UserName>{user.name}</UserName>
                <UserBio>{user.bio}</UserBio>
              </Footer>
            </Card>
          ))
        ) : (
          <Empty>Acabou :(</Empty>
        )}
      </CardsContainer>

      {users.length > 0 && (
        <Buttons>
          <Button onPress={handleDislike}>
            <Image source={dislike} />
          </Button>
          <Button onPress={handleLike}>
            <Image source={like} />
          </Button>
        </Buttons>
      )}
    </Container>
  );
}
