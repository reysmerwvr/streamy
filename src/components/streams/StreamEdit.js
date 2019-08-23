import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = () => {
    return <div>StreamEdit</div>;
}

const mapStateToProps = (state, onwProps) => {
    return { stream: state.streams[onwProps.match.params.id] };
}

export default connect(mapStateToProps)(StreamEdit);
