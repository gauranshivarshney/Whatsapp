import * as SecureStore from 'expo-secure-store';

export const storage = {
  setItem: async (key, value) => await SecureStore.setItemAsync(key, value),
  getItem: async (key) => await SecureStore.getItemAsync(key), 
  removeItem: async (key) => await SecureStore.deleteItemAsync(key),
};