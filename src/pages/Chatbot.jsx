import React, { useState, useEffect, useRef } from "react";
import { FiSend, FiX, FiMessageSquare, FiRefreshCw } from "react-icons/fi";
import { Loader2 } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [hasFirstOptionBeenSelected, setHasFirstOptionBeenSelected] =
    useState(false);

  // Define mainOptions globally within the component
  const mainOptions = [
    "Academic programs information",
    "Admission process",
    "Campus facilities",
    "Contact Form",
  ];

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your virtual assistant for Shivdan Singh Institute of Technology & Management.",
      sender: "bot",
      time: getCurrentTime(),
      options: null,
    },
    {
      id: 2,
      text: "How can I help you today?",
      sender: "bot",
      time: getCurrentTime(),
      options: mainOptions, // Use the global mainOptions here
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({
    college: "SSITM-ChatBot",
    name: "",
    email: "",
    phone: "", // Keep phone if your Google Sheet expects it
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Define academicPrograms data structure here with seat information from images
  const academicPrograms = {
    Undergraduate: [
      { Course: "Computer Science & Engineering", Duration: "4 Years", Seats: 90 },
      { Course: "Information Technology", Duration: "4 Years", Seats: 60 },
      { Course: "Electronics and Electrical Engineering", Duration: "4 Years", Seats: 90 },
      { Course: "Mechanical Engineering", Duration: "4 Years", Seats: 180 },
      { Course: "Biotechnology", Duration: "4 Years", Seats: 60 },
      { Course: "Agricultural Engineering", Duration: "4 Years", Seats: 60 },
      { Course: "Civil Engineering", Duration: "4 Years", Seats: 180 },
      { Course: "B.Pharma", Duration: "4 Years", Seats: 100 },
      { Course: "BCA", Duration: "3 Years", Seats: 60 },
      { Course: "BBA", Duration: "3 Years", Seats: 60 },
      { Course: "B.Ed", Duration: "2 Years", Seats: 100 },
    ],
    Postgraduate: [
      { Course: "Production Engineering", Duration: "2 Years", Seats: 18 },
      { Course: "Computer Aided Design & Manufacturing", Duration: "2 Years", Seats: 18 },
      { Course: "VLSI Design", Duration: "2 Years", Seats: 18 },
      { Course: "Electronics Communication Engineering", Duration: "2 Years", Seats: 18 },
      { Course: "Computer Science", Duration: "2 Years", Seats: 18 },
      { Course: "MBA", Duration: "2 Years", Seats: 120 },
      { Course: "MCA", Duration: "3 Years", Seats: 60 },
      { Course: "M.Pharma (Pharmaceutical Chemistry)", Duration: "2 Years", Seats: 8 },
      { Course: "M.Pharma (Pharmaceutics)", Duration: "2 Years", Seats: 12 },
    ],
    Diploma: [
      { Course: "Civil Engineering", Duration: "3 Years", Seats: 60 },
      { Course: "Mechanical Engineering", Duration: "3 Years", Seats: 60 },
      { Course: "Electrical Engineering", Duration: "3 Years", Seats: 60 },
      { Course: "Agricultural Engineering", Duration: "3 Years", Seats: 60 },
      { Course: "D. Pharma", Duration: "2 Years" }, // Seats not specified in image
    ],
  };

  const feesStructure = [
    { Course: "B.Pharma", TotalFees: "₹85,000.00", TuitionFee: "₹60,000.00" },
    { Course: "D.Pharma", TotalFees: "₹75,000.00", TuitionFee: "₹65,000.00" },
    { Course: "Diploma", TotalFees: "₹35,000.00", TuitionFee: "₹35,000.00" },
    { Course: "BBA", TotalFees: "₹45,000.00", TuitionFee: "₹30,000.00" },
    { Course: "BCA", TotalFees: "₹45,000.00", TuitionFee: "₹30,000.00" },
    { Course: "B.Tech", TotalFees: "₹85,000.00", TuitionFee: "₹60,000.00" },
    { Course: "M.Tech", TotalFees: "₹60,000.00", TuitionFee: "₹30,000.00" },
    { Course: "MBA", TotalFees: "₹60,000.00", TuitionFee: "₹30,000.00" },
    { Course: "MCA", TotalFees: "₹60,000.00", TuitionFee: "₹30,000.00" },
  ];

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showContactForm]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowContactForm(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hi! I'm your virtual assistant for Shivdan Singh Institute of Technology & Management.",
        sender: "bot",
        time: getCurrentTime(),
        options: null,
      },
      {
        id: 2,
        text: "How can I help you today?",
        sender: "bot",
        time: getCurrentTime(),
        options: mainOptions, // Use the global mainOptions here
      },
    ]);
    setShowContactForm(false);
    setHasFirstOptionBeenSelected(false);
    setInputValue("");
    setFormStatus(""); // Reset form status on chat reset
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage = {
      // Renamed for clarity
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      time: getCurrentTime(),
      options: null,
    };

    setMessages((prev) => [...prev, userMessage]); // Use prev callback
    setInputValue("");

    setTimeout(() => {
      generateBotResponse(inputValue);
    }, 800);
  };

  const handleOptionSelect = (option) => {
    const userMessage = {
      // Renamed for clarity
      id: messages.length + 1,
      text: option,
      sender: "user",
      time: getCurrentTime(),
      options: null,
    };

    setMessages((prev) => [...prev, userMessage]); // Use prev callback

    if (option === "Contact Form") {
      setShowContactForm(true);
      setTimeout(() => {
        setMessages((prev) => [
          // Use prev callback
          ...prev,
          {
            id: prev.length + 1, // Correct ID calculation
            text: "Please fill out this form to contact our administration team. We'll get back to you shortly.",
            sender: "bot",
            time: getCurrentTime(),
            options: null,
          },
        ]);
      }, 500);
    } else {
      setTimeout(() => {
        generateBotResponse(option);
      }, 500);
    }
  };

  const generateBotResponse = (userInput) => {
    let response = "";
    let options = null;
    // No need to redeclare mainOptions here, it's defined globally

    if (
      userInput.toLowerCase().includes("academic programs information") ||
      (userInput.toLowerCase().includes("program") &&
        !userInput.toLowerCase().includes("b.tech") &&
        !userInput.toLowerCase().includes("m.tech") &&
        !userInput.toLowerCase().includes("diploma") &&
        !userInput.toLowerCase().includes("pharmacy") &&
        !userInput.toLowerCase().includes("other academic programs"))
    ) {
      response = "Which type of program are you interested in?";
      options = [
        "B.Tech programs",
        "M.Tech programs",
        "Diploma programs",
        "Pharmacy programs",
        "Other Academic Programs (BBA, BCA, MBA, MCA, B.Ed)",
      ];
    } else if (userInput.toLowerCase().includes("b.tech programs")) {
      response = `Our B.Tech programs (4 years) include:\n`;
      academicPrograms.Undergraduate.filter(
        (p) => p.Course.includes("Engineering") && p.Duration === "4 Years"
      ).forEach((p) => {
        response += `- ${p.Course} (Seats: ${p.Seats})\n`;
      });
      response += `\nEligibility: 10+2 with Physics, Chemistry, and Mathematics.`;
      options = mainOptions; // Use the global mainOptions
    } else if (userInput.toLowerCase().includes("m.tech programs")) {
      response = `Our M.Tech programs (2 years) include:\n`;
      academicPrograms.Postgraduate.filter(
        (p) => p.Course.includes("Engineering") || p.Course.includes("Computer Science")
      ).forEach((p) => {
        response += `- ${p.Course} (Seats: ${p.Seats})\n`;
      });
      response += `\nEligibility: B.Tech degree in a relevant discipline.`;
      options = mainOptions; // Use the global mainOptions
    } else if (userInput.toLowerCase().includes("diploma programs")) {
      response = `Our Diploma programs include:\n`;
      academicPrograms.Diploma.filter(
        (p) => p.Course.includes("Engineering") || p.Course === "D. Pharma"
      ).forEach((p) => {
        response += `- ${p.Course} (${p.Duration}`;
        if (p.Seats) response += `, Seats: ${p.Seats}`;
        response += `)\n`;
      });
      response += `\nEligibility: 10th pass or equivalent (for Engineering Diplomas); 10+2 with Science (Physics, Chemistry, Biology/Mathematics) for D. Pharma.`;
      options = mainOptions; // Use the global mainOptions
    } else if (userInput.toLowerCase().includes("pharmacy programs")) {
      response = `We offer:\n`;
      const dPharm = academicPrograms.Diploma.find((p) => p.Course === "D. Pharma");
      const bPharm = academicPrograms.Undergraduate.find((p) => p.Course === "B.Pharma");
      const mPharmChem = academicPrograms.Postgraduate.find((p) => p.Course === "M.Pharma (Pharmaceutical Chemistry)");
      const mPharmPharma = academicPrograms.Postgraduate.find((p) => p.Course === "M.Pharma (Pharmaceutics)");

      if (dPharm) response += `- D.Pharma (${dPharm.Duration}) - Eligibility: 10+2 with Science (Physics, Chemistry, Biology/Mathematics)\n`;
      if (bPharm) response += `- B.Pharma (${bPharm.Duration}, Seats: ${bPharm.Seats}) - Eligibility: 10+2 with Physics, Chemistry, and Biology/Mathematics\n`;
      if (mPharmChem && mPharmPharma) response += `- M.Pharma (2 Years) - Specializations include Pharmaceutical Chemistry (Seats: ${mPharmChem.Seats}) and Pharmaceutics (Seats: ${mPharmPharma.Seats}). Eligibility: B.Pharm degree from a recognized university.`;

      options = mainOptions; // Use the global mainOptions
    } else if (userInput.toLowerCase().includes("other academic programs")) {
      response = `We also offer:\n`;
      const bba = academicPrograms.Undergraduate.find((p) => p.Course === "BBA");
      const bca = academicPrograms.Undergraduate.find((p) => p.Course === "BCA");
      const bed = academicPrograms.Undergraduate.find((p) => p.Course === "B.Ed");
      const mba = academicPrograms.Postgraduate.find((p) => p.Course === "MBA");
      const mca = academicPrograms.Postgraduate.find((p) => p.Course === "MCA");

      if (bba) response += `- BBA (${bba.Duration}, Seats: ${bba.Seats}) - Eligibility: 10+2 in any stream\n`;
      if (bca) response += `- BCA (${bca.Duration}, Seats: ${bca.Seats}) - Eligibility: 10+2 in any stream\n`;
      if (bed) response += `- B.Ed (${bed.Duration}, Seats: ${bed.Seats}) - Eligibility: Bachelor's degree in any discipline\n`;
      if (mba) response += `- MBA (${mba.Duration}, Seats: ${mba.Seats}) - Eligibility: Bachelor's degree in any discipline\n`;
      if (mca) response += `- MCA (${mca.Duration}, Seats: ${mca.Seats}) - Eligibility: Bachelor's degree with Mathematics at 10+2 or graduation level`;
      options = mainOptions; // Use the global mainOptions
    } else if (userInput.toLowerCase().includes("admission")) {
      response = `Admission Process:\n1. Register Yourself: siu.in8.nopaperforms.com/\n2. Verify Email\n3. Fill Application Form Online\n4. Pay Application Fee\n5. Submit Application\n\nFor B.Tech programs, JEE Main scores are considered.`;
      options = mainOptions; // Use the global mainOptions
    } else if (
      userInput.toLowerCase().includes("campus facilit") ||
      userInput.toLowerCase().includes("facility")
    ) {
      response =
        `Our campus boasts a range of modern facilities to support your academic and personal growth:\n` +
        `- Computing Facilities: State-of-the-art computer centers.\n` +
        `- Central Library & Book Bank: A comprehensive library with a digital resources and a book bank facility.\n` +
        `- Mess or Cafeteria: Hygienic and spacious mess/cafeteria offering a variety of meals.\n` +
        `- Hostel Facility: Comfortable and secure accommodation for students.\n` +
        `- Transportation Facility: Convenient transportation services for day scholars.\n` +
        `- Gymnasium: Well-equipped gym for fitness enthusiasts.\n` +
        `- Sports Complex: Extensive sports complex for various indoor and outdoor sports.\n` +
        `- Modern labs and workshops: Hands-on learning environments for all disciplines.`;
      options = mainOptions; // Return to main options after listing facilities
    } else if (userInput.toLowerCase().includes("fee structure")) {
      response = "Here's the fee structure for various programs (Session 2025-26):\n";
      feesStructure.forEach(item => {
        response += `- ${item.Course}: Total Fees ${item.TotalFees}, Tuition Fee ${item.TuitionFee}\n`;
      });
      response += "\nNote: Fees once deposited are non-refundable. Exam/form/enrollment fees are to be paid directly to the university. Dress & transport charges are separate if availed. Hostel fee: ₹50,000/year (includes mess).";
      options = mainOptions; // Use the global mainOptions
    } else {
      response =
        "I'm here to assist you with any queries about Shivdan Singh Institute of Technology & Management's programs or facilities. Please choose an option or type your query.";
      options = mainOptions; // Default options for unrecognized input
    }

    setMessages((prev) => [
      // Use prev callback
      ...prev,
      {
        id: prev.length + 1, // Correct ID calculation
        text: response,
        sender: "bot",
        time: getCurrentTime(),
        options: options,
      },
    ]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus("Sending...");

    try {
      const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormStatus("Thank you for contacting us! We'll respond soon.");
      setFormData({
        college: "SSITM-ChatBot",
        name: "",
        email: "",
        phone: "", // Keep phone if your Google Sheet expects it
        subject: "",
        message: "",
      });

      // Add the user's confirmation message immediately
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "I've submitted the contact form to the administration team.",
          sender: "user",
          time: getCurrentTime(),
          options: null,
        },
      ]);

      // Use a short delay to ensure React has processed setShowContactForm(false)
      setTimeout(() => {
        setShowContactForm(false); // Hide the form first
        // Now add the bot's response with options
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: "Thanks for submitting the form! Is there anything else I can assist you with?",
            sender: "bot",
            time: getCurrentTime(),
            options: mainOptions, // This will now correctly reference the global mainOptions
          },
        ]);
      }, 500); // Shortened delay to 500ms
    } catch (error) {
      console.error("Error!", error.message);
      setFormStatus("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {!isOpen && (
        <button
          onClick={toggleChatbot}
          className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          <FiMessageSquare className="text-white text-2xl" />
        </button>
      )}

      {isOpen && (
        <div className="w-[calc(100vw-2rem)] max-w-sm h-[32rem] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mr-2">
                <FiMessageSquare className="text-white" />
              </div>
              <div>
                <h3 className="font-bold">SSITM Assistant</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={resetChat}
                className="text-white hover:text-blue-200 transition-colors p-1"
                title="Reset chat"
              >
                <FiRefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={toggleChatbot}
                className="text-white hover:text-blue-200 transition-colors p-1"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-tr-none"
                      : "bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-200"
                  }`}
                >
                  {message.text.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  <p className="text-xs opacity-70 mt-1">{message.time}</p>
                </div>
                {message.options && !showContactForm && ( // This condition now works correctly
                  <div className="mt-2 space-y-2">
                    {message.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(option)}
                        className="block w-full text-left p-2 text-sm bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div ref={messagesEndRef} /> {/* Scroll to bottom ref */}

            {showContactForm && (
              <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Fill the Form
                </h4>
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Full Name"
                    className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    placeholder="Email Address"
                    className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="Phone Number"
                    className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                  />
                
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 text-sm rounded font-medium transition ${
                      loading
                        ? "bg-blue-300 cursor-not-allowed text-white"
                        : "bg-gradient-to-r from-orange-500 to-red-500 hover:bg-blue-700 text-white"
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin w-4 h-4" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FiSend className="w-4 h-4" />
                          <span>Submit</span>
                        </>
                      )}
                    </div>
                  </button>
                  {formStatus && (
                    <p className="text-xs text-center mt-2 text-blue-600">
                      {formStatus}
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>

          {!showContactForm && ( // Input field appears only when form is not shown
            <div className="p-3 bg-white border-t border-gray-200 flex">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className={`ml-2 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  inputValue.trim()
                    ? "bg-gradient-to-r from-orange-500 to-red-500 hover:bg-blue-700 text-white"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <FiSend />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;