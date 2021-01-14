import React, { useState, useEffect } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageUploader(props) {
  const [image, setImage] = useState('https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDdfMTYw/MDAxNTgxMDg1NzUxMTUy.eV1iEw2gk2wt_YqPWe5F7SroOCkXJy2KFwmTDNzM0GQg.Z3Kd5MrDh07j86Vlb2OhAtcw0oVmGCMXtTDjoHyem9og.JPEG.7wayjeju/%EB%B0%B0%EC%9A%B0%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84_IMG7117.jpg?type=w800');

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('카메라 접근을 허용해주세요!');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }

    props.myCallback(result);
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.circle}/> }
      <View style={styles.button}>
        <Button title="이미지 업로드" onPress={pickImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center"
    },
    circle: {
      width: 150,
      height: 150,
      backgroundColor : "white",
      marginTop: 40,
      borderRadius: 75,
      borderWidth: 5,
      borderColor: "darkgrey"
    },
    button: {
      marginTop: 10
    }
});
