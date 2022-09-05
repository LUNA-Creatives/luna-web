const { api, data, http } = require('@serverless/cloud');
http.on(404, 'index.html');

api.get('/api/team-member', async (req, res) => {
  let result = await data.get('teamMember:*', true);
  res.send(result.items);
});

api.get('/api/icons', async (req, res) => {
  let result = await data.get('icon:*', true);
  res.send(result.items);
});

api.get('/api/*', (req, res) => {
  console.log(`404 - api`);
  res.status(404).send({ error: 'not found' });
});
