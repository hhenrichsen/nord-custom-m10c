(() => {
  // <stdin>
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    const dark = e.matches;
    if (!dark) {
      document.documentElement.classList.add("light-mode");
      localStorage.getItem("lm") == null && localStorage.setItem("lm", "true");
    } else {
      document.documentElement.classList.remove("light-mode");
      localStorage.getItem("lm") == null && localStorage.setItem("lm", "false");
    }
  });
  function init() {
    const override = localStorage.getItem("lm") == "true";
    const dark = override != null ? override : window.matchMedia("(prefers-color-scheme: dark)");
    if (dark) {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
    setTimeout(() => document.documentElement.classList.add("toggle"), 200);
  }
  function toggleDarkMode() {
    const classList = document.documentElement.classList;
    if (classList.contains("light-mode")) {
      localStorage.setItem("lm", "false");
      classList.remove("light-mode");
    } else {
      localStorage.setItem("lm", "true");
      classList.add("light-mode");
    }
  }
  document.querySelector("#dark-toggle").addEventListener("click", toggleDarkMode);
  init();
})();
