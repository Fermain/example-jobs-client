export async function getVenues() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);
  const data = await response.json();

  if (response.ok) {
    return data
  }
  
  throw new Error(data.message)
}