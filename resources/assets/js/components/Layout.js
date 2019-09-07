import React from 'react';
import Drawer from "./Drawer";

class Layout extends React.Component {
  render() {
    const { project } = this.props;

    return (
      <div className="wrapper">
        <Drawer
          project={project}
        />

        <main className="main-content">
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout;
