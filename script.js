function selectedRow() {
  var cells = document.getElementsByClassName("bingo");

  // Loop through each cell
  for (var i = 0; i < cells.length; i++) {
    // Add a click event listener to the cell
    cells[i].addEventListener("click", function () {
      // Change the background color of the cell to red

      if (this.style.backgroundColor === "#e83609") {
        this.style.backgroundColor = "";
      } else {
        this.style.backgroundColor = "#e83609";
      }
    });
  }
}
selectedRow();

function selectedRowCounter() {
  var cellss = document.getElementsByClassName("bingo2");
  let counter = 0;
  // Loop through each cell
  for (var i = 0; i < cellss.length; i++) {
    // Add a click event listener to the cell
    cellss[i].addEventListener("click", function () {
      // Change the background color of the cell to red

      if (this.style.backgroundColor === "orange") {
        this.style.backgroundColor = "";
        counter--;
        lastCalled.innerHTML = counter;
        this.style.color = "";
      } else {
        this.style.backgroundColor = "orange";
        this.style.color = "white";
        counter++;
        lastCalled.innerHTML = counter;
      }
    });
  }

  // Get reference to table and cells
  const table = document.querySelector("#bingotable2");
  const cells = table.querySelectorAll("td");
  var insert = document.getElementById("showRecentId");
  var lastCalled = document.getElementById("showCounter");
  // Create empty array to store ids
  const idArray = [];

  // Add event listener to each cell
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const cellId = cell.getAttribute("id");
      if (cellId === idArray[idArray.length - 1]) {
        idArray.pop();
        console.log(idArray[idArray.length - 1]);
        insert.innerHTML = idArray[idArray.length - 1];
        showAlert();
      } else {
        idArray.push(cellId);
        insert.innerHTML = idArray[idArray.length - 1];
      }

      // console.log(idArray + "id");
    });
  });
}
selectedRowCounter();
// cells.forEach((cell) => {
//   cell.addEventListener("click", () => {
//     idArray.pop();
//     insert.innerHTML = idArray[idArray.length - 1];
//   });
// });
// document.getElementById("my-button").addEventListener("click", function() {
//   // create an array
//   var myArray = [1, 2, 3, 4, 5];

//   // remove the last element and assign it to a variable
//   var lastElement = myArray.pop();

//   // print the removed element and the updated array
//   console.log(lastElement); // outputs: 5
//   console.log(myArray);     // outputs: [1, 2, 3, 4]
// });

document.getElementById("reset-button").addEventListener("click", function () {
  location.reload();
});

function showAlert() {
  var result = confirm("YOU HAVE ALREADY CLICKED THIS NUMBER!!");
  if (result == true) {
    alert("PLEASE PROCEED!");
  } else {
    alert("You clicked Cancel!");
  }
}
