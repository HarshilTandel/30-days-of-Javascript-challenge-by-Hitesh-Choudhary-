//Task-8

const url = 'https://api.example.com/data'; 

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(`Data Received:`, data);
  })
  .catch(error => {
    console.error(`There was a problem with the fetch operation: ${error}`);
  });

  //Task-9

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(`Data Received:`, data);
    } catch (error) {
      console.error(`There was a problem with the fetch operation: ${error}`);
    }
  }
  
  fetchData(url);
  