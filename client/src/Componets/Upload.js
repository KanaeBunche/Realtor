import './viewing.css';
import React, { useState } from 'react';

const Upload = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [files, setFiles] = useState([]);

  const handleFileUpload = (e, index) => {
    const file = e.target.files[0];
    const updatedFiles = [...files];
    updatedFiles[index] = file;
    setFiles(updatedFiles);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('telephone', telephone);
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });
  
    fetch('http://127.0.0.1:5555/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  


  return (
    <div id="containers">
      <h1>&bull; Upload Documents &bull;</h1>
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
                required />
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
                required />
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
                required />
            </div>
          
        <div>
          <p className='pa'> A valid photo ID (driver’s license, passport, ID card or other US Government issued ID)</p>
        <input
        className='form-button'
          type="file"
          placeholder=""
          name="id"
          id="form_buttons" 
          onChange={(e) => handleFileUpload(e, 0)}
          required />
      </div>
  <div>
  <p>A copy of your last one pay stub</p>
  <input
          type="file"
          placeholder=""
          name="id"
          id="form_buttons" 
          onChange={(e) => handleFileUpload(e, 1)}
          required />
  </div>
  <div>
  <p className='pa'>A copy of your school registration, dated student ID or a bursar’s receipt if you are a student, or were a student last year. (If you are currently a student or a recent graduate, tax return/W2 may not be required)</p>
  <input
          type="file"
          placeholder=""
          name="id"
          id="form_buttons" 
          onChange={(e) => handleFileUpload(e, 2)}
          required />
  </div>
  <div>
<p className='pa'>A copy of your last one bank statement from the account with the most money (must show name and account number)</p>
  <input
          type="file"
          placeholder=""
          name="id"
          id="form_buttons" 
          onChange={(e) => handleFileUpload(e, 3)}
          required />
  </div>
  <div>
  <p className='pa'>Please upload your credit report. Be sure that your name is on what you send. Credit Karma, TransUnion or Experian are the best options to get the report yourself</p>
  <input
          type="file"
          placeholder=""
          name="id"
          id="form_buttons" 
          onChange={(e) => handleFileUpload(e, 4)}
          required />
  </div>
  <div>
  <p className='pa'>Letter of recommendation from your employer or former landlord</p>
  <input
          type="file"
          placeholder=""
          name="id"
          id="form_buttons" 
          onChange={(e) => handleFileUpload(e, 5)}
          required />
  </div>
  <div>
  <p className='pa'>A letter from your employer stating your salary, location, position and length of employment. This letter must be on a company letterhead and signed by an officer of your company. A direct supervisor, HR/payroll person, or an owner of the company will suffice</p>
  <input
          type="file"
          placeholder=""
          name="id"
          id="form_buttons" 
          onChange={(e) => handleFileUpload(e, 6)}
          required />
  </div>
  <div>
  <p className='pa'>Please upload a clear copy of your entire subsidy voucher</p>
  <input
          type="file"
          placeholder=""
          name="id"
          id="form_buttons"
          onChange={(e) => handleFileUpload(e, 7)}
          required />
  </div>
  <div className="submits-btn">
          <input type="submit" value="Submit" className="submit" />
        </div>
      </form>
      
    </div>
)}

export default Upload;
