import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.os === "ios" ? "padding" : null
})`
  flex: 1;
  background: #f5f5f5;
  padding: 30px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  autoCapitalize: "none",
  autoCorrect: false,
  placeholderTextColor: "#999"
})`
  height: 46px;
  background-color: white;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 4px;
  align-self: stretch;
  margin-top: 20px;
  padding: 0 15px;
`;

export const Button = styled.TouchableOpacity`
  height: 46px;
  align-self: stretch;
  background-color: #df4723;
  border-radius: 4px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
