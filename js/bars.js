(() => {
  // <stdin>
  document.querySelectorAll("table").forEach((table) => {
    const element = document.createElement("div");
    table.parentElement.appendChild(element);
    element.appendChild(table);
    new SimpleBar(element, { autoHide: true });
  });
})();
