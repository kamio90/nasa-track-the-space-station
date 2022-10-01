import * as THREE from 'three';

/**
 * It returns a function that takes a URL and returns a promise that resolves to a THREE.js texture
 * @returns A function that takes a url and returns a promise that resolves to a texture.
 */
export const loadTexture = url => {
  const loader = new THREE.TextureLoader();
  return url => new Promise(resolve => loader.load(url, resolve));
}