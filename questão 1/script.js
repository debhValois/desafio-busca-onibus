// SOLUÇÃO QUESTÃO 1 : FILTRAR ITENS DA TABELA DE CIDADES

document.getElementById("btn1").addEventListener("click", Search);

function Search() {

  var column = "1";
  var filter, table, tr, td, th, i;

  filter = document.getElementById("bo_city_handler_nameFilter");
  filter = filter.value.toUpperCase();
  table = document.getElementById("bo_city_handler_table");
  tr = table.getElementsByTagName("tr"); // lines
  th = table.getElementsByTagName("th"); // column header

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[column];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
