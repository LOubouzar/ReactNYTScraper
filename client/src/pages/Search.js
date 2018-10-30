import React, { Component } from "react";
import {SaveBtn} from "../components/Button/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import "./pages.css"

class Search extends Component {
  state = {
    searchQuery: "",
    startDate: "",
    endDate: "",
    results: []
  };

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.queryNYT(this.state.searchQuery)
    // console.log(this.state.searchQuery)
    .then(res => this.setState({results: res.data}))
    .catch(err => console.log(err))
  }

  saveArticle = article => {
    API.saveArticle({title: article.headline.main, url:article.web_url})
    .then(alert("Your Article has been saved!"))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Jumbotron>
            <h1>New York Times Article Historian</h1>
          </Jumbotron>
        <Container>
          {/* Search Query Container Row */}
          <Row>
            <Col size="md-12">
              <h3 className="title"><strong>Search</strong></h3>
              <form>
                <Input
                  value={this.state.searchQuery}
                  onChange={this.handleInputChange}
                  name="searchQuery"
                  placeholder="Search here for a topic ... "
                />
                <Input
                value={this.state.startDate}
                onChange={this.handleInputChange}
                name="startDate"
                placeholder="Beginning Date"
                />
                <Input
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="endDate"
                placeholder="Ending Date"
                />
                <FormBtn
                  disabled={!(this.state.searchQuery)}
                  onClick={this.handleFormSubmit}
                >Submit</FormBtn>
              </form>
            </Col>
          </Row>
            {/* Search Results Container Row */}
          <Row>
            <Col size='md-12'>
                <h3 className="title"><strong>Top Articles</strong></h3>
                <List>
                  
                  {/* {this.state.results.map(article => (
                    <ListItem key={article._id}>
                      <a href={article.web_url}>{article.headline.main}</a>
                      <SaveBtn onClick={() => this.saveArticle(article)} />
                    </ListItem>
                  ))} */}
                </List>
            </Col>
          </Row>
         </Container>
      </div>
  )}}

export default Search;
