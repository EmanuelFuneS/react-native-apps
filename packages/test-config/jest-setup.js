import "@testing-library/jest-native/extend-expect";

global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("expo-location", () => ({
  requestForegroundPermissionsAsync: jest.fn(() =>
    Promise.resolve({ status: "granted" })
  ),
  getCurrentPositionAsync: jest.fn(() =>
    Promise.resolve({
      coords: { latitude: -31.4201, longitude: -64.1888 },
    })
  ),
  Accuracy: { High: 1, Balanced: 2, Low: 3 },
}));
