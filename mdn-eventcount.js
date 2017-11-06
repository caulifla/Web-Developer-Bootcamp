var count = 0;
var tables = document.querySelectorAll(".standard-table");

for(var i=0;i < tables.length;i++){
	count = count + tables[i].getElementsByTagName("tbody")[0].childElementCount;
}