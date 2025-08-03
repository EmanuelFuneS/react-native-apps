import { jest } from "@jest/globals";

export const mockExpoLocation = {
  requestForegroundPermissionsAsync: jest.fn(() =>
    Promise.resolve({ status: "granted" })
  ),
  getCurrentPositionAsync: jest.fn(() =>
    Promise.resolve({
      coords: { latitude: -31.4201, longitude: -64.1888 },
    })
  ),
  Accuracy: { High: 1, Balanced: 2, Low: 3 },
};

export const mockAsyncStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

export const createLocationMock = (lat: number, lon: number) => ({
  ...mockExpoLocation,
  getCurrentPositionAsync: jest.fn(() =>
    Promise.resolve({
      coords: { latitude: lat, longitude: lon },
    })
  ),
});
