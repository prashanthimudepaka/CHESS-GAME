const ROOT_DIV = document.getElementById("root");

function initGameRender(data) {
    data.forEach((row) => {
        const rowE1 = document.createElement("div");
        rowE1.classList.add("squareRow"); // Set the class for the row

        row.forEach((square) => {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add(square.color, "square"); // Add square color and class
            rowE1.appendChild(squareDiv); // Append square to the row
        });

        ROOT_DIV.appendChild(rowE1); // Append row to the root
    });
}

export { initGameRender };
