(function euler015(){
	       var  gridSize = 2;
           var grid = [];

            for (var i = 0; i < gridSize; i++) {
                grid[i, gridSize] = 1;
                grid[gridSize,i] = 1;
            }

           for (var i = gridSize - 1; i >= 0; i--) {
                for (var j = gridSize - 1; j >= 0; j--) {
                    grid[i, j] = grid[i+1, j] + grid[i, j+1];
            }
        }

            console.log(grid);
} ) ();