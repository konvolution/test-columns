import * as React from "react";
import { render } from "react-dom";
import * as Yoga from "yoga-layout";

import "./styles.css";

function testYoga() {
  let root: Yoga.YogaNode | undefined;

  try {
    root = Yoga.Node.create();
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create();
    root_child0.setHeight(10);

    root.insertChild(root_child0, 0);

    root.calculateLayout(
      Yoga.UNIT_UNDEFINED,
      Yoga.UNIT_UNDEFINED,
      Yoga.DIRECTION_LTR
    );

    return root.getComputedWidth();
  } finally {
    if (root !== undefined) {
      root.freeRecursive();
    }
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Yoga computer width: {testYoga()}</p>
      <div className="Scroller">
        <div className="Columns">
          <div className="Box" />
          <div className="Box" />
          <div className="Box" />
          <div className="Box" />
          <div className="Box" />
          <div className="Box" />
          <div className="Box" />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
