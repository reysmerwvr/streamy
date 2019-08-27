import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount () {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  }

  render () {
    const { stream } = this.props;
    if(!stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm 
          onSubmit={this.onSubmit}
          initialValues={_.pick(stream, 'title', 'description')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, onwProps) => {
  return { stream: state.streams[onwProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)
