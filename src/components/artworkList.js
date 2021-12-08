import React from "react";
import { connect } from 'react-redux';

const ArtworkList = (props) => {
    return (
        <div>
            <h2>Featured Work:</h2>
            
        </div>
    );
}

const mapStateToProps = state => {
    return ({
        artworks: state.artworks,
        isFetching: state.isFetching,
        error: state.error
    })
}

export default connect(mapStateToProps)(ArtworkList);