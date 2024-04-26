/* 
read json file
        have a for loop reading each value
        decide what to record based on value
skills display
    write flexboxes with names/values of skills
*/
// Define the path to the JSON file
const jsonFilePath = 'mh-build1.json';

// Fetch the JSON file asynchronously
fetch(jsonFilePath)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(jsonData => {
    // Access and use the JSON data
    console.log(jsonData.weapon)
  })
  .catch(error => {
    console.error('Error fetching JSON file:', error);
  });
