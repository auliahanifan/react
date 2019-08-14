import React from 'react';
// import LogoAlta from '../img/logo-ALTA.png';
import '../css/fromless.css';
import logoAlta2 from '../img/logo-ALTA-v2.png';
function Contact() {
    return (
      <div >
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 col-sm-12 m-0 p-0">
                <div className="samping m-0 p-0">
                    <div className="boxed m-0 p-0">
                            <img src={logoAlta2} alt="logo-ALTA-v2"/>
                    </div>
                </div>
            </div>
            <div className="col-md-7 col-sm-12 m-0 p-0">
                <div className="contact-form">
                    <form action="">
                        
                        <p>Contact Us</p>
                        <div className="form-group">
                            <label for="fullname">Full Name<span className="color">*</span></label>
                            
                            <input type="text" className="form-control" id="fullname" placeholder="Your Full Name..." required/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email Address<span className="color">*</span></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@domain.com" required/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Phone Number<span className="color">*</span></label>
                            <input type="text" className="form-control" id="phone" placeholder="0823**" required/>
                        </div>

                        <div className="form-group">
                            <p>Nationality</p>
                            <select name="nat" id="nat" className="form-control">
                                <option>Selected...</option>
                                <option value="indo">Indonesia</option>
                                <option value="malay">Malaysia</option>
                                <option value="singa">Singaporean</option>
                                <option value="aus">Australian</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control pesan" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    
                        <div className="submit">
                                <button type="submit" className="btn btn-primary">Submit</button>
                        </div>    

                        
                        
                    </form>
                </div>
            </div>
        </div>

        
    </div>
      </div>
    );
  }
  
  export default Contact;
  