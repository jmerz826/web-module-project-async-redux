import axios from "axios";
import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { fetchStart, fetchSuccess, fetchFailure } from "../actions";
import Artwork from "./artwork";
import styled from "styled-components";

const StyledList = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content:baseline;
    background-color:lightgrey;
    margin:2%;
    

    div:nth-of-type(even){
        background-color:lightblue;
        color:black;
    }
    div:nth-of-type(odd){
        background-color:royalblue;
        color:white;
    }
`

const ArtworkList = (props) => {
    useEffect(() => {
        props.fetchStart();
        axios.get('https://api.artic.edu/api/v1/artworks?page=1&limit=35')
            .then(res => {
                console.log(res.data.data);
                props.fetchSuccess(res.data.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);
    return (
        <div>
            <h2>Featured Work:</h2>
            <StyledList>
            {
                props.artworks.map(artwork => {
                    return (
                        <Artwork artwork={artwork} key={artwork.id}/>
                    );
                })
            }
            </StyledList>
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

export default connect(mapStateToProps, {fetchSuccess, fetchFailure, fetchStart})(ArtworkList);