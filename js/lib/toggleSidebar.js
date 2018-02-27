const toggleSidebar = () => {
  const collapseContent = document.getElementById('sideBarContent')
  const collapsedMenuTotalPrice = document.getElementById('collapsedMenuTotalPrice')

  const collapseContentDisplay = window.getComputedStyle(collapseContent).display

  if(collapseContentDisplay === 'none') {
    collapseContent.classList.remove('hideOnMobile')
    collapseContent.classList.add('showOnMobile')
    collapsedMenuTotalPrice.classList.remove('showOnMobile')
    collapsedMenuTotalPrice.classList.add('hideOnMobile')
  }
  else {
    collapseContent.classList.remove('showOnMobile')
    collapseContent.classList.add('hideOnMobile')
    collapsedMenuTotalPrice.classList.remove('hideOnMobile')
    collapsedMenuTotalPrice.classList.add('showOnMobile')
  }
}