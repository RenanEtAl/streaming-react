import React, { Component } from "react";
import Modal from "../../modal/Modal.component";
import { Link } from "react-router-dom";
import {
  fetchStream,
  deleteStream
} from "../../../redux/stream/stream.actions";
import { connect } from "react-redux";
import history from "../../../history";

class StreamDelete extends Component {
  componentDidMount() {
    //console.log('stream delete =>', this.props)
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button purple"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Do you want delete this stream?";
    }
    return `Do you want to delete the "${this.props.stream.title}" stream?`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
