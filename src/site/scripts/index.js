console.log('Works 👍')

// Check if the serverless function is working
fetch('/api/hello')
  .then(response => response.json())
  .then(data => {
    console.log(data.message)
  })
