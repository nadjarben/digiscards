import {
  SET_SOCIALS,
  SET_LINKS,
  SET_INFOS,
  SET_STYLE,
  SET_DESCRIPTION,
  SET_PICTURE,
  SET_LOGO,
  SET_PICTURES_FOLDING
} from "./types";

export const setSocials = (socials) => (dispatch) => {
  dispatch({
    type: SET_SOCIALS,
    payload: socials,
  });
};

export const setLinks = (links) => (dispatch) => {
  dispatch({
    type: SET_LINKS,
    payload: links,
  });
};

export const setInformations = (infos) => (dispatch) => {
  dispatch({
    type: SET_INFOS,
    payload: infos,
  });
};

export const setStyles = (style) => (dispatch) => {
  dispatch({
    type: SET_STYLE,
    payload: style,
  });
};

export const setDescription = (description) => (dispatch) => {
  dispatch({
    type: SET_DESCRIPTION,
    payload: description,
  });
};

export const setPicture = (picture) => (dispatch) => {
  dispatch({
    type: SET_PICTURE,
    payload: picture,
  });
};

export const setLogo = (logo) => (dispatch) => {
  dispatch({
    type: SET_LOGO,
    payload: logo,
  });
};

export const setPicturesFolding = (picturesFolding) => (dispatch) => {
  dispatch({
    type: SET_PICTURES_FOLDING,
    payload: picturesFolding,
  });
};
