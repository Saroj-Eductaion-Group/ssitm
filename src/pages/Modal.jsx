import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Modal= () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/"; 
  useEffect(() => {
    // Track if we've shown the popup in this session
    const hasShownPopup = sessionStorage.getItem('hasShownPopup');
    
    // Load the script only once
    if (!scriptLoaded) {
      const script1 = document.createElement("script");
      script1.src = "https://in8cdn.npfs.co/js/widget/npfwpopup.js";
      script1.async = true;
      
      script1.onload = () => {
        setScriptLoaded(true);
        
        // Initialize the popup widget
        const initScript = document.createElement("script");
        initScript.innerHTML = `
          window.npfWidgetInstance = new NpfWidgetsInit({
            widgetId: "c4686ca3db50effadb9f24fc7ca22401",
            baseurl: "widgets.in8.nopaperforms.com",
            formTitle: "Enquiry Form",
            titleColor: "FF0033",
            backgroundColor: "#ddd",
            iframeHeight: "500px",
            buttonbgColor: "#4c79dc",
            buttonTextColor: "#FFF",
          });
        `;
        document.body.appendChild(initScript);

        // Show popup on initial load (any page) after 3 seconds
        if (!hasShownPopup) {
          const popupTimer = setTimeout(() => {
            showPopup();
            sessionStorage.setItem('hasShownPopup', 'true');
          }, 3000);
          
          return () => clearTimeout(popupTimer);
        }
      };

      document.body.appendChild(script1);

      return () => {
        if (script1.parentNode) {
          document.body.removeChild(script1);
        }
      };
    }

    // Show popup when navigating to homepage after 3 seconds
    if (isHomepage && scriptLoaded) {
      const homepagePopupTimer = setTimeout(() => {
        showPopup();
      }, 3000);
      
      return () => clearTimeout(homepagePopupTimer);
    }
  }, [scriptLoaded, isHomepage]);

  const showPopup = () => {
    const btn = document.querySelector(
      ".npfWidgetButton.npfWidget-c4686ca3db50effadb9f24fc7ca22401"
    );
    if (btn) {
      btn.click();
    }
  };

  return (
    <button
      type="button"
      className="npfWidgetButton npfWidget-c4686ca3db50effadb9f24fc7ca22401"
      onClick={showPopup}
      style={{
        position: "fixed",
        right: "-52px",
        top: "50%",
        transform: "translateY(-50%) rotate(-90deg)",
        cursor: "pointer",
        backgroundColor: "#16a34a",
        color: "white",
        padding: "0.3rem 1.5rem",
        fontSize: "0.85rem",
        fontWeight: "600",
        borderRadius: "0.375rem 0.375rem 0 0",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        transition: "background-color 0.3s ease",
        zIndex: 50,
        whiteSpace: "nowrap",
      }}
    >
      Enquire Now
    </button>
  );
};

export default Modal;