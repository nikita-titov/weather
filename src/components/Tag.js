import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { TagsLi, TagsI } from "../components/Style";

class Tag extends React.Component {
  render() {
    return (
      <TagsLi onClick={e => this.props.handleClickTag(e)}>
        <TagsI
          onClick={e => this.props.deleteTag(e)}
          data-city={this.props.text}
          className="fa fa-minus-circle"
        />
        <span>{this.props.text}</span>
      </TagsLi>
    );
  }
}

export default Tag;
