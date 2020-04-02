import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../redux/stream/stream.actions";
import { Link } from "react-router-dom";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button purple">
            Edit
          </Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/create" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />

          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <hr/>
            <div className="description">{stream.description}</div>
            {this.renderAdmin(stream)}
          </div>
        </div>
      );
    });
  }
  render() {
    //console.log(this.props.streams);
    if (!this.props.streams) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>Live Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
