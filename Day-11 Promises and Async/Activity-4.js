// Task-6

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

  //Task-7

  const fetchDataAsync = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  fetchDataAsync();
  
