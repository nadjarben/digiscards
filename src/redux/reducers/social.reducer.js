import { SET_SOCIALS, SET_LINKS, SET_INFOS, SET_STYLE, SET_DESCRIPTION, SET_PICTURE, SET_LOGO, SET_PICTURES_FOLDING } from "../actions/types";

const initialState = {
    socials: {
      whatsapp: true,
      phone: true,
      facebook: true,
      instagram: true,
      website: true,
      twitter: true
    },
    links: {},
    infos: {
      title: "DIGISCARDS",
      activities: "Get, Your Own, Digicard",
      activitiesArray: ["Get", "Your Own", "Digicard"],
    },
    style: {
      background: "black",
      borderImages: "#1ec503",
      colorLabels: "#1ec503",
      backgroundLabels: "black",
      backgroundLogo: "white",
      borderLabels: "#1ec503",
      title: "#FFFFFF",
      subtitles: "#1ec503",
      shareButton: "#FFFFFF",
      swipeColor: "white",
      optionsColor: "#1ec503"
    },
    description: {
      title: "Medias and Marketing Agency",
      text: "Welcome to our comapany digital cards enjoy it and make yours.",
      cat1Active: true,
      cat1Title: "HOURS",
      cat1Text: "Nos heures sont ....",
      cat2Active: true,
      cat2Title: "SERVICES",
      cat2Text: "Nos services sont ....",
    },
    picture: [],
    pictureLogo: [],
    picturesFolding: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SOCIALS:
      return {
        ...state,
        socials: action.payload,
      };
      case SET_LINKS:
      return {
        ...state,
        links: action.payload,
      };
      case SET_INFOS:
      return {
        ...state,
        infos: {
          title: action.payload.title,
          activities: action.payload.activities,
          activitiesArray: action.payload.activities.split(",")
        }
      };
      case SET_STYLE:
      return {
        ...state,
        style: action.payload,
      };
      case SET_DESCRIPTION:
      return {
        ...state,
        description: action.payload
      };
      case SET_PICTURE:
      return {
        ...state,
        picture: action.payload
      };
      case SET_LOGO:
      return {
        ...state,
        pictureLogo: action.payload
      };
      case SET_PICTURES_FOLDING:
      return {
        ...state,
        picturesFolding: action.payload
      };
    default:
      return state;
  }
}
