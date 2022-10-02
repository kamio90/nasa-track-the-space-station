import { earth } from "../../data/planets/earth";
import { jupiter } from "../../data/planets/jupiter";
import { mars } from "../../data/planets/mars";
import { mercury } from "../../data/planets/mercury";
import { neptune } from "../../data/planets/neptun";
import { saturn } from "../../data/planets/saturn";
import { uranus } from "../../data/planets/uranus";
import { venus } from "../../data/planets/venus";

/**
 * It updates the position of the planets based on the timer value
 * @param mercury_timer - The timer for the planet Mercury.
 * @param venus_timer - This is the timer for the planet Venus.
 * @param earth_timer - The timer for the earth's orbit.
 * @param mars_timer - This is the timer for the planet Mars.
 * @param jupiter_timer - The timer for the planet's orbit.
 * @param saturn_timer - This is the timer for Saturn's orbit.
 * @param uranus_timer - The timer for the planet Uranus.
 * @param neptune_timer - The timer for the neptune planet.
 */
export const MainPlanetsMoveHelper = (
  mercury_timer,
  venus_timer,
  earth_timer,
  mars_timer,
  jupiter_timer,
  saturn_timer,
  uranus_timer,
  neptune_timer
) => {
  if (mercury.mesh != undefined) {
    mercury.mesh.position.x = 50 * Math.cos(mercury_timer);
    mercury.mesh.position.z = 50 * Math.sin(mercury_timer);
    mercury.updatePlanetPosition();
  }

  if (venus.mesh != undefined) {
    venus.mesh.position.x = 100 * Math.cos(venus_timer);
    venus.mesh.position.z = 100 * Math.sin(venus_timer);
    venus.updatePlanetPosition();
  }

  if (earth.mesh != undefined) {
    earth.mesh.position.x = 150 * Math.cos(earth_timer);
    earth.mesh.position.z = 150 * Math.sin(earth_timer);
    earth.updatePlanetPosition();
  }

  if (mars.mesh != undefined) {
    mars.mesh.position.x = 200 * Math.cos(mars_timer);
    mars.mesh.position.z = 200 * Math.sin(mars_timer);
    mars.updatePlanetPosition();
  }

  if (jupiter.mesh != undefined) {
    jupiter.mesh.position.x = 250 * Math.cos(jupiter_timer);
    jupiter.mesh.position.z = 250 * Math.sin(jupiter_timer);
    jupiter.updatePlanetPosition();
  }

  if (saturn.mesh != undefined) {
    saturn.mesh.position.x = 300 * Math.cos(saturn_timer);
    saturn.mesh.position.z = 300 * Math.sin(saturn_timer);
    saturn.updatePlanetPosition();
  }

  if (uranus.mesh != undefined) {
    uranus.mesh.position.x = 350 * Math.cos(uranus_timer);
    uranus.mesh.position.z = 350 * Math.sin(uranus_timer);
    uranus.updatePlanetPosition();
  }

  if (neptune.mesh != undefined) {
    neptune.mesh.position.x = 400 * Math.cos(neptune_timer);
    neptune.mesh.position.z = 400 * Math.sin(neptune_timer);
    neptune.updatePlanetPosition();
  }
};
