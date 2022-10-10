//input.value

//const form = document.querySelector("form");
//let Input = document.querySelector('input[type="text]');

let List = document.getElementById("list");

/*Input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    console.log(e.target.value);
  }
});*/

//Pour trouver code touche aller sur hextobinary.com

let input = document.querySelector("input");
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    List.textContent = "*" + e.target.value;
  }
});

List.addEventListener("click", (e) => {
  List.style.color = "green";
  //e.target.remove();
});
