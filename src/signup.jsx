import { useState } from "react";
import "./signup.css";

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Password strength regex
  const strongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check password match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Check strong password
    if (!strongPassword.test(formData.password)) {
      setError(
        "Password must be 8+ chars, include uppercase, lowercase, number & special character"
      );
      return;
    }

    // Success
    setError("");
    setShowPopup(true);

    console.log("User Signup Data:", {
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="text-center flex flex-col gap-2">
          <h1 className="header">IAM Secure</h1>
          <h2 className="heading">Sign Up to IAM Secure</h2>
          <p className="header_text">
            Enter your details to create your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div>
            <label className="email_label">Username or Email</label>
            <input
              className="email_input"
              type="text"
              name="email"
              placeholder="your.email@example.com"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="pwd_label">Password</label>
            <input
              className="pwd_input text-lg font-semibold tracking-widest"
              type="password"
              name="password"
              placeholder="........."
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="cpwd_label">Confirm Password</label>
            <input
              className="cpwd_input text-lg tracking-[0.2em] font-medium"
              type="password"
              name="confirmPassword"
              placeholder="........"
              onChange={handleChange}
              required
            />
          </div>

          <button className="signup">Sign Up</button>
        </form>

        <div className="footer">
          Already have an account?
          <span className="login"> Login</span>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        {/* Success popup */}
        {showPopup && (
          <p className="text-green-600 mt-2 text-center">
            Account Created Successfully!!
          </p>
        )}
      </div>
    </div>
  );
}