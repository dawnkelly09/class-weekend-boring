document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value
  

  //Conditionals go here
  if (day=='Tuesday'||day=='tuesday'||day=='Thursday'||day=='thursday') {
    let message = "It is a class day!"
    document.querySelector('#placeToSee').innerText = message
  }
  else if (day==='Saturday'||day=='saturday'||day=='Sunday'||day=='sunday') {
    message = "It is the weekend!"
    document.querySelector('#placeToSee').innerText = message
  }
  else {
    message = "It's BORING!"
    document.querySelector('#placeToSee').innerText = message
  }


}
