let arregloSelec


function createBoard(numRows, numCols) {
    const rows = []

    for (let i = 0; i < numRows; i++) {
        const casillas = []

        // crear casillas
        for (let j = 0; j < numCols; j++) {
            casillas.push({
                seMuestra : false,
                emoji : arrayEmojis.pop()
            });
        }

        rows.push(casillas)
    }

    return rows
}
function printBoard(board) {
    for (let row of board) {
        let rowStr = ""
        for (let casilla of row) {
            rowStr = rowStr + casilla + " "
        }
        console.log(rowStr)
    }
}

const casillaOnClick = (row, col) =>{
        vacio = []
            
        if(arregloSelec.length<3){
            const casilla = getValue(board,row,col)
            casilla.seMuestra = true;
            arregloSelec.push(casilla)
            renderizarBoard(board)
        }
        if(arregloSelec.length == 3){
            setTimeout(compararCasillas,100)
        }
    }
function emojis(){
    arrayEmojis=[
        "&#11093;",
        "&#11093;",
        "&#11093;",

        "&#10060;",
        "&#10060;",
        "&#10060;",

    ]
}
