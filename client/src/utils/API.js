import axios from "axios";

export default {
  queryNYT: function (query) {
    return axios.get('/query', { params: query });
  },

  getSaved: function () {
    return axios.get('/api/saved');
  },

  deleteArticle: function (id) {
    return axios.delete('/api/saved/' + id)
  },

  saveArticle: function (article) {
    return axios.post('/api/saved', article)
  }
};
//Need to add in object filter to remove spaces and other nonsense
