console.log('Here are all the available people:', people);

$(document).ready(onReady);

// random number generator
function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

// sets the max of random number generator to the length of the people array
let randomIndex = randomNumber(0, people.length - 1);
// uses randomIndex to give a random name
let randomName = people[randomIndex].name;

function onReady() {
  // testing
  console.log('Random Index:', randomIndex);
  console.log('Random name:', randomName);

  // target the h3 to insert a random name
  $('#randomName').append(`Find ${randomName}`);

  // loops through the people array and displays everyone's picture on the DOM
  for (i = 0; i < people.length; i++) {
    $('#pictures').append(`
      <div>
        <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of Patrick" class="prof-pic" data-number="${i}">
      </div>`);
  }

  // listens for a click on a picture
  $(document).on('click', '.prof-pic', isThatTheRightPerson);
}

function isThatTheRightPerson() {
  // this assigns every picture a data-number of their index
  let $clickIndex = $(this).data('number');
  // checking if the pictures data-number matches the random index
  if ($clickIndex === randomIndex) {
    // positive match
    // set all of the negative matches back to a transparent border
    $('.prof-pic').css('border', '5px solid transparent');
    // correct match gets a green border
    $(this).css('border', '5px solid green');
    // alert('You got the right person!');
    // green border will go back to transparent after 2 seconds
    setTimeout(function () {
      $('.prof-pic').css('border', '5px solid transparent');
    }, 2000);
    // return a new, random name at the top of the DOM
    newName();
  } else {
    //alert('Nope! Try Again');
    // turn the negative match picture border to red
    $(this).css('border', '5px solid red');
  }
}

function newName() {
  // empty out the old name after a successful guess
  $('#randomName').empty();
  // new random index and random name
  randomIndex = randomNumber(0, people.length - 1);
  let randomName = people[randomIndex].name;
  console.log('random index', randomIndex);
  // append the new random name
  $('#randomName').append(`Find ${randomName}`);
}
