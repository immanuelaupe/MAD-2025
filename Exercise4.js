import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      {/* Bagian Atas */}
      <View style={styles.topContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      {/* Bagian Tengah (Logo dan Teks) */}
      <View style={styles.centerContainer}>
        <Image
          style={styles.logo}
          source={require('./assets/logo-with-motto-3.png')}
        />
      </View>

      {/* Bagian Bawah */}
      <View style={styles.bottomContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-around', // Menggeser elemen ke kiri
    paddingRight: 90, // Sesuaikan nilai ini untuk mengatur seberapa jauh kotak ke kiri
  },
  bottomContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: 'blue',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  blackBox: {
    backgroundColor: 'black',
    height: 70,
    width: 70,
  },
  yellowBox: {
    backgroundColor: 'yellow',
    height: 70,
    width: 70,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350, // Ukuran diperbesar agar lebih jelas
    height: 100, // Sesuai dengan proporsi logo
    resizeMode: 'contain', // Agar logo tidak terpotong
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});
