const testCo2cal = require("./co2calculator");

describe("Test testCo2cal", () => {
  it("should return 2.6kg", () => {
    expect(testCo2cal("medium-diesel-car", 15, "km")).toBe(
      "Your trip caused 2.6kg of CO2-equivalent"
    );
  });
  it("should return 507.7", () => {
    expect(testCo2cal("large-petrol-car", 1800.5)).toBe(
      "Your trip caused 507.7kg of CO2-equivalent"
    ); //default unit-in-output in kg
  });
  it("should return 87g", () => {
    expect(testCo2cal("train", 14500, "m")).toBe(
      "Your trip caused 87g of CO2-equivalent"
    ); // unit-of-distance in meter
  });
  it("should return 2.6kg", () => {
    expect(testCo2cal("medium-diesel-car", 15, "km")).toBe(
      "Your trip caused 2.6kg of CO2-equivalent"
    );
  });
});
