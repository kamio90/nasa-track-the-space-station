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
