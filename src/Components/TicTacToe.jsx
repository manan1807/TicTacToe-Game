import React, { useState } from 'react'
import { Button,Alert} from 'react-bootstrap'
function Square(props) {
    return (

        <Button variant= "secondary"
        onClick={() => { props.onClick() }}>{props.value}</Button>
     
    )
}
function Board() {

    const [squarearr, setSquarearr] = useState([]); 
    const [XisNext, setXisNext] = useState("true");

    function handleClick(i) {
        const squares = squarearr.slice();


        //console.log(squares[i]);
        if (squares[i]) {
            return
        }
        squares[i] = XisNext ? 'X' : 'O';
        console.log(squares[i]);
        setSquarearr(squares);
        setXisNext(!XisNext);
    }

    function renderSquare(i) {
        return <Square
            onClick={() => handleClick(i)}
            value={squarearr[i]}
        />
    }

    function CalculateWinner(squarearr) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squarearr[a] && squarearr[a] === squarearr[b] && squarearr[a] === squarearr[c]) {
                return squarearr[a];
            }
        }
        return null;
    }
    const winner = CalculateWinner(squarearr);
    let status;
    if (winner) {
        status = "Winner" + winner;
    }
    else {
        status = "NextPlayer:" + (XisNext ? 'X' : 'O');
    }
    return (

        <div>
            <div>
    <Alert variant="dark" >{status}</Alert>
                </div>
            <div>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}



export default function game() {
    return (
        <div >
        <Board />
        </div>
    )
}
