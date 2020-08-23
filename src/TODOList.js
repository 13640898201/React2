import React, { Component, Fragment } from "react";
import TODOItem from "./TODOItem";
import "./App.css";

class TODOList extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      list: ["hello react", "hello vue"],
      inputValue: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnclick = this.handleBtnclick.bind(this);
    this.handleItemclick = this.handleItemclick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // 从state中获取Props
    return null;
  }
  getSnapshotBeforeUpdate(nextProps, prevState) {} //与componentDidUpdate连用 在组件更新前，读取当前某个 DOM 元素的状态，并在 componentDidUpdate中进行相应的处理

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {}
  componentDidMount() {
    // 组件渲染后 ajax请求
  }
  componentWillUnmount() {}
  static getDerivedStateFromError() {} //错误处理
  componentDidCatch() {}

  handleBtnclick() {
    console.log(this.inputValue);
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: "",
    });
  }
  handleInputChange(e) {
    e.persist();
    console.log(e);
    this.setState({
      inputValue: e.target.value,
    });
  }
  handleItemclick(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }
  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }
  getTODOItem() {
    return this.state.list.map((item, index) => {
      return (
        <TODOItem
          content={item}
          key={index}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      );
    });
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button
            className="red"
            style={{ backgroundColor: "blue" }}
            onClick={this.handleBtnclick}
          >
            add
          </button>
        </div>

        <ul>{this.getTODOItem()}</ul>
      </Fragment>
    );
  }
}
export default TODOList;
