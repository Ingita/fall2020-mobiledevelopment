// Import Component
//// import Component from './Component.js';
const Component = require("./Component.js");

// Article is a child object of Component
class Article extends Component {

  // constructor (title,author,text) {
  //   // Send what it gets to its parent object
  //   this.title = title;
  //   this.author = author;
  //   this.text = text;
    
  // }

  constructor(props) {
    super(props);
  }
  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return (`
      <Article>
        <Title>Assignment 1</Title>
        <Author>Inga</Author>
        <Text>My assignment is done!</Text>
      </Article>
    `
    );
    
  }

}

module.exports = Article;
