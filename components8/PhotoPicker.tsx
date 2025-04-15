import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const PhotoPicker: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Latar belakang lingkaran dengan warna F0F0F0 */}
      <View style={styles.backgroundCircle} />

      {/* Tombol dengan garis putus-putus */}
      <TouchableOpacity style={styles.photoButton}>
        <Text style={styles.buttonText}>Add{'\n'}Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  backgroundCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    position: 'absolute',
    zIndex: -1,
    top: 10,
  },
  photoButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#8D92A3',
    textAlign: 'center',
    lineHeight: 18,
  },
});

export default PhotoPicker;
