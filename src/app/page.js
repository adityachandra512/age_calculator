"use client";  // Ensure the component is a Client Component

import { useState } from "react";

export default function AgeCalculator() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = () => {
    if (!day || !month || !year) {
      setError("Please enter a valid date of birth.");
      return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }

    if (calculatedAge < 0) {
      setError("Please enter a valid date in the past.");
    } else {
      setError("");
      setAge(calculatedAge);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Age Calculator</h2>
      <p style={styles.subtitle}>Enter your birth date and find out your age!</p>
      <div style={styles.inputGroup}>
        <input
          type="number"
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={styles.input}
        />
      </div>
      <button onClick={calculateAge} style={styles.button}>Calculate Age</button>

      {error && <p style={styles.error}>{error}</p>}
      {age !== null && !error && <p style={styles.result}>You are {age} years old!</p>}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '30px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    width: '350px',
    margin: '50px auto',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  title: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '30px',
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    gap: '10px',
  },
  input: {
    width: '30%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '2px solid #ccc',
    textAlign: 'center',
    outline: 'none',
    transition: 'border 0.3s ease',
    color: '#333',  // Text color for input box
  },
  'input::placeholder': {
    color: '#aaa',  // Placeholder color to make it visible
  },
  button: {
    padding: '12px 30px',
    fontSize: '16px',
    backgroundColor: '#6c63ff',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  error: {
    color: 'red',
    marginTop: '10px',
    fontSize: '14px',
  },
  result: {
    marginTop: '20px',
    fontSize: '22px',
    color: '#333',
    fontWeight: 'bold',
  }
};
