const gridData = [
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1]
  ];
  

  const rows = [[1, 2, 3], [1, 1], [1, 1, 1], [1, 1], [1, 1, 1]];
  const cols = [[1, 2, 3], [1, 1], [1, 2, 3], [1, 1], [1, 2, 3]];
  
  const gridContainer = document.getElementById('gridContainer');
  const headerRows = document.getElementById('headerRows');
  const headerCols = document.getElementById('headerCols');
  const clickButton = document.getElementById('clickButton');
  const clickCountElement = document.getElementById('clickCount');
  let clickCount = 0;
  
  function initGrid() {
    // 初始化列头
    for (let i = 0; i < rows.length; i++) {
      const colHeader = document.createElement('div');
      colHeader.classList.add('header-cell');
      colHeader.style.display = 'grid';
      colHeader.style.gridTemplateRows = `repeat(${rows[i].length}, 1fr)`;
      for (let j = 0; j < rows[i].length; j++) {
        const cell = document.createElement('div');
        cell.textContent = rows[i][j];
        colHeader.appendChild(cell);
      }
      headerCols.appendChild(colHeader);
    }
  
    // 初始化行头
    for (let i = 0; i < cols.length; i++) {
      const rowHeader = document.createElement('div');
      rowHeader.classList.add('header-cell');
      rowHeader.style.display = 'grid';
      rowHeader.style.gridTemplateColumns = `repeat(${cols[i].length}, 1fr)`;
      for (let j = 0; j < cols[i].length; j++) {
        const cell = document.createElement('div');
        cell.textContent = cols[i][j];
        rowHeader.appendChild(cell);
      }
      headerRows.appendChild(rowHeader);
    }
  
    // 初始化网格
    for (let i = 0; i < gridData.length; i++) {
      for (let j = 0; j < gridData[i].length; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        if (gridData[i][j] === 1) {
          cell.classList.add('black');
        }
        cell.addEventListener('click', () => toggleCell(i, j));
        gridContainer.appendChild(cell);
      }
    }
  }
  
  function toggleCell(row, col) {
    gridData[row][col] = 1 - gridData[row][col];
    const cell = gridContainer.children[row * gridData.length + col];
    cell.classList.toggle('black');
    updateClickCount();
  }
  
  function updateClickCount() {
    clickCount++;
    clickCountElement.textContent = clickCount;
  }
  
  clickButton.addEventListener('click', () => updateClickCount());
  
  initGrid();
  