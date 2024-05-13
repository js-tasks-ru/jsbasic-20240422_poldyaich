function makeDiagonalRed(table) {
  let rowCount = table.rows.length;
  let colCount = table.rows[0].cells.length;
  for (let i = 0; i < Math.min(rowCount, colCount); i++) {
    let cell = table.rows[i].cells[i];
    cell.style.backgroundColor = "red";
  }
}
