import './intakeform.css'
import React, { useState } from 'react';

const Upload = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [agreementChecked, setAgreementChecked] = useState(false);

  const questions = [
    "How many bedrooms are you looking for ?",
    "How many bathrooms are you looking for ?",
    "How many people will be living in the unit? ",
    "Who is your current employeer?",
    "What is your monthly salary?",
    "How many people will be living in the unit? ",
    "Do you have the cash needed to secure the property right now?",
    "If no, please explain your plans to get there before closing?",
    "How many cars will you need parking for?",
    "What accessibility features do you need? (Ex. wheelchair access, stairlift, roll-in shower, etc.)?",
    "Preferred move in Date?",
    "Do you have pets?",
    "If yes, please list their breed and weight",
    "What is your most desired borough and neighborhoods?",
    "Do you have a rental subsidy program?",
    "If yes, which type?",
    "How much is the voucher worth?",
    "When does your voucher expire?",
    "What is your case worker's full name?",
    "What is your case worker's email?",
    "What is your case worker's phone number?",
  ];
  
  const handleNextClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!agreementChecked) {
      alert('You must agree to the terms before submitting.');
      return;
    }

    const data = {
      name,
      email,
      telephone,
      answers:answers,
    };

    fetch('http://127.0.0.1:5555/intakeform', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => {
      console.error('Error:', error);
    });
  };



  
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

const handleAnswerChange = (index, newValue) => {
  setAnswers(prevAnswers => {
    const newAnswers = [...prevAnswers];
    newAnswers[index] = newValue;
    return newAnswers;
  });
};

  return (
    <div id="container">
      <h1>&bull; Intake Form &bull;</h1>
      <div className="underline"></div>
      <div className="icon_wrapper">
        {/* Add your SVG here */}
      </div>
      <form onSubmit={handleFormSubmit} action="#" method="post" id="contact_form">
        {currentQuestionIndex === 0 && (
          <>
            <div className="name">
              <label htmlFor="name"></label>
              <input
                type="text"
                placeholder="My name is"
                name="name"
                id="name_input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="email">
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="My e-mail is"
                name="email"
                id="email_input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="telephone">
              <label htmlFor="telephone"></label>
              <input
                type="text"
                placeholder="My number is"
                name="telephone"
                id="telephone_input"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                required
              />
            </div>
          </>
        )}
        {currentQuestionIndex > 0 && currentQuestionIndex !== 11 && (
  <div className="question">
    <label htmlFor="question">{questions[currentQuestionIndex - 1]}</label>
    <input
      type="text"
      name="question"
      id="form_button" 
      value={answers[currentQuestionIndex - 1]}
      onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
      required
    />
  </div>
)}

{currentQuestionIndex === 11 && (
  <div className="question">
    <label htmlFor="question">{questions[currentQuestionIndex - 1]}</label>
    <input
      type="date"
      name="question"
      id="form_button" 
      value={answers[currentQuestionIndex - 1]}
      onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
      required
    />
  </div>
)}
        
        <div className="">
          {currentQuestionIndex > 0 && (
            <input type="button" value="Back" id="form_button" onClick={handleBackClick} />
          )}
          {currentQuestionIndex < questions.length && (
            <input 
              type="button" 
              value="Next" 
              id="form_button" 
              onClick={handleNextClick} 
            />
          )}
          {currentQuestionIndex === questions.length && (
            <input 
              type="submit" 
              value="Submit" 
              id="form_button" 
            />
          )}
        </div>
        {currentQuestionIndex === questions.length && (
          <div className="agreement">
            <input
              type="checkbox"
              id="agreement"
              checked={agreementChecked}
              onChange={(e) => setAgreementChecked(e.target.checked)}
              required
            />
            <label htmlFor="agreement">
              By submitting this application you agree: The information provided herein is complete and accurate. Providing incomplete and/or false information could result in the rejection of the application.
            </label>
          </div>
        )}
        
      </form>
    </div>
  );
};

export default Upload;
