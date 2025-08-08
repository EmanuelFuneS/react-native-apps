import {
  createLocationMock,
  mockExpoLocation,
  renderHook,
  waitFor,
} from "@repo/test-config";
import useGeoLocation from "../../lib/hooks/useLocation";

jest.mock("expo-location", () => mockExpoLocation);

describe("useGeoLocation Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return location when successfully", async () => {
    const cordobaMock = createLocationMock(-31.4201, -64.1888);

    const { result } = renderHook(() => useGeoLocation());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toEqual({ code: 0, message: "" });
      expect(result.current.location).toEqual({
        latitude: -31.4201,
        longitude: -64.1888,
      });
    });
  });
});
