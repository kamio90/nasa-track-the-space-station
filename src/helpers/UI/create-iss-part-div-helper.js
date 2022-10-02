const target = document.querySelector(".down-panel-container");
export const CreateISSPartDivHelper = (name) => {
  const markup = `
    <p class="show-case-information">${name}</p>
  `;

  ClearISSPartDivHelper();
  target.innerHTML = markup;
};

export const ClearISSPartDivHelper = () => {
  if (target.childNodes) {
    target.innerHTML = "";
  }
};
