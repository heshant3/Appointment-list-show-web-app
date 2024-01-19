import React, { useEffect, useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { onValue, ref } from "firebase/database";
import { db } from "../firebaseConfig";
import "../Css/Appointment.css";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [sessionStatus, setSessionStatus] = useState("");

  useEffect(() => {
    // Fetch session status from Firebase
    const sessionStatusRef = ref(db, "/Doctor /sessionStatus");
    onValue(sessionStatusRef, (snapshot) => {
      const status = snapshot.val();
      setSessionStatus(status || ""); // Set to an empty string if status is undefined
    });

    // Fetch appointments
    const appointmentsRef = ref(db, "users");
    onValue(appointmentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const date = new Date(); // Get the current date
        const appointmentsArray = Object.values(data)
          .filter(
            (appointment) =>
              new Date(
                appointment.date + "T" + appointment.time
              ).toDateString() === date.toDateString()
          )
          .sort((a, b) => compareTime(a.time, b.time)); // Sort by appointment time
        setAppointments(appointmentsArray);
      } else {
        setAppointments([]);
      }
    });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  // Function to compare two time strings
  const compareTime = (timeA, timeB) => {
    // Convert time strings to Date objects for comparison
    const dateA = new Date(`2000-01-01T${timeA}`);
    const dateB = new Date(`2000-01-01T${timeB}`);

    // Compare Date objects
    return dateA - dateB;
  };

  // Function to convert 24-hour time to 12-hour time
  const convertTo12HourFormat = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const parsedHours = parseInt(hours, 10);
    const period = parsedHours >= 12 ? "PM" : "AM";
    const formattedHours = parsedHours % 12 || 12;
    return `${formattedHours}:${minutes} ${period}`;
  };

  return (
    <div className="Container">
      <div className="Header">
        <div className="Text">Today Appointments</div>
        <div className="Icon">
          <FaUserDoctor
            className={`Icon_0 ${sessionStatus === "active" ? "blinking" : ""}`}
          />
        </div>
      </div>

      <div className="body">
        {appointments.map((appointment, index) => (
          <div key={index} className="box">
            <div className="ind"></div>
            <div className="BoxContent">
              <div className="TopContent">
                <div className="Name">{appointment.name}</div>
                <div className="Icon2">
                  <IoCheckmarkDoneCircle
                    className="Icon_1"
                    color={appointment.check === "0" ? "#00ff00" : "#f5f4f9"}
                  />
                </div>
              </div>
              <div className="Line"></div>
              <div className="BottomContent">
                <div className="Date">{appointment.date}</div>
                <div className="Time">
                  {convertTo12HourFormat(appointment.time)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <footer>
          <p className="footerText">
            This System Developed by{" "}
            <a
              className="myname"
              href="https://heshan.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heshan
            </a>
          </p>
        </footer>
      </footer>
    </div>
  );
};

export default Appointment;
