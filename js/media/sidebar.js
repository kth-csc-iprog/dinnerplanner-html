var SideBar = function(container){

var collapse = container.find('#sidebarCollapse');
var sidebar = container.find('#sidebar');
collapse.click(function(){
	sidebar.toggleClass('active');
});
}