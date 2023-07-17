import React from "react"

export default function App() {
    
    const[formData,setFormData]=React.useState({
        email:"",
        password:"",
        confirmpassword:"",
        okayToEmail:""
        });
        
        function handleChange(event){
            
         const{name,type,value,checked}=event.target;
         setFormData(prevData=>({
             
             ...prevData,
              [name]: type === "checkbox" ? checked : value
         }))
        }
        console.log(formData)
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    
    function handleSubmit(event) {
    event.preventDefault();

    if (formData.password === formData.confirmpassword) {
        console.log("Successfully signed up");
    } else {
        console.log("Passwords do not match");
    }

    if (formData.okayToEmail) {
        console.log("Thanks for signing up for our newsletter!");
    }
}

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
               
                <input 
    type="password" 
    placeholder="Confirm password"
    className="form--input"
    name="confirmpassword"  // Corrected name attribute
    onChange={handleChange}
    value={formData.confirmpassword}
/>

                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="okayToEmail"
                        onChange={handleChange}
                        value={formData.okayToEmail}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
