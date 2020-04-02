import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../redux/stream/stream.actions";
import StreamForm from "./stream-form.component";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Broadcast</h3>
        <br />
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
