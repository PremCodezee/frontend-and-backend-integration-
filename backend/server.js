import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/amazon-series", (req, res) => {
  const series = [
    {
      id: 1,
      name: "The Grand Tour",
    },
    {
      id: 2,
      name: "The Marvelous Mrs. Maisel",
    },
    {
      id: 3,
      name: "Tom Clancy's Jack Ryan",
    },
    {
      id: 4,
      name: "The Expanse",
    },
    {
      id: 5,
      name: "The Wheel of Time",
    },
  ];
  res.send(series);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
