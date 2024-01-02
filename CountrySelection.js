import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import imageSrc from '../Images/25729772.jpg';
import { useNavigate } from 'react-router-dom';

const LanguageDropdown = ({ onSelect }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [dropdownWidth, setDropdownWidth] = useState('auto');
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
  ];

  const handleChange = (selectedOption) => {
    if (onSelect) {
      onSelect(selectedOption);
    }
  };

  useEffect(() => {
    if (dropdownRef.current) {
      setDropdownWidth(`${dropdownRef.current.clientWidth}px`);
    }
  }, [selectedLanguage]);

  const buttonStyle = {
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' style=\'overflow:visible;\' preserveAspectRatio=\'none\' viewBox=\'0 0 216 48\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M216 0H0V48H216V0Z\' fill=\'%232E3B62\'/%3E%3C/svg%3E")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    textAlign: 'center',
    padding: '20px 180px 20px 140px',
    border: 'none',
    cursor: 'pointer',
    maxWidth: '320px',
    width: dropdownWidth,
  };

  const containerStyle = {
    maxWidth: '320px',
    margin: 'auto',
  };
  const imageCss = {
    width: '20px',
    height: '20px',
    border: '2px black solid',
    position: 'absolute',
    top: '10px',
    left: '700px',
  };

  const handleClick = () => {
    if (selectedLanguage) {
      console.log("Clicked");
      // Redirect to the verification page when a language is selected
      navigate('/');
    }
  };

  return (
    <div style={containerStyle}>
      <br></br>
      <img src={imageSrc} alt='' style={imageCss} />
      <label><h2>Please Select your Language</h2></label>
      You can change language at any time
      <Select
        options={languageOptions}
        value={selectedLanguage}
        onChange={handleChange}
        placeholder="Select a language"
        ref={dropdownRef}
      />
      <br></br>
      <button style={buttonStyle} onClick={handleClick}>NEXT</button>
    </div>
  );
};

export default LanguageDropdown;
