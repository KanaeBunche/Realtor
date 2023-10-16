
import './viewing.css';
import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
 
      const data = {
        name,
        email,
        telephone,
        selectedDate,
        selectedTime,
      };
    

    fetch('http://127.0.0.1:5555/appointment', {
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

  const generateTimeOptions = () => {
    const startHour = 9;
    const endHour = 20; // 8:00 PM
    const timeOptions = [];

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 45) {
        const formattedHour = hour < 12 ? hour : hour - 12;
        const formattedMinute = minute === 0 ? '00' : '45';
        const period = hour < 12 ? 'AM' : 'PM';
        const startTime = `${formattedHour}:${formattedMinute} ${period}`;

        // Calculate end time
        let endHour = hour;
        let endMinute = minute + 45;
        if (endMinute >= 60) {
          endHour++;
          endMinute -= 60;
        }
        const formattedEndHour = endHour < 12 ? endHour : endHour - 12;
        const formattedEndMinute = endMinute === 0 ? '00' : '45';
        const endPeriod = endHour < 12 ? 'AM' : 'PM';
        const endTime = `${formattedEndHour}:${formattedEndMinute} ${endPeriod}`;

        const time = `${startTime} - ${endTime}`;
        timeOptions.push(time);
      }
    }

    // Remove the last 45 minute increment to ensure the latest meeting ends at 8:45 PM
    if (timeOptions[timeOptions.length - 1].split('-')[1].trim().split(':')[1] === '45') {
      timeOptions.pop();
    }

    return timeOptions;
}



  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div id="container">
      <h1>&bull; Book Appointment &bull;</h1>
      <div className="underline"></div>
      <div className="icon_wrapper">
        {/* Add your SVG here */}
      </div>
      <form onSubmit={handleFormSubmit} action="#" method="post" id="contact_form">
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
        <div className="date">
        <label className='date-label' htmlFor="date">Select Date:</label>
      <div className="user-box">
        <input
        className='date-label'
        type="date"
        id="date"
        value={selectedDate}
        onChange={handleDateChange}
        required
    />
</div>  
        </div>
        <div className="time">
        
          <select
            placeholder="Select Time"
            name="time"
            id="time_input"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          >
            <option disabled hidden value="">
              Select Time
            </option>
            {generateTimeOptions().map((timeOption, index) => (
              <option key={index} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </select>
        </div>
        <div className="submit">
          <input type="submit" value="Book Appointment" id="form_button" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
