window.Webflow ||= [];
window.Webflow.push(() => {
  const init = () => {
    const tabLinks = document.querySelectorAll(".navbar_menu-dropdown .w-tab-link");
    tabLinks.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });
  };

  init();
  setTimeout(init, 100);
  setTimeout(init, 500);
});
