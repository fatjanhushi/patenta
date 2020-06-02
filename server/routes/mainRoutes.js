module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Fatjoni edhe 100!!');
  });
};
