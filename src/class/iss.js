import { SpaceObject } from "./space-object";

export class ISS extends SpaceObject {
  constructor(id, name, model, wordPosition, wordRotation, wordPath, webLinks,
    noradId, localTime, utc, latitude, longitude, speed, altitude) {
    super(id, name, model, wordPosition, wordRotation, wordPath,webLinks);
    this.noradId = noradId;
    this.localTime = localTime;
    this.utc = utc;
    this.latitude = latitude;
    this.longitude = longitude;
    this.speed = speed;
    this.altitude = altitude;
  }
  
  //Setters
  setNoradId(noradId) {
    this.noradId = noradId;
  }

  setLocalTime(localTime) {
    this.localTime = localTime;
  }

  setUTC(utc) {
    this.utc = utc;
  }

  setLatitude(latitude) {
    this.latitude = latitude;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  setAltitude(altitude) {
    this.altitude = altitude;
  }

  //Getters
  getNoradId() {
    return this.noradId;
  }

  getLocalTime() {
    return this.localTime;
  }

  getUTC() {
    return this.utc;
  }

  getLatitude() {
    return this.latitude;
  }

  getLongitude() {
    return this.longitude;
  }

  getSpeed() {
    return this.speed;
  }

  getAltitude() {
    return this.altitude;
  }
}