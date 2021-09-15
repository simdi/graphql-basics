import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('Up and running with graphql');
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));