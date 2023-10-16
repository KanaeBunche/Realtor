import './intakeform.css'
import React, { useState } from 'react';

const Buying = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [agreementChecked, setAgreementChecked] = useState(false);
  


  
  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
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

    const submissionData = {
      name,
      email,
      telephone,
      answers: answers,
    };

    console.log('Submitted Data:', submissionData);
  };



  const questions = [
    "Please upload your pre-approval letter from your lender?",
    "Have you met with a CPA (accountant) to consider your budget and plan out your expenses, debt, income, and assets over the next 30 years?",
    "How do you plan on funding the closing costs and downpayment for this purchase(Cash, illiquid Assts(s), Investments, All)? ",
    "Who is your current employee?",
    "Have you liquidated all illiquid assets to cover the closing costs and down payment?",
    "Closing costs usually range between 2-5% of the listing price. How much in cash/assets do you have on hand for closing costs? ",
    "How much in cash/assests do you have on hand for a down payment?",
    "If no, please explain your plans to get there before?",
    "Do you want to purchase a new pre-occupied home?",
    "Are you aware that purchasing a preoccupied home may cost you repairs very soon?",
    "How much do you have saved up in the likely event that this happens?",
    "How many bedrooms do you need?",
    "How many bathrooms do you need?",
    "Do you need a basement?",
    "Do you need an attic?",
    "Do you need a garage?",
    "If yes, how many cars do you have?",
    "Do you need access to the school bus(es)?",
    "Do you need access to public transportation?",
    "What is your lifestyle and explain how it will influence your purchase (Examples: Bohemian, Minimalistic, Homesteading, Active/Healthy etc.)?",
    "How important is having a front yard?",
    "How important is having a back yard?",
    "How important is having a pool in your back yard?",
    "How important is the proximity of parks?",
    "How important is the proximity of shopping centers?",
    "How important is the proximity of hiking trails?",
    "How important is the proximity of bodies of water ?",
    "What floor plan are you most attracted to (Open floor plan, Cloased floor plan, Modular floor plan, Hybrid floor plan, Open to all)?",
    "Which is the population type and density of the area in which you want to move?(Urban, Suburbanm Exurban, Rural)?",
    "What is your family size?",
    "How many children do you have attending high school and or below?(please specify grade level for each child)?",
    "What are your needs that have not been covered here?",
    "Pick a day to meet", 
    "Pick a time to meet"
  ];
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const importanceLevels = ["Not very important", "Indifferent", "Must have"];
  const totalQuestions = questions.length;

  const handleAnswerChange = (index, newValue) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      if (index === questions.length - 1) {
        // Handle time input
        newAnswers[index] = newValue;
      } else {
        // Handle other inputs
        newAnswers[index] = newValue;
      }
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

        {currentQuestionIndex > 0 && currentQuestionIndex !== 33 && currentQuestionIndex !== 9 && currentQuestionIndex !== 10 && currentQuestionIndex !== 5 &&  currentQuestionIndex !== 1 &&    currentQuestionIndex !== 15 && currentQuestionIndex !== 18 && currentQuestionIndex !== 14 &&  currentQuestionIndex !== 16 &&  currentQuestionIndex !== 19 && !questions[currentQuestionIndex - 1].startsWith("How important") && (
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
{currentQuestionIndex === 1 && (
  <div className="question">
    <label htmlFor="question">{questions[currentQuestionIndex - 1]}</label>
    <input
      type="file"
      name="question"
      id="form_button" 
      onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.files[0])}
      required
    />
  </div>
)}


{currentQuestionIndex === 33 && (
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
{currentQuestionIndex === 10 && (
  <div className="question">
    <label htmlFor="question">{questions[currentQuestionIndex - 1]}</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="question"
          value="Yes"
          checked={answers[currentQuestionIndex - 1] === "Yes"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="question"
          value="No"
          checked={answers[currentQuestionIndex - 1] === "No"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        No
      </label>
    </div>
  </div>
)}
{currentQuestionIndex === 5 && (
  <div className="question">
    <label htmlFor="question">{questions[currentQuestionIndex - 1]}</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="question"
          value="Yes"
          checked={answers[currentQuestionIndex - 1] === "Yes"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="question"
          value="No"
          checked={answers[currentQuestionIndex - 1] === "No"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        No
      </label>
    </div>
  </div>
)}
{currentQuestionIndex === 9 && (
  <div className="question">
    <label htmlFor="question">{questions[currentQuestionIndex - 1]}</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="question"
          value="Yes"
          checked={answers[currentQuestionIndex - 1] === "Yes"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="question"
          value="No"
          checked={answers[currentQuestionIndex - 1] === "No"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        No
      </label>
    </div>
  </div>
)}
{currentQuestionIndex === 14 && (
  <div className="question">
    <label htmlFor="question">{questions[currentQuestionIndex - 1]}</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="question"
          value="Yes"
          checked={answers[currentQuestionIndex - 1] === "Yes"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="question"
          value="No"
          checked={answers[currentQuestionIndex - 1] === "No"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        No
      </label>
    </div>
  </div>
)}
{currentQuestionIndex === 15 && (
  <div className="question">
    <label htmlFor="question">{questions[currentQuestionIndex - 1]}</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="question"
          value="Yes"
          checked={answers[currentQuestionIndex - 1] === "Yes"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="question"
          value="No"
          checked={answers[currentQuestionIndex - 1] === "No"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        No
      </label>
    </div>
  </div>
)}
 {currentQuestionIndex === 16 && (
  <div className="question">
    <label htmlFor="question">{questions[currentQuestionIndex - 1]}</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="question"
          value="Yes"
          checked={answers[currentQuestionIndex - 1] === "Yes"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="question"
          value="No"
          checked={answers[currentQuestionIndex - 1] === "No"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        No
      </label>
    </div>
  </div>
)}

{currentQuestionIndex === 18 && (
  <div className="question">
    <label htmlFor="question">{questions[currentQuestionIndex - 1]}</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="question"
          value="Yes"
          checked={answers[currentQuestionIndex - 1] === "Yes"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="question"
          value="No"
          checked={answers[currentQuestionIndex - 1] === "No"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        No
      </label>
    </div>
  </div>
)}
{currentQuestionIndex === 19 && (
  <div className="question">
    <label htmlFor="question">{questions[currentQuestionIndex - 1]}</label>
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="question"
          value="Yes"
          checked={answers[currentQuestionIndex - 1] === "Yes"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="question"
          value="No"
          checked={answers[currentQuestionIndex - 1] === "No"}
          onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
          required
        />
        No
      </label>
    </div>
  </div>
)}
{currentQuestionIndex > 0 && currentQuestionIndex !== 11 && questions[currentQuestionIndex - 1].startsWith("How important") && (
  <div className="question">
    <label htmlFor="question">{questions[currentQuestionIndex - 1]}</label>
    <select
      name="question"
      id="form_button" 
      value={answers[currentQuestionIndex - 1]}
      onChange={(e) => handleAnswerChange(currentQuestionIndex - 1, e.target.value)}
      required
    >
      <option value="">Select an importance level</option>
      {importanceLevels.map((level, index) => (
        <option key={index} value={level}>{level}</option>
      ))}
    </select>
  </div>
)}


      {currentQuestionIndex === questions.length - 1 && (
        <div className="question">
          <label htmlFor="question">{questions[currentQuestionIndex]}</label>
          <input
            type="time"
            name="question"
            id="form_button"
            value={answers[currentQuestionIndex]}
            onChange={(e) => handleAnswerChange(currentQuestionIndex, e.target.value)}
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

export default Buying;
