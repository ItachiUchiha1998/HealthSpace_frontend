import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// core components
import Button from "components/CustomButtons/Button.jsx";

import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      upload: "none",
      uploading: false,
      hitSubmit: false,
      hitimage: false,
      imagePreviewUrl: defaultImage
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleImageSubmit = this.handleImageSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  handleImageSubmit(callback) {
      const BASE_URL = 'http://localhost:7000/upload/' + this.props.role + 'Images';
      this.setState({hitSubmit: true});
      this.setState({uploading: true});
      var data = new FormData();
      data.append("file", this.state.file);
      fetch(BASE_URL,{
        method : 'POST',
        body: data
      }).then( response => {  if (!response) { this.setState({ upload: "error"}); this.setState({uploading: false}); } else { return response.json(); }}).then( json => {  this.setState({imageurl : json.path}); callback(json.path); this.setState({upload : "success"}); this.setState({uploading: false}); });

  }

  componentDidUpdate(){
    if(this.state.hitimage === false && this.props.imageurl != ""){
      this.setState({imagePreviewUrl: this.props.imageurl});
      this.setState({hitimage: true});
    }
    if(this.state.file !== null && this.state.hitSubmit === false){
      this.handleImageSubmit(function(url){
        this.props.handleImageUrl(url);
      }.bind(this));
    }
  }


  handleClick() {
    this.refs.fileInput.click();
    this.setState({upload:"none"});
    this.setState({hitSubmit:false});
  }

  handleRemove() {
    this.setState({
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage
    });
    this.refs.fileInput.value = null;
    this.setState({upload:"none"});
    this.setState({hitSubmit:false});
    var url = "";
    this.props.handleImageUrl(url);
  }


  render() {
    var {
      avatar,
      addButtonProps,
      changeButtonProps,
      removeButtonProps
    } = this.props;
    console.log("image" +this.props.imageurl);
    return (
      <div className="fileinput text-center">
        <input type="file" onChange={this.handleImageChange} ref="fileInput" />
        <div className={"thumbnail" + (avatar ? " img-circle" : "")}>
          <img src={this.state.imagePreviewUrl} alt="..." />
        </div>
        <div>
          {this.state.file === null ? (
            <Button {...addButtonProps} onClick={() => this.handleClick()}>
              {avatar ? "Add Photo" : "Select image"}
            </Button>
          ) : (
            <span>
              <Button {...changeButtonProps} onClick={() => this.handleClick()}>
                Change
              </Button>
              {avatar ? <br /> : null}
              <Button
                {...removeButtonProps}
                onClick={() => this.handleRemove()}
              >
                <i className="fas fa-times" /> Remove
              </Button>
            </span>)}</div>
          <div>
            {this.state.uploading ? (<p>Uploading ... </p>):<p></p>}
          </div>
          <div>
            {this.state.upload === "success" ? (<p>Uploaded</p>):(<p></p>)}
        </div>
        <div>
          {this.state.upload === "error" ? (<p>Upload Error</p>) :(<p></p>)}
        </div>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
  addButtonProps: PropTypes.object,
  changeButtonProps: PropTypes.object,
  removeButtonProps: PropTypes.object
};

export default ImageUpload;
