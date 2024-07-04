import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value ) => {
  try {
    await AsyncStorage.setItem(key,value)
  }
  catch (error) {
    console.log("error this sucks!")
  }
}

export const getItemFor = async(key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value;
    }
  }
  catch (error) {
    console.log("error");
  }
}

