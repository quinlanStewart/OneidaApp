
console.log("Starting server.js...");
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "client" directory
app.use(express.static(path.join(__dirname, 'client')));

// Example: Start server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
