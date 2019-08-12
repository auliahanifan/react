import React from 'react';
// import LogoAlta from '../img/logo-ALTA.png';
import '../css/fromless.css';
import logoAlta2 from '../img/logo-ALTA-v2.png';
function Contact() {
    return (
      <div >
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-5 col-sm-12 m-0 p-0">
                <div class="samping m-0 p-0">
                    <div class="boxed m-0 p-0">
                            <img src={logoAlta2} alt="logo-ALTA-v2"/>
                    </div>
                </div>
            </div>
            <div class="col-md-7 col-sm-12 m-0 p-0">
                <div class="contact-form">
                    <form action="">
                        
                        <p>Contact Us</p>
                        <div class="form-group">
                            <label for="fullname">Full Name<span class="color">*</span></label>
                            
                            <input type="text" class="form-control" id="fullname" placeholder="Your Full Name..." required/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email Address<span class="color">*</span></label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@domain.com" required/>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number<span class="color">*</span></label>
                            <input type="text" class="form-control" id="phone" placeholder="0823**" required/>
                        </div>

                        <div class="form-group">
                            <p>Nationality</p>
                            <select name="nat" id="nat" class="form-control">
                                <option>Selected...</option>
                                <option value="indo">Indonesia</option>
                                <option value="malay">Malaysia</option>
                                <option value="singa">Singaporean</option>
                                <option value="aus">Australian</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control pesan" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    
                        <div class="submit">
                                <button type="submit" class="btn btn-primary">Submit</button>
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
  