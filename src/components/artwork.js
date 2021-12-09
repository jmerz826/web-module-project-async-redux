import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { connect } from 'react-redux';
import { showDetails } from "../actions";
import Details from "./details";

const StyledArtwork = styled.div`
    width: 28%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:1%;
    img{
        width:80%;
        height:80%;
        padding:4%;
    }
    p{
        width:80%;
    }
    h4{
        text-align:center;
    }
    word-wrap: break-word;

    :hover{
        cursor:pointer;
    }
`



const Artwork = (props) => {
    const { artwork } = props;
    const handleShowDetails = (id) => {
        props.showDetails(id);
        const modal = document.querySelector('#details-modal');
        modal.classList.remove('hidden');
    }
    const displayImageURL = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
    return (
        <StyledArtwork onClick={() => {
            handleShowDetails(artwork.id);
        }}>
            {
                artwork.image_id ? 
                    <img src={displayImageURL} alt={artwork.credit_line} />
                : <h4>No image available</h4>
            }
            <p>{artwork.title}</p>
        </StyledArtwork>
    );
};

const mapStateToProps = state => {
    return {
        detailsDisplayed: state.detailsDisplayed
    };
}

export default connect(mapStateToProps, {showDetails})(Artwork);