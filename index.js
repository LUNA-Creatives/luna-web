const { api, data, http } = require('@serverless/cloud');
http.on(404, 'index.html');

// Create GET route and return users
api.get('/api/team-member', async (req, res) => {
  // Get users from Serverless Data
  let result = await data.get('teamMember:*', true);
  // Return the results
  res.send(result.items);
});

// Catch all for missing API routes
api.get('/api/*', (req, res) => {
  console.log(`404 - api`);
  res.status(404).send({ error: 'not found' });
});
