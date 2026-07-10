(function () {
  var storageKey = "ovteleport-reader-mode";
  var enabled = false;

  function applyState(button) {
    document.body.classList.toggle("ov-reader-mode", enabled);
    if (button) {
      button.setAttribute("aria-pressed", enabled ? "true" : "false");
      button.querySelector(".ov-reader-toggle__label").textContent = enabled ? "Thoát chế độ đọc" : "Chế độ đọc";
      button.querySelector(".ov-reader-toggle__icon").textContent = enabled ? "↙" : "↗";
    }
  }

  function createButton() {
    var existing = document.querySelector(".ov-reader-toggle");
    if (existing) {
      applyState(existing);
      return existing;
    }

    var button = document.createElement("button");
    button.type = "button";
    button.className = "ov-reader-toggle";
    button.setAttribute("aria-label", "Bật hoặc tắt chế độ đọc");
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = '<span class="ov-reader-toggle__icon" aria-hidden="true">↗</span><span class="ov-reader-toggle__label">Chế độ đọc</span>';
    button.addEventListener("click", function () {
      enabled = !enabled;
      localStorage.setItem(storageKey, enabled ? "1" : "0");
      applyState(button);
    });
    document.body.appendChild(button);
    applyState(button);
    return button;
  }

  function init() {
    enabled = localStorage.getItem(storageKey) === "1";
    createButton();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(function () {
      createButton();
    });
  }
})();
