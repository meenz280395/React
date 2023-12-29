/**
 * Creating element in responsibility of React
 * but creating a root where this element will be
 * rendered is responsibility of the ReactDOM.
 */
const heading = React.createElement(
  "h1",
  { id: "heading", xyx: "abc" },
  "Hello world from React"
);
console.log(heading); //this will create a Javascript object, ie: heading is an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
//this method will be responsible to take the object, convert it into h1 tag and put it up in the browser.

//Nested HTMLs
/**
 *  <div id="parent">
      <div id="child">
        <h1>I'm in an H1 tag</h1>
      </div>
    </div>
*/
const nestedHTML = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an H1 tag")
  )
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(nestedHTML);

/**
 *  <div id="parent">
      <div id="child">
        <h1>I'm in an H1 tag</h1>
        <h3>I'm in an H3 tag</h3>
      </div>
    </div>
*/

const root3 = ReactDOM.createRoot(document.getElementById("root3"));

const nestedSiblingHTML = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h3", {}, "I'm an H3 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h3", {}, "I'm an H3 tag"),
  ]),
]);

root3.render(nestedSiblingHTML);
