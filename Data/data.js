
function Square(color,id,piece)
{
    return {color,id,piece} //topic enhance object literals

}
//64 boxes create with color white black  and box id's
function SquareRow(rowId){
    const squareRow=[]
    const abcd=["a","b","c","d","e","f","g","h"];

    if(rowId%2==0){//for every row  start colors(vertical top to bottom)
        abcd.forEach((element,index) => {//element is from abcd array
            if(index%2==0) //in every row colors (horizontal)
                squareRow.push(Square("white",element+rowId,null));
            else
                squareRow.push(Square("black",element+rowId,null));

        });
    }
    else{
        abcd.forEach((element,index) => {
            if(index%2==0)
                squareRow.push(Square("black",element+rowId,null));
            else
                squareRow.push(Square("white",element+rowId,null));

        });

    }
    
    return squareRow;
}

//initial CHESS BOARD REPRESENTATION 
function initGame()
{
    //multidimensional array
    return [
        SquareRow(8),
        SquareRow(7),
        SquareRow(6),
        SquareRow(5),
        SquareRow(4),
        SquareRow(3),
        SquareRow(2),
        SquareRow(1)
    ]

}
export {initGame};