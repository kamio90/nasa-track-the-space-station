/**
 * It takes a string and returns a string
 * @param text - The text that will be displayed in the div.
 * @returns A string of HTML that will be used to create a div element.
 */
export const CreateDivHelper = (text) => {
  return `
    <div class="nav-column-item">
      ${text}
    </div>
  `;
};
