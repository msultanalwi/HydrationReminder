import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';

const TimeInterval = () => {
  const [intervalWaktu, setIntervalWaktu] = useState(60); // 1 mnt
  const [timerId, setTimerId] = useState(null);

  const mulaiPengingat = () => {
    if (timerId) {
      clearInterval(timerId);
    }
    const waktu = intervalWaktu * 60000;

    const id = setInterval(() => {
      Alert.alert('Pengingat!', 'Saatnya minum air!');
    }, waktu);
    setTimerId(id);
  };

  const ResetTimeSettle = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };
  useEffect(() => {
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [timerId]);

  return (
    <View style={styles.container}>
      <TextInput
        backgroundColor="white"
        style={styles.input}
        keyboardType="numeric"
        placeholder="Atur interval waktu (menit)"
        value={String(intervalWaktu)}
        onChangeText={text => setIntervalWaktu(Number(text))}
      />
      <Button title="Mulai Pengingat" onPress={mulaiPengingat} />
      <View style={{marginTop: 20}}>
        <Button title="Reset" onPress={ResetTimeSettle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default TimeInterval;
