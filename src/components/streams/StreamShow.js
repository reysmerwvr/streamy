import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

class StreamShow extends React.Component {
  componentDidMount() {
    const { fetchStream, match: { params: { id } } } = this.props;
    fetchStream(id);
  }

  render() {
    if(!this.props.stream) {
      return <div>Loading...</div>
    }
    const { stream: { title, description } } = this.props
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, onwProps) => {
  return { stream: state.streams[onwProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)
