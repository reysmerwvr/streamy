import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal'
import history from '../../history'
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    const { fetchStream, match: { params: { id } } } = this.props;
    fetchStream(id);
  }

  renderActions() {
    const { deleteStream, match: { params: { id } } } = this.props;
    // React.Fragment could be replaced by <></>
    return (
      <React.Fragment>
        <button
          onClick={() => deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link 
          to="/"
          className="ui button"
        >
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if(!this.props.stream) {
      return "Are you want to delete this stream?";
    }

    return `Are you want to delete this stream with the title: ${this.props.stream.title}`;
  }
  
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, onwProps) => {
  return { stream: state.streams[onwProps.match.params.id] }
}

const mapDispatchToProps = {
  fetchStream, 
  deleteStream
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete)
