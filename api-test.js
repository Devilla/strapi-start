import axios from 'axios';

// Request API.
axios
  .get('http://localhost:1337/posts', {
    params: {
      _sort: 'createdAt:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
    }
  })
  .then(response => {
    // Handle success.
    console.log('Well done, here is the list of posts: ', response.data);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
