import React, { useState } from "react";

import api from "../../services/api";
import { Button, Container, Form, Input } from "./styles";
import logo from "../../assets/logo.svg";

export default function Login({ history }) {
  const [username, setUsername] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (username) {
      const response = await api.post("/devs", {
        username
      });
      const { _id } = response.data;
      history.push(`/dev/${_id}`);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev Logo" />
        <Input
          placeholder="Digite seu usuário do github"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}
