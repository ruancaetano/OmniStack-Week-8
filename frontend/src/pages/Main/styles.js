import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 5px auto;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 50px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ListItemFooter = styled.footer`
  flex: 1;
  background: #fff;
  border: 1px solid #eee;
  padding: 15px 20px;
  text-align: left;
  border-radius: 0 0 5px 5px;
`;

export const Avatar = styled.img`
  max-width: 100%;
  border-radius: 5px 5px 0 0;
`;
export const DevName = styled.strong`
  font-size: 16px;
  color: #333;
`;

export const DevBio = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #999;
  margin-top: 5px;
`;

export const Buttons = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

export const Empty = styled.div`
  font-size: 32px;
  color: #999;
  font-weight: bold;
  margin-top: 300px;
`;

export const Button = styled.button`
  height: 50px;
  box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;

  :hover img {
    transform: translateY(-5px);
    transition: all 0.2s;
    opacity: 0.9;
  }
`;

export const MatchContainer = styled.div`
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
`;
export const MatchAvatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #fff;
  margin: 30px 0;
`;

export const MatchName = styled.strong`
  font-size: 32px;
  color: #fff;
`;

export const MatchBio = styled.p`
  margin-top: 10px;
  font-size: 20px;
  line-height: 30px;
  max-width: 400px;
  color: rgba(255, 255, 255, 0.8);
`;

export const MatchButton = styled.button`
  border: 0;
  background: none;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  margin-top: 30px;
  cursor: pointer;
`;
