document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()
  

  //Conditionals go here
  if (day==='tuesday'||day==='thursday') {
    let message = "It is a class day!"
    document.querySelector('#placeToSee').innerText = message
  }
  else if (day==='saturday'||day==='sunday') {
    message = "It is the weekend!"
    document.querySelector('#placeToSee').innerText = message
  }
  else {
    message = "It's BORING!"
    document.querySelector('#placeToSee').innerText = message
  }


}
