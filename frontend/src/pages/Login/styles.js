import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 48px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;
  ::placeholder {
    color: #999;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  border: 0;
  border-radius: 4px;
  height: 48px;
  background: #df4723;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  :hover {
    opacity: 0.9;
  }
`;
