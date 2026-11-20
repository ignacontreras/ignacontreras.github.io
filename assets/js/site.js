/**
 * Theme toggle (day / night), remembered per browser.
 */
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      var next = (root.getAttribute("data-theme") || "light") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }
})();

/**
 * Menu overlay: open/close, Escape to close, focus handling, scroll lock.
 * Visiting any page with #menu in the URL opens it.
 */
(function () {
  var overlay = document.getElementById("menu-overlay");
  var openBtn = document.getElementById("menu-open");
  var closeBtn = document.getElementById("menu-close");
  if (!overlay || !openBtn || !closeBtn) return;

  function setOpen(open) {
    overlay.classList.toggle("is-open", open);
    overlay.setAttribute("aria-hidden", open ? "false" : "true");
    openBtn.setAttribute("aria-expanded", open ? "true" : "false");
    document.documentElement.classList.toggle("menu-lock", open);
    if (open) {
      closeBtn.focus();
    } else {
      openBtn.focus();
    }
  }

  openBtn.addEventListener("click", function () {
    setOpen(true);
  });
  closeBtn.addEventListener("click", function () {
    setOpen(false);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      setOpen(false);
    }
  });
  overlay.querySelectorAll("[data-menu-link]").forEach(function (link) {
    link.addEventListener("click", function () {
      overlay.classList.remove("is-open");
      document.documentElement.classList.remove("menu-lock");
    });
  });
  if (location.hash === "#menu") setOpen(true);
})();

/**
 * Top bar gains a solid backing once the page scrolls.
 */
(function () {
  var bar = document.getElementById("topbar");
  if (!bar) return;
  function update() {
    bar.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  update();
  window.addEventListener("scroll", update, { passive: true });
})();
