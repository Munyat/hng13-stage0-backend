// index.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// GET /me endpoint
app.get("/me", async (req, res) => {
  try {
    // Fetch a random cat fact
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000, // 5 seconds timeout
    });

    const catFact = response.data.fact;

    // Build response object
    const result = {
      status: "success",
      user: {
        email: "briankipkiruimunyat@gmail.com",
        name: "Brian Kipkirui Cheruiyot",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    // Fallback response
    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact. Please try again later.",
      timestamp: new Date().toISOString(),
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
