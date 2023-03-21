import React, { useState } from 'react';
import img from './img/image 1.png'
import './App.css';

function ProfilePic() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [avatarImage, setAvatarImage] = useState(img);

  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleUploadClick = () => {
    // upload selectedImage to server here
    setAvatarImage(selectedImage);
    setSelectedImage(null); // clear selectedImage after setting as avatar
  };

  const handleRemoveClick = () => {
    setAvatarImage(img);
  };

  return (
    <div>
      <h2>Profile Picture</h2>
      <h5 className='imagestyle'>
      <img src={avatarImage} alt="Avatar" className='profic'/>
      {avatarImage !== img && (
        <button onClick={handleRemoveClick}>Remove</button>
      )}
      </h5>
      <input type="file" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected Profile" />
          <button onClick={handleUploadClick}>Set as Profile Picture</button>
        </div>
      )}
    </div>
  );
}

export default ProfilePic;
