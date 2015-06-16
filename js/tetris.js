var tetris = {

    // Combination of each shape
    shapes: [
        [],
		// Line
		[[[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
		 [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]]],		
		// L
		[[[0, 0, 0, 0], [1, 1, 1, 0], [1, 0, 0, 0], [0, 0, 0, 0]],
		 [[1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]],
		 [[0, 0, 1, 0], [1, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
		 [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0]]],
		// Reverse L
		[[[1, 0, 0, 0], [1, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
		 [[0, 1, 1, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]],
		 [[0, 0, 0, 0], [1, 1, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]],
		 [[0, 1, 0, 0], [0, 1, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0]]],
		// Z
		[[[0, 0, 0, 0], [1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0]],
		 [[0, 0, 1, 0], [0, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]],
		//Square
		[[[0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]]]],

    // Pre-load elements of the grid
    init: function () {
        var i, j, k;
        tetris.cells = [];
        for (i = 0; i < 20; ++i) {
            tetris.cells[i] = [];
            for (j = 0; j < 20; ++j) {
                k = String.fromCharCode(i + 97);
                tetris.cells[i][j] = $(['#', k, j + 1].join(''));
            }
        }
    },

    // Initialize to start the game
    start: function () {
        // Array which contains data of the grid
        tetris.grid = [
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
        $('#grid td[id]').addClass("shape");
        $(tetris.bound).keypress(tetris.key);
        tetris.next = tetris.newShape();
        tetris.shift();
        tetris.refresh();
        setInterval(this.moveDown, 1000);
    },

    // Define the action to be fired depending on key entry
    key: function (e) {
        switch (e.charCode || e.keyCode) {
            case 65: case 97: tetris.moveLeft(); break; // a
            case 68: case 100: tetris.moveRight(); break; // d            
            case 83: case 115: tetris.rotateRight(); break; // s
            case 87: case 119: tetris.rotateLeft(); break; // w
            case 88: case 120: tetris.moveDown(); break; // x    
            //default: alert('Please enter valid move!'); break;
        }
        return false;
    },

    // Generate an random shape
    newShape: function () {
        var r = Math.floor((Math.random() * 5) + 1);
        return parseInt(r, 10);
    },

    // Define then draw the next shape
    setNext: function () {
        var s;
        tetris.next = tetris.newShape();
        s = tetris.shapes[tetris.next][0];   
    },

    // The next shape becomes the current one; reset coordinates
    shift: function () {
        tetris.cur = tetris.next;        
        tetris.x0 = Math.floor((Math.random() * 17) + 1);
        tetris.x = tetris.x0;
        tetris.y = 0;
        tetris.y0 = tetris.y;
        tetris.r = tetris.r0 = 0;
        tetris.curShape = tetris.shapes[tetris.cur];
        if (tetris.isValidPosition(0, tetris.x, tetris.y)) {
            tetris.setNext();
            return true;
        }
        return false;
    },

    // Stop the game
    gameOver: function () {
        var i, j;
        for (i = 0; i < 20; ++i) {
            for (j = 0; j < 20; ++j) {
                tetris.cells[i][j].addClass("shape");
            }
            setTimeout(function () { }, 200);
        }
        alert('Game Over..!!');
        location.reload();
    },

    // Check overlays
    isValidPosition: function (r, x, y) {
        var i, j;
        for (i = 0; i < 4; ++i) {
            for (j = 0; j < 4; ++j) {
                if (tetris.curShape[r][j][i] && tetris.grid[y + j][x + i + 1]) {//&& tetris.grid[y + j]
                    return false;
                }
            }
        }
        return true;
    },

    // Move the current shape to the left
    moveLeft: function () {
        if (tetris.isValidPosition(tetris.r, tetris.x - 1, tetris.y + 1)) {
            --tetris.x;
            ++tetris.y;
            tetris.refresh();
        }
        //else {
        //    tetris.moveDown();
        //}
    },

    // Move the current shape to the right
    moveRight: function () {
        if (tetris.isValidPosition(tetris.r, tetris.x + 1, tetris.y + 1)) {
            ++tetris.x;
            ++tetris.y;
            tetris.refresh();
        }
        //else {
        //    tetris.moveDown();
        //}
    },

    // Rotate the current shape clockwise
    rotateRight: function () {
        var r = tetris.r == tetris.curShape.length - 1 ? 0 : tetris.r + 1;
        if (tetris.isValidPosition(r, tetris.x, tetris.y + 1)) {
            tetris.r0 = tetris.r;
            tetris.r = r;
            ++tetris.y;
            tetris.refresh();
        }
        //else {
        //    tetris.moveDown();
        //}
    },

    // Rotate the current shape anticlockwise
    rotateLeft: function () {
        var r = tetris.r == 0 ? tetris.curShape.length - 1 : tetris.r - 1;
        if (tetris.isValidPosition(r, tetris.x, tetris.y + 1)) {
            tetris.r0 = tetris.r;
            tetris.r = r;
            ++tetris.y;
            tetris.refresh();
        }
        //else {
        //    tetris.moveDown();
        //}
    },

    // Move down the current shape
    moveDown: function () {
        if (tetris.isValidPosition(tetris.r, tetris.x, tetris.y + 1)) {
            ++tetris.y;
            tetris.refresh();
        } else {
            tetris.touchDown();
        }
    },

    // The current shape touches down
    touchDown: function () {
        var i, j;
        // mark the grid
        for (i = 0; i < 4; ++i) {
            for (j = 0; j < 4; ++j) {
                if (tetris.curShape[tetris.r][j][i]) {  //&& tetris.grid[tetris.y + j]
                    tetris.grid[tetris.y + j][tetris.x + i + 1] = tetris.cur;
                }
            }
        }
        // try to continue
        if (tetris.shift()) {
            tetris.refresh();
        } else {
            tetris.gameOver();
        }
    },    

    // Draw the current shape
    draw: function (r, x, y, c) {
        var i, j;
        for (i = 0; i < 4; ++i) {
            for (j = 0; j < 4; ++j) {
                if (tetris.curShape[r][j][i]) {
                    if (c) {
                        tetris.cells[y + j][x + i].addClass("shape");
                    }
                    else {
                        tetris.cells[y + j][x + i].removeClass("shape");
                    }                    
                }
            }
        }
    },

    // Refresh the grid
    refresh: function () {
        // remove from the old position
        tetris.draw(tetris.r0, tetris.x0, tetris.y0, false);

        // draw to the next one
        tetris.draw(tetris.r, tetris.x, tetris.y, true);

        // reset coordinates
        tetris.x0 = tetris.x;
        tetris.y0 = tetris.y;
        tetris.r0 = tetris.r;        
    }
};

// Start the game
$(window).load(function () {
    tetris.init();
    tetris.start();
});