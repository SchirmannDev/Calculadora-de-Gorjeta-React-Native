import React, { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top: 30px;
`;

const HeaderText = styled.Text`
  font-size: 25px;
`;

const Input = styled.TextInput`
  font-size: 18px;
  width: 90%;
  height: 40px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;

export default () => {
  const [bill, setBill] = useState("");

  return (
    <Container>
      <HeaderText>Calculador de Gorjeta</HeaderText>
      <Input
        placeholder="Qual o valor da sua conta?"
        placeholderTextColor="#f568"
        keyboardType="numeric"
        value={bill}
        onChangeText={(n) => setBill(n)}
      />
    </Container>
  );
};
