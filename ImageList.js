import react from "react";
import App from "./app";
import './imageList.css';
const ImageList = (props) => {
   const images= props.images.map((image) =>{
        return <img key={image.id} src={image.webformatURL}></img>
    })
    return(
        <div>
            {images}
        </div>
    )
}
export default ImageList;


