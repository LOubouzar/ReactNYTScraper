const router = require("express").Router();
const axios = require("axios");

const apiKey = "2ca1c31bdd9d4eb299b9fa3952ff6fef";

const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key='${apiKey}'&q=`

router.get("/query", (req, res) => {
  axios.get(queryURL + req.query.q)
    .then(results => res.json(results.data.response.docs))
    .catch(error => console.log(req.json(error)));
});
module.exports = router;


