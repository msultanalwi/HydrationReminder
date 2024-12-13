import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const TotalDrinkWater = () => {
  const [jumlahAirDiminum, setJumlahAirDiminum] = useState(0);

  const tambahAir = () => {
    setJumlahAirDiminum(jumlahAirDiminum + 1);
  };

  const resetAir = () => {
    setJumlahAirDiminum(0);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>
        Jumlah Air Diminum : {jumlahAirDiminum} gelas
      </Text>
      <Button title="Tambah 1 gelas" onPress={tambahAir} />
      <View style={{marginTop: 10}}>
        <Button title="Reset" onPress={resetAir} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default TotalDrinkWater;
