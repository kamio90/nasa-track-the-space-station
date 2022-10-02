import { utcFormat } from "../helpers/format/utc-formatter";

export const API_DATA = [];

export const FetchData = () => {
  fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then((res) => res.json())
    .then((data) => getDataFromApi(data))
    .catch((err) => console.log(err));
};

const getDataFromApi = (data) => {
  const obj = {
    altitude: data.altitude,
    daynum: data.daynum,
    footprint: data.footprint,
    id: data.id,
    latitude: data.latitude,
    longitude: data.longitude,
    name: data.name,
    solar_lat: data.solar_lat,
    solar_lon: data.solar_lon,
    timestamp: utcFormat(data.timestamp),
    units: data.units,
    velocity: data.velocity,
    visibility: data.visibility,
  };

  API_DATA.push(obj);
  console.log(API_DATA);
};
