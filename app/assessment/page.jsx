"use client";

import { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Assessment() {

  const router = useRouter();

  const [answers, setAnswers] = useState({
    goal: "",
    risk: "",
    horizon: "",
    knowledge: "",
    saving: "",
  });

  const handleChange = (key, value, labelSetter, closeSetter, label) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));

    labelSetter(label);
    closeSetter(false);
  };

  const handleSubmit = () => {
    localStorage.setItem("assessment", JSON.stringify(answers));
    router.push("/result");
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedLabel1, setSelectedLabel1] = useState("Select a financial goal");

  const options1 = [
    { value: "emergency-fund", label: "Emergency Fund" },
    { value: "buying-a-house", label: "Buying a House" },
    { value: "retirement", label: "Retirement" },
    { value: "wealth-growth", label: "Wealth Growth" },
    { value: "education-fund", label: "Education Fund" },
  ];

  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedLabel2, setSelectedLabel2] = useState("Select a risk tolerance");

  const options2 = [
    { value: "sell-immediately", label: "Sell immediately" },
    { value: "wait-and-monitor", label: "Wait and monitor" },
    { value: "buy-more", label: "Buy more while prices are lower" },
  ];

  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedLabel3, setSelectedLabel3] = useState("Select a time horizon");

  const options3 = [
    { value: "less-one", label: "Less than 1 year" },
    { value: "one-three", label: "1–3 years" },
    { value: "three-five", label: "3–5 years" },
    { value: "more-five", label: "More than 5 years" },
  ];

  const [isOpen4, setIsOpen4] = useState(false);
  const [selectedLabel4, setSelectedLabel4] = useState("Select a investment knowledge");

  const options4 = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ];

  const [isOpen5, setIsOpen5] = useState(false);
  const [selectedLabel5, setSelectedLabel5] = useState("Select a monthly saving capacity");

  const options5 = [
    { value: "less-five", label: "Less than Rp 500.000" },
    { value: "five-one", label: "Rp 500.000 – Rp 1.000.000" },
    { value: "more-one", label: "More than Rp 1.000.000" },
  ];

  const renderDropdown = (label, isOpen, setIsOpen, selectedLabel, options, keyName, labelSetter) => (
    <div className="form-group">
      <label>{label}</label>

      <div className="custom-dropdown-container">
        <div
          className={`selected-display ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedLabel}</span>
          <span className={`arrow ${isOpen ? 'up' : ''}`}>▼</span>
        </div>

        {isOpen && (
          <ul className="options-list">
            {options.map((opt) => (
              <li
                key={opt.value}
                className="option-item"
                onClick={() =>
                  handleChange(
                    keyName,
                    opt.value,
                    labelSetter,
                    setIsOpen,
                    opt.label
                  )
                }
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <div>

      <form className="modern-form">
        <fieldset>
          <legend>Investment Personality Assessment</legend>
          <p className="form-subtitle">Answer a few simple questions to discover your investment style and risk profile</p>

          <div className="form-grid">

            {renderDropdown(
              "What is your primary financial goal?",
              isOpen1,
              setIsOpen1,
              selectedLabel1,
              options1,
              "goal",
              setSelectedLabel1
            )}

            {renderDropdown(
              "How do you react to market risk?",
              isOpen2,
              setIsOpen2,
              selectedLabel2,
              options2,
              "risk",
              setSelectedLabel2
            )}

            {renderDropdown(
              "What is your investment horizon?",
              isOpen3,
              setIsOpen3,
              selectedLabel3,
              options3,
              "horizon",
              setSelectedLabel3
            )}

            {renderDropdown(
              "What is your investment knowledge?",
              isOpen4,
              setIsOpen4,
              selectedLabel4,
              options4,
              "knowledge",
              setSelectedLabel4
            )}

            {renderDropdown(
              "What is your monthly saving capacity?",
              isOpen5,
              setIsOpen5,
              selectedLabel5,
              options5,
              "saving",
              setSelectedLabel5
            )}
          </div>

          <Link href="/result">
            <button onClick={handleSubmit} type="button" className="btn-submit">
              Analyze My Profile
            </button>
          </Link>

        </fieldset>
      </form>
    </div>
  )
}