import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMicrophone, FaStop } from 'react-icons/fa'; // Import microphone and stop icons from react-icons/fa

const VoiceRecognition = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();
  let recognition;

  const handleStartListening = () => {
    if (isListening) {
      setIsListening(false);
      recognition.stop();
      return;
    }

    setIsListening(true);
    recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
      handleCommand(speechToText.toLowerCase());
    };
    recognition.start();
    recognition.onend = () => {
      setIsListening(false);
    };
  };

  const handleCommand = (command) => {
    if (command.includes('open home')) {
      navigate('/');
    } else if (command.includes('open form')) {
      navigate('/form');
    } 
    else if (command.includes('open weather')) {
      navigate('/weather');
    } 
    else if (command.includes('open contact')) {
      navigate('/contact');
    } 
    else if (command.includes('open schemes')) {
      navigate('/feed');
    } 
  };

  return (
    <div className="fixed bottom-0 inset-x-0  p-4 z-50">
  {/* Icon button for voice recognition */}
  <div style={{ display: 'inline-block' }}>
    <button
      onClick={handleStartListening}
      disabled={isListening}
      className={`flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-md focus:outline-none ${isListening ? 'ring-4 ring-blue-300' : ''}`}
    >
      {isListening ? <FaStop /> : <FaMicrophone />} 
    </button>
  </div>
  <p className='text-black inline-block'>{transcript}</p>
</div>

  );
};

export default VoiceRecognition;
