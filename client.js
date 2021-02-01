console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
  // random number generator
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }
  // sets the max of random number generator to the length of the people array
  let randomIndex = randomNumber(0, people.length - 1);
  console.log('Random Number:', randomIndex);
  // target the h3 to insert a random name
  $('#randomName').append(`Find ${people[randomIndex].name}`);

  // loops through the people array and displays everyone's picture on the DOM
  for (person of people) {
    $('#pictures').append(`
      <div>
        <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of Patrick" class="prof-pic">
      </div>`);
  }

  $(document).on('click', 'prof-pic', isThatTheRightPerson)

}

function isThatTheRightPerson {
  $()
}