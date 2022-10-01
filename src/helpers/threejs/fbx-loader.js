import * as THREE from 'three';

/**
 * It returns a function that returns a promise that resolves with the result of the FBXLoader.load
 * function
 * @returns A function that takes a url and returns a promise that resolves to the loaded object.
 */
export const fbxLoader = url => {
  const fbxLoader = new THREE.FBXLoader();
  return url => new Promise(resolve => fbxLoader.load(url, resolve));
};