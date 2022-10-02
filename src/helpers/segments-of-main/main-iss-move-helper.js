import * as THREE from "three";
import { earth } from "../../data/planets/earth";
/**
 * It moves the ISS around the Earth in a circle
 * @param iss - The ISS object
 * @param controls - the camera controls
 * @param iss_timer - This is a timer that we use to move the ISS around the Earth.
 */
export const MainISSMoveHelper = (iss, controls, iss_timer) => {
  if (iss.partsOfModel.length != 0) {
    controls.getControls().target = new THREE.Vector3(
      iss.partsOfModel[0].mesh.position.x,
      iss.partsOfModel[0].mesh.position.y,
      iss.partsOfModel[0].mesh.position.z
    );

    iss.move(
      new THREE.Vector3(
        earth.mesh.position.x + 20 * Math.cos(iss_timer),
        0,
        earth.mesh.position.z + 20 * Math.sin(iss_timer)
      )
    );
  }
};
