import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function App() {
  const openImagePickerAsync = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.cancelled) {
      // keep state
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.uploadContainer}
        onPress={() => {
          openImagePickerAsync();
        }}
      >
        <Icon
          name="camera"
          color="#617D96"
          size={24}
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadContainer: {
    width: 100,
    height: 100,
    borderColor: "#617D96",
    borderWidth: 2,
    margin: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderStyle: "dashed",
    borderRadius: 8,
  },
});
