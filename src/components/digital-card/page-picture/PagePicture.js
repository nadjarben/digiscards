import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@mdi/react";
import { mdiSkipNextOutline } from "@mdi/js";

const PagePhoto = ({ style, pageThree, allImages, setAllImages }) => {
  return (
    <div style={{ backgroundColor: style.bgImage, minHeight: "100vh" }}>
      <img
        src={pageThree.img1}
        style={{ maxHeight: "80vh" }}
        width="100%"
        alt="photos"
      />
      
      {allImages && (
        <div>
          {pageThree.imgs.map((i, id) => (
            <img
              style={{ borderColor: style.bgImage, borderStyle: "solid" }}
              key={id}
              src={i}
              height="auto"
              width="100%"
              alt="photos"
            />
          ))}
        </div>
      )}
      <div onClick={() => setAllImages(!allImages)} className="text-center">
        <Button
          style={{
            color: style.colorImage,
            backgroundColor: style.bgImage,
            marginTop: "2vh",
            fontWeight: "bold",
            borderColor: style.colorImage,
            fontSize: "50px",
          }}
          variant="outlined"
        >
          <Icon
            path={mdiSkipNextOutline}
            title="Next"
            size={1}
            color={style.colorImage}
          />
        </Button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default PagePhoto;
