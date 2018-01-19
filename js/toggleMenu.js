const toggleMenu = () => {
  const sidebarContent = document.getElementById('sidebarContent')
  const collapsedMenuCost = document.getElementById('collapsedMenuCost')

  const sidebarContentDisplay = window.getComputedStyle(sidebarContent).display

  if(sidebarContentDisplay === 'none') {
    sidebarContent.classList.remove('hiddenOnMobile')
    sidebarContent.classList.add('shownOnMobile')
    collapsedMenuCost.classList.remove('shownOnMobile')
    collapsedMenuCost.classList.add('hiddenOnMobile')
  }
  else {
    sidebarContent.classList.remove('shownOnMobile')
    sidebarContent.classList.add('hiddenOnMobile')
    collapsedMenuCost.classList.remove('hiddenOnMobile')
    collapsedMenuCost.classList.add('shownOnMobile')
  }

}