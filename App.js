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

const CalcButton = styled.Button`
  margin-top: 20px;
`;

const ResultArea = styled.View`
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultItemTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const ResultItem = styled.Text`
  font-size: 18px;
  margin-top: 30px;
`;

const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
`;

const PctItem = styled.TouchableOpacity`
  margin: 10px;
  padding: 20px;
  background-color: #01e9ff;
  border-radius: 25px;
`;

const PctItemText = styled.Text``;

export default () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState("10");

  const calc = () => {
    let nBill = parseFloat(bill);
    if (nBill) {
      setTip(nBill * 0.1);
    } else {
      alert("Digite o valor da compra!");
    }
  };

  return (
    <Container>
      <HeaderText>Calculador de Gorjeta</HeaderText>
      <Input
        placeholder="Qual o valor da sua conta?"
        placeholderTextColor="#68c2ff"
        keyboardType="numeric"
        value={bill}
        onChangeText={(n) => setBill(n)}
      />
      <PctArea>
        <PctItem>
          <PctItemText onPress={() => setPct(5)}>5%</PctItemText>
        </PctItem>
        <PctItem>
          <PctItemText>10%</PctItemText>
        </PctItem>
        <PctItem>
          <PctItemText>15%</PctItemText>
        </PctItem>
        <PctItem>
          <PctItemText>20%</PctItemText>
        </PctItem>
      </PctArea>

      <CalcButton title="Calcular" onPress={calc} />
      {tip > 0 && (
        <ResultArea>
          <ResultItemTitle>Valor da conta:</ResultItemTitle>
          <ResultItem>R${parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta:</ResultItemTitle>
          <ResultItem>R${tip.toFixed(2)}(10%)</ResultItem>

          <ResultItemTitle>Valor Total:</ResultItemTitle>
          <ResultItem>R${(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      )}
    </Container>
  );
};
