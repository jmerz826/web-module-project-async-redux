import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import '../hidden.css';

const StyledDetails = styled.div`
    background-color:orangered;
    border-radius:16px;
    position:fixed;
    z-index:1;
    top:0;
    padding: 1%;
    width:60%;
    margin-left:20%;

    img{
        height:50vh;
        padding:2%;
        max-width:100%;
    }
`

const handleClose = (e) => {
    e.preventDefault();
    const modal = document.querySelector('#details-modal');
    modal.classList.add('hidden');
}

const Details = (props) => {
    const [selectedArtwork, setSelectedArtwork] = useState('');

    useEffect(() => {
        const x = props.artworks.find(el => el.id === props.detailsDisplayed);
        setSelectedArtwork(x);
    });

    return (
        <StyledDetails id='details-modal' className='hidden'>
            <h2>Details</h2>
            {selectedArtwork &&
                <div>
                <h3>Artwork: {selectedArtwork.title}</h3>
                <img src={`https://www.artic.edu/iiif/2/${selectedArtwork.image_id}/full/843,/0/default.jpg`} />
                <p>Artist: {selectedArtwork.artist_title} </p>
                <p>Place of Origin: {selectedArtwork.place_of_origin}</p>
                <p>Dates displayed: {selectedArtwork.date_start} - {selectedArtwork.date_end}</p>
                </div>
            }
            <button onClick={handleClose}>Close Window</button>
        </StyledDetails>
    );
}

const mapStateToProps = state => {
    return {
        detailsDisplayed: state.detailsDisplayed,
        artworks: state.artworks
    }
}

export default connect(mapStateToProps)(Details);