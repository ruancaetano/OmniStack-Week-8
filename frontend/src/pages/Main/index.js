import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Avatar,
  Button,
  Buttons,
  Container,
  DevName,
  DevBio,
  Empty,
  List,
  ListItem,
  ListItemFooter
} from "./styles";
import api from "../../services/api";
import logo from "../../assets/logo.svg";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";

export default function Main({ match }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function loadUsers() {
      const { id } = match.params;
      const response = await api.get(`/devs`, {
        headers: {
          user: id
        }
      });
      setUsers(response.data);
    }

    loadUsers();
  }, [match.params, match.params.id]);

  async function handleLike(targetUserId) {
    const { id: loggedUserId } = match.params;
    console.log(`Like: ${targetUserId}`);
    await api.post(`/devs/${targetUserId}/likes`, null, {
      headers: {
        user: loggedUserId
      }
    });
    setUsers(users.filter(user => user._id !== targetUserId));
  }

  async function handleDislike(targetUserId) {
    const { id: loggedUserId } = match.params;
    console.log(`Dislike: ${targetUserId}`);
    await api.post(`/devs/${targetUserId}/deslikes`, null, {
      headers: {
        user: loggedUserId
      }
    });
    setUsers(users.filter(user => user._id !== targetUserId));
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Tindev Logo" />
      </Link>
      {users.length > 0 ? (
        <List>
          {users.map(user => (
            <ListItem key={user._id}>
              <Avatar src={user.avatar} alt="" />
              <ListItemFooter>
                <DevName>{user.name}</DevName>
                <DevBio>{user.bio}</DevBio>
              </ListItemFooter>

              <Buttons>
                <Button type="button" onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt="" />
                </Button>
                <Button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="" />
                </Button>
              </Buttons>
            </ListItem>
          ))}
        </List>
      ) : (
        <Empty>Acabou :(</Empty>
      )}
    </Container>
  );
}
