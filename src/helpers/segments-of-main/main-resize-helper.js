/**
 * It adds a resize event listener to the window, and when the window is resized, it updates the
 * camera's aspect ratio
 * @param camera - The camera object that you want to resize.
 */
export const MainResizeHelper = (camera) => {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.getCamera().aspect = sizes.width / sizes.height;
    camera.getCamera().updateProjectionMatrix();
  });
};
