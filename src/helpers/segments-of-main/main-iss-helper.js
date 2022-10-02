import { ISS } from "../../class/structural/iss";
import { ThirdDimensionVector } from "../../class/types/third-dimension-vector";
import { ISSEnum } from "../../data/iss/iss-enum";

/**
 * It loads all the parts of the ISS model into the scene
 * @param scene - The scene that the ISS will be added to.
 * @returns ISS object
 */
export const MainISSHelper = (scene) => {
  var iss = new ISS();

  const scale = 0.002;
  const startVectorPosition = new ThirdDimensionVector(0, 100, 0);

  iss.loadPartOfModel(
    scene,
    ISSEnum.arrayport1,
    scale,
    startVectorPosition,
    "arrayport1"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.arrayport2,
    scale,
    startVectorPosition,
    "arrayport2"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.arraystar1,
    scale,
    startVectorPosition,
    "arraystar1"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.arraystar2,
    scale,
    startVectorPosition,
    "arraystar2"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.columbus,
    scale,
    startVectorPosition,
    "columbus"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.destiny_USA,
    scale,
    startVectorPosition,
    "destiny_USA"
  );
  iss.loadPartOfModel(scene, ISSEnum.ELC, scale, startVectorPosition, "ELC");
  iss.loadPartOfModel(scene, ISSEnum.ELC2, scale, startVectorPosition, "ELC2");
  iss.loadPartOfModel(
    scene,
    ISSEnum.frame,
    scale,
    startVectorPosition,
    "frame"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.harmony_mod,
    scale,
    startVectorPosition,
    "harmony_mod"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum["IDA-2"],
    scale,
    startVectorPosition,
    "IDA-2"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.idkman,
    scale,
    startVectorPosition,
    "idkman"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.isscomine_idk,
    scale,
    startVectorPosition,
    "isscomine_idk"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.jem_elm_ps,
    scale,
    startVectorPosition,
    "jem_elm_ps"
  );
  iss.loadPartOfModel(scene, ISSEnum.JEME, scale, startVectorPosition, "JEME");
  iss.loadPartOfModel(
    scene,
    ISSEnum.Kibo_JEM,
    scale,
    startVectorPosition,
    "Kibo_JEM"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.Nauka_LAB,
    scale,
    startVectorPosition,
    "Nauka_LAB"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.P1truss_segment,
    scale,
    startVectorPosition,
    "P1truss_segment"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum["PMA-2"],
    scale,
    startVectorPosition,
    "PMA-2"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.S1truss_segment,
    scale,
    startVectorPosition,
    "S1truss_segment"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.unity_node,
    scale,
    startVectorPosition,
    "unity_node"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.unity_node1,
    scale,
    startVectorPosition,
    "unity_node1"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.zarya,
    scale,
    startVectorPosition,
    "zarya"
  );
  iss.loadPartOfModel(
    scene,
    ISSEnum.zvezda,
    scale,
    startVectorPosition,
    "zvezda"
  );

  return iss;
};
