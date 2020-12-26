const yargs = require("yargs");

const co2calculator = (transMeth, distance, unitOfDistanced) => {
  let output = yargs.argv.output;
  const tm = {
    "small-diesel-car": 142,
    "small-petrol-car": 154,
    "small-plugin-hybrid-car": 73,
    "small-electric-car": 50,
    "medium-diesel-car": 171,
    "medium-petrol-car": 192,
    "medium-plugin-hybrid-car": 110,
    "medium-electric-car": 58,
    "large-diesel-car": 209,
    "large-petrol-car": 282,
    "large-plugin-hybrid-car": 126,
    "large-electric-car": 73,
    bus: 27,
    train: 6,
  };

  switch (transMeth) {
    case "small-diesel-car":
      if (unitOfDistanced === "m") {
        if (output === "kg") {
          return `Your trip caused ${(
            (tm["small-diesel-car"] * (distance / 1000)) /
            1000
          ).toFixed(1)}kg of CO2-equivalent`;
        } else {
          return `Your trip caused ${
            tm["small-diesel-car"] * (distance / 1000)
          }g of CO2-equivalent`;
        }
      } else {
        return `Your trip caused ${(
          (tm["small-diesel-car"] * distance) /
          1000
        ).toFixed(1)}kg of CO2-equivalent`;
      }
    case "small-petrol-car":
      if (unitOfDistanced === "m") {
        if (output === "kg") {
          return `Your trip caused ${(
            (tm["small-petrol-car"] * (distance / 1000)) /
            1000
          ).toFixed(1)}kg of CO2-equivalent`;
        } else {
          return `Your trip caused ${
            tm["small-petrol-car"] * (distance / 1000)
          }g of CO2-equivalent`;
        }
      } else {
        return `Your trip caused ${(
          (tm["small-petrol-car"] * distance) /
          1000
        ).toFixed(1)}kg of CO2-equivalent`;
      }
    case "small-plugin-hybrid-car":
      if (unitOfDistanced === "m") {
        if (output === "kg") {
          return `Your trip caused ${(
            (tm["small-plugin-hybrid-car"] * (distance / 1000)) /
            1000
          ).toFixed(1)}kg of CO2-equivalent`;
        } else {
          return `Your trip caused ${
            tm["small-plugin-hybrid-car"] * (distance / 1000)
          }g of CO2-equivalent`;
        }
      } else {
        return `Your trip caused ${(
          (tm["small-plugin-hybrid-car"] * distance) /
          1000
        ).toFixed(1)}kg of CO2-equivalent`;
      }
    case "small-electric-car":
      if (unitOfDistanced === "m") {
        if (output === "kg") {
          return `Your trip caused ${(
            (tm["small-electric-car"] * (distance / 1000)) /
            1000
          ).toFixed(1)}kg of CO2-equivalent`;
        } else {
          return `Your trip caused ${
            tm["small-electric-car"] * (distance / 1000)
          }g of CO2-equivalent`;
        }
      } else {
        return `Your trip caused ${(
          (tm["small-electric-car"] * distance) /
          1000
        ).toFixed(1)}kg of CO2-equivalent`;
      }
    case "medium-diesel-car":
      if (unitOfDistanced === "m") {
        if (output === "kg") {
          return `Your trip caused ${(
            (tm["medium-diesel-car"] * (distance / 1000)) /
            1000
          ).toFixed(1)}kg of CO2-equivalent`;
        } else {
          return `Your trip caused ${
            tm["medium-diesel-car"] * (distance / 1000)
          }g of CO2-equivalent`;
        }
      } else {
        return `Your trip caused ${(
          (tm["medium-diesel-car"] * distance) /
          1000
        ).toFixed(1)}kg of CO2-equivalent`;
      }
    case "medium-petrol-car":
      if (ud === "m") {
        if (output === "kg") {
          return `Your trip caused ${(
            (tm["medium-petrol-car"] * (distance / 1000)) /
            1000
          ).toFixed(1)}kg of CO2-equivalent`;
        } else {
          return `Your trip caused ${
            tm["medium-petrol-car"] * (distance / 1000)
          }g of CO2-equivalent`;
        }
      } else {
        return `Your trip caused ${(
          (tm["medium-petrol-car"] * distance) /
          1000
        ).toFixed(1)}kg of CO2-equivalent`;
      }
    case "medium-plugin-hybrid-car":
      if (unitOfDistanced === "m") {
        if (output === "kg") {
          return `Your trip caused ${(
            (tm["medium-plugin-hybrid-car"] * (distance / 1000)) /
            1000
          ).toFixed(1)}kg of CO2-equivalent`;
        } else {
          return `Your trip caused ${
            tm["medium-plugin-hybrid-car"] * (distance / 1000)
          }g of CO2-equivalent`;
        }
      } else {
        return `Your trip caused ${(
          (tm["medium-plugin-hybrid-car"] * distance) /
          1000
        ).toFixed(1)}kg of CO2-equivalent`;
      }
    case "medium-electric-car":
      if (unitOfDistanced === "m") {
        if (output === "kg") {
          return `Your trip caused ${(
            (tm["medium-electric-car"] * (distance / 1000)) /
            1000
          ).toFixed(1)}kg of CO2-equivalent`;
        } else {
          return `Your trip caused ${
            tm["medium-electric-car"] * (distance / 1000)
          }g of CO2-equivalent`;
        }
      } else {
        return `Your trip caused ${(
          (tm["medium-electric-car"] * distance) /
          1000
        ).toFixed(1)}kg of CO2-equivalent`;
      }
    case "large-diesel-car":
      if (unitOfDistanced === "m") {
        if (output === "kg") {
          return `Your trip caused ${(
            (tm["large-diesel-car"] * (distance / 1000)) /
            1000
          ).toFixed(1)}kg of CO2-equivalent`;
        } else {
          return `Your trip caused ${
            tm["large-diesel-car"] * (distance / 1000)
          }g of CO2-equivalent`;
        }
      } else {
        return `Your trip caused ${(
          (tm["large-diesel-car"] * distance) /
          1000
        ).toFixed(1)}kg of CO2-equivalent`;
      }
    case "large-petrol-car":
      if (unitOfDistanced === "m") {
        if (output === "kg") {
          return `Your trip caused ${(
            (tm["large-petrol-car"] * (distance / 1000)) /
            1000
          ).toFixed(1)}kg of CO2-equivalent`;
        } else {
          return `Your trip caused ${
            tm["large-petrol-car"] * (distance / 1000)
          }g of CO2-equivalent`;
        }
      } else {
        return `Your trip caused ${(
          (tm["large-petrol-car"] * distance) /
          1000
        ).toFixed(1)}kg of CO2-equivalent`;
      }
    case "large-plugin-hybrid-car":
      if (unitOfDistanced === "m") {
        if (output === "kg") {
          return `Your trip caused ${(
            (tm["large-plugin-hybrid-car"] * (distance / 1000)) /
            1000
          ).toFixed(1)}kg of CO2-equivalent`;
        } else {
          return `Your trip caused ${
            tm["large-plugin-hybrid-car"] * (distance / 1000)
          }g of CO2-equivalent`;
        }
      } else {
        return `Your trip caused ${(
          (tm["large-plugin-hybrid-car"] * distance) /
          1000
        ).toFixed(1)}kg of CO2-equivalent`;
      }
    case "large-electric-car":
      if (unitOfDistanced === "m") {
        if (output === "kg") {
          return `Your trip caused ${(
            (tm["large-electric-car"] * (distance / 1000)) /
            1000
          ).toFixed(1)}kg of CO2-equivalent`;
        } else {
          return `Your trip caused ${
            tm["large-electric-car"] * (distance / 1000)
          }g of CO2-equivalent`;
        }
      } else {
        return `Your trip caused ${(
          (tm["large-electric-car"] * distance) /
          1000
        ).toFixed(1)}kg of CO2-equivalent`;
      }
    case "train":
      if (unitOfDistanced === "m") {
        if (output === "kg") {
          return `Your trip caused ${(
            (tm.train * (distance / 1000)) /
            1000
          ).toFixed(1)}kg of CO2-equivalent`;
        } else {
          return `Your trip caused ${
            tm.train * (distance / 1000)
          }g of CO2-equivalent`;
        }
      } else {
        return `Your trip caused ${((tm.train * distance) / 
          1000
        ).toFixed(1)
        }kg of CO2-equivalent`;
      }
    case "bus":
      if (unitOfDistanced === "m") {
        if (output === "kg") {
          return `Your trip caused ${(
            (tm.bus * (distance / 1000)) /
            1000
          ).toFixed(1)}kg of CO2-equivalent`;
        } else {
          return `Your trip caused ${
            tm.bus * (distance / 1000)
          }g of CO2-equivalent`;
        }
      } else {
        return `Your trip caused ${((tm.bus * distance) / 
          1000
        ).toFixed(1)
        }kg of CO2-equivalent`;
      }
    default:
      return "No transportation method in this name";
  }
};

module.exports = co2calculator;
