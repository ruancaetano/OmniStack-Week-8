import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f5f5f5;
  align-items: center;
  justify-content: space-between;
`;

export const Empty = styled.Text`
  align-self: center;
  color: #999;
  font-size: 24px;
  font-weight: bold;
`;

export const CardsContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
`;
export const Card = styled.View`
  border-width: 1px;
  border-color: #ddd;
  border-radius: 8px;
  margin: 30px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Avatar = styled.Image`
  flex: 1;
  height: 300px;
`;

export const Logo = styled.Image`
  margin-top: 10px;
`;

export const Footer = styled.View`
  background-color: #fff;
  padding: 15px 20px;
`;

export const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const UserBio = styled.Text.attrs({
  numberOfLines: 3
})`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
  line-height: 18px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #fff;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  shadow-color: #000;
  shadowOpacity: 0.05px;
  shadow-radius: 2px;
  shadow-offset: {
    width: 0,
    height: 2px
  }
`;

export const MatchContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;
`;
export const MatchAvatar = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border-width: 5px;
  border-color: #fff;
  margin: 30px 0;
`;

export const MatchName = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
`;

export const MatchBio = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  line-height: 30px;
  max-width: 400px;
  color: rgba(255, 255, 255, 0.8);
`;

export const MatchButton = styled.TouchableOpacity`
  margin-top: 30px;
`;

export const MatchButtonText = styled.Text`
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
`;
