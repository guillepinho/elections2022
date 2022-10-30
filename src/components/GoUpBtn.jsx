import React from 'react';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

function GoUpBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="goup" type="button" onClick={ scrollToTop }>
      <OpenInBrowserIcon />
    </button>
  );
}

export default GoUpBtn;
