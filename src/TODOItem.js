import React, { Component } from "react";
class TODOOItem extends Component {
  constructor(props) {
    super(props);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  handleItemDelete() {
    const { index, deleteItem } = this.props;
    deleteItem(index);
    // this.props.deleteItem(this.props.index);
  }
  render() {
    const { content } = this.props;
    return <li onClick={this.handleItemDelete}>{content}</li>;
  }
}
export default TODOOItem;
