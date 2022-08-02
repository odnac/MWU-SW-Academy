export default function Breadcrumb({ $target, initialState, onClick }) {
  const $breadcrumb = document.createElement("nav");
  $breadcrumb.className = "Breadcrumb";
  $target.appendChild($breadcrumb);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $breadcrumb.innerHTML = `
            <div class="Breadcrumb_item">Root</div>
            ${this.state
              .map(
                ({ id, name }) => `
            <div class="Breadcrumb_item" data-id="${id}">${name}</div>
            `
              )
              .join("")}
        `;
  };
  this.render();

  $breadcrumb.addEventListener("click", (e) => {
    const $breadcrumbItem = e.target.closest(".Breadcrumb_item");

    const { id } = $breadcrumbItem.dataset;
    onClick(id);
  });
}
