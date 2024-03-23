// validation.js

export const validateName = (name, touched, dirty) => {
  if (!touched && !dirty) return true; // Skip validation if field hasn't been touched or modified
  return /.+/.test(name.trim());
};
// Function to validate email field
export const validateEmail = (email, touched, dirty) => {
  if (!touched && !dirty) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};



// export const validatePhone = (phone1, touched, dirty) => {
//   if (!touched && !dirty) return true;
//   // Allow 10 or more digits for landline numbers
//   return /^\d{10,}$/.test(phone1.trim());
// };
export const validatePhone = (phone_primary) => {
  // Check if phoneNumber contains only digits and is between 10 to 11 characters long
  const phoneRegex = /^\d{10,11}$/;
  if (!phoneRegex.test(phone_primary)) {
    return "Please enter a valid phone number with 10 to 11 digits only.";
  }

  // All checks passed, phoneNumber is valid
  return null;
};
// Function to validate phone number field
export const validateSecPhone = (phone2, touched, dirty) => {
  if (!touched && !dirty) return true;
  return /^\d{10}$/.test(phone2.trim());
};

// Function to validate pincode field
export const validatePincode = (pincode, touched, dirty) => {
  if (!touched && !dirty) return true;
  return /^\d{6}$/.test(pincode.trim());
};


export const validateWeb = (website, touched, dirty) => {
  if (!touched && !dirty) return true; // Skip validation if field hasn't been touched or modified
  return /^[a-zA-Z0-9]{1,20}$/.test(website.trim());
};
// Function to validate address field
export const validateAddress = (address, touched, dirty) => {
  if (!touched && !dirty) return true;
  return address.trim().length > 0;
};


// Function to validate city field  number 
export const validateCity = (city, touched, dirty) => {
  if (!touched && !dirty) return true;
  return /^\d+$/.test(city.trim());
};

// Function to validate state field
export const validateState = (state, touched, dirty) => {
  if (!touched && !dirty) return true;
  return /^\d+$/.test(state.trim());
};

// // Function to validate password field
export const validatePassword1 = (password, touched, dirty) => {
  if (!touched && !dirty) return true;
  // Password should have minimum 8 characters, at least one uppercase letter,
  // one lowercase letter, one digit, and one special character
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
};

export const validatePassword = (password) => {

  // Check if password contains special characters
  // Check if password contains at least one uppercase letter
  const uppercaseChars = /[A-Z]/;
  if (!uppercaseChars.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }

  // Check if password contains at least one lowercase letter
  const lowercaseChars = /[a-z]/;
  if (!lowercaseChars.test(password)) {
    return "Password must contain at least one lowercase letter.";
  }

  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (!specialChars.test(password)) {
    return "Password must contain at least one special character.";
  }

  // Check if password contains at least one digit
  const digitChars = /[0-9]/;
  if (!digitChars.test(password)) {
    return "Password must contain at least one digit.";
  }

  // Check if password is too short
  if (password.length < 8) {
    return "Password is too short, must be at least 8 characters.";
  }

  // All checks passed, password is valid
  return null;
};
export const validatePassword3 = (passwordConfirm) => {
  // Check if passwordConfirm is too short

  // Check if passwordConfirm contains special characters
  // Check if passwordConfirm contains at least one uppercase letter
  const uppercaseChars = /[A-Z]/;
  if (!uppercaseChars.test(passwordConfirm)) {
    return "passwordConfirm must contain at least one uppercase letter.";
  }

  // Check if passwordConfirm contains at least one lowercase letter
  const lowercaseChars = /[a-z]/;
  if (!lowercaseChars.test(passwordConfirm)) {
    return "passwordConfirm must contain at least one lowercase letter.";
  }

  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (!specialChars.test(passwordConfirm)) {
    return "passwordConfirm must contain at least one special character.";
  }

  // Check if passwordConfirm contains at least one digit
  const digitChars = /[0-9]/;
  if (!digitChars.test(passwordConfirm)) {
    return "passwordConfirm must contain at least one digit.";
  }

  if (passwordConfirm.length < 8) {
    return "Password is too short, must be at least 8 characters.";
  }

  // All checks passed, password is valid
  return null;
};



export const validateCnfPassword = (cnfPassword, touched, dirty) => {
  if (!touched && !dirty) return true;
  // Password should have minimum 8 characters, at least one uppercase letter,
  // one lowercase letter, one digit, and one special character
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(cnfPassword);
};


export const validatePasswordMatch = (password, cnfPassword, touched, dirty) => {
  if (!touched && !dirty) return true;

  // Check if both fields are non-empty and match
  return password.trim() === cnfPassword.trim();
};


// Function to validate logo file input
export const validateLogo = (logoFile) => {
  // Check if a file has been selected
  if (!logoFile) {
    return "Please select a logo file.";
  }

  // Check file type (allow only image files: jpg, jpeg, png, gif)
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
  if (!allowedTypes.includes(logoFile.type)) {
    return "Please select a valid image file (jpg, jpeg, png, gif).";
  }

  // Check file size (limit to 5MB)
  const maxSizeMB = .2;
  if (logoFile.size > maxSizeMB * 1024 * 1024) {
    return `File size exceeds the maximum limit of 200 KB.`;
  }

  // All checks passed, logo is valid
  return null;
};
