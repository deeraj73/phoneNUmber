import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import VerificationPage from './Components/VeficationPage';
import LanguageDropdown from './Components/CountrySelection';


function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <Router>
      <div>
        {selectedLanguage ? (
          <VerificationPage selectedLanguage={selectedLanguage} />
        ) : (
          <LanguageDropdown onSelect={handleLanguageSelect} />
        )}
      </div>
    </Router>
  );
}

export default App;
