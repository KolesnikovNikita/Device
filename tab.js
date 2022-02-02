function initTabs() {
  function switchTab(newIndex) {
    tabPanels.forEach(function (tabPanel, index) {
      tabPanel.hidden = !(index === newIndex);
    });
  }

  const tabItems = document.querySelectorAll(".tab-item");
  const tabPanels = document.querySelectorAll(".tab-panel");

  switchTab(0);

  tabItems.forEach(function (tabItem, index) {
    tabItem.addEventListener("click", function (event) {
      event.preventDefault();

      switchTab(index);
    });
  });
}

initTabs();
