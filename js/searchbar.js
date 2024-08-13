function search() {
    // Get the value from the input element
    var searchTerm = document.getElementById('search').value;

    // Perform some processing or logic based on the search term
    // For example, you can use an if-else statement or a switch statement

    // Simulate a simple example by checking for specific search terms
    if (searchTerm === 'butterfly') {
      document.getElementById('output').innerHTML = 'Search term matched: butterfly';
    } else if (searchTerm === 'larvae') {
      document.getElementById('output').innerHTML = 'Search term matched: larvae';
    } else if (searchTerm === 'eggs') {
      document.getElementById('output').innerHTML = 'Search term matched: eggs';
    } else if (searchTerm === 'pupae') {
      document.getElementById('output').innerHTML = 'Search term matched: pupae';
    } else {
      document.getElementById('output').innerHTML = 'No matching result for the search term: ' + searchTerm;
    }
  }
