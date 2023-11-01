import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays } from "date-fns"; // Import subDays function

const Booking = () => {
  const [selectedLocationValue, setSelectedLocationValue] = useState("");
  const [selectedServiceValue, setSelectedServiceValue] = useState("");
  const [selectedSpecialistValue, setSelectedSpecialistValue] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [selectedTimeValue, setSelectedTimeValue] = useState("");
  const [specialistAvailability, setSpecialistAvailability] = useState({});
  const [showDateTime, setShowDateTime] = useState(false);
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  const [appointmentData, setAppointmentData] = useState({
    location: "",
    service: "",
    specialist: "",
    date: "",
    time: "",
  });

  // Define the available staff members for each location
  const staffByLocation = {
    "Zona Rio": ["Person 1", "Person 2", "Person 3", "Person 4"],
    "5 y 10": ["Person 5", "Person 6", "Person 7", "Person 8"],
  };

  // Define the available services
  const availableServices = [
    "Clinical Pedicure",
    "Ingrown Toenail",
    "Two Ingrown Toenails",
    "Toenail Fungus",
    "Infiltration",
    "Granulotomy",
    "Plantar Wart",
    "Heel Pain",
    "Matricectomy",
    "Interdigital Callus",
    "Digital Callus",
    "Reflexology (30 min)",
    // Add more services here
  ];

  // Define time intervals for different specialists
  const timeIntervals = {
    "Person 1": 40,
    "Person 2": 40,
    "Person 3": 30,
    "Person 4": 30,
    "Person 5": 40,
    "Person 6": 40,
    "Person 7": 30,
    "Person 8": 30,
  };

  // Generate a list of times from 9 AM to 7 PM based on the selected specialist
  // Generate a list of times from 9 AM to 3 PM (Saturdays) or 4 PM (Zona Rio) or 6:50 PM (other days) based on the selected specialist and location
  const generateTimes = (specialist) => {
    if (!specialist) {
      return [];
    }
    const interval = timeIntervals[specialist];
    const times = [];
    const currentDate = startDate || new Date();
    const day = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const startHour = 9;
    let endHour = 18; // Default end time for weekdays and Saturdays (other than Zona Rio)

    if (selectedLocationValue === "5 y 10" && day === 6) {
      endHour = 15; // Saturdays in "5 y 10" are from 9 AM to 3 PM
    } else if (selectedLocationValue === "Zona Rio" && day === 6) {
      endHour = 16; // Saturdays in "Zona Rio" are from 9 AM to 4 PM
    } else if (selectedLocationValue === "Zona Rio" && day === 0) {
      endHour = 16; // Sundays in "Zona Rio" are from 9 AM to 4 PM
    }

    let currentHour = startHour;
    let currentMinute = 0;
    while (currentHour < endHour) {
      // Format the time in 12-hour format with AM/PM
      const period = currentHour < 12 ? "AM" : "PM";
      const displayHour = currentHour <= 12 ? currentHour : currentHour - 12;
      const time = `${displayHour.toString().padStart(2, "0")}:${currentMinute
        .toString()
        .padStart(2, "0")} ${period}`;
      times.push(time);
      currentMinute += interval;
      currentHour += Math.floor(currentMinute / 60);
      currentMinute %= 60;
    }
    return times;
  };

  useEffect(() => {
    setSelectedTimeValue("");
    setAppointmentConfirmed(false);
  }, [selectedSpecialistValue]);

  const handleLocationChange = (event) => {
    setSelectedLocationValue(event.target.value);
    setSelectedServiceValue("");
    setSelectedSpecialistValue("");
    setStartDate(null); // Reset the date when the location changes
    setShowDateTime(false);
  };

  const handleServiceChange = (event) => {
    setSelectedServiceValue(event.target.value);
    setSelectedSpecialistValue("");
    setShowDateTime(false);
  };

  const handleSpecialistChange = (event) => {
    setSelectedSpecialistValue(event.target.value);
    setShowDateTime(true);
  };

  const handleTimeChange = (event) => {
    setSelectedTimeValue(event.target.value);
  };

  const handleConfirmAppointment = () => {
    if (
      selectedLocationValue &&
      selectedServiceValue &&
      selectedSpecialistValue &&
      startDate &&
      selectedTimeValue
    ) {
      setAppointmentData({
        location: selectedLocationValue,
        service: selectedServiceValue,
        specialist: selectedSpecialistValue,
        date: startDate.toDateString(),
        time: selectedTimeValue,
      });
      setAppointmentConfirmed(true);
    }
  };

  // Function to filter out Sundays when "5 y 10" location is selected
  const filterWeekdays = (date) => {
    if (selectedLocationValue === "5 y 10") {
      const day = date.getDay();
      return day > 0;
    }
    return true; // For other locations, allow all days
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set the time to the beginning of today
  
  // Calculate the minimum date (today or later)
  const minDate = today;

  return (
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="px-4 mx-auto max-w-screen-md">
          <h2 className="heading text-center">Book an Appointment</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
            <div className="text-center">
              <br />
              <br />
              <h2 className="text-[20px] font-medium">Select Location</h2>
              <br />
              <select
                className="text-center border-[2px] rounded-lg px-4 py-4 custom-select"
                value={selectedLocationValue}
                onChange={handleLocationChange}
              >
                <option value="">Select a Location</option>
                <option value="Zona Rio">Zona Rio</option>
                <option value="5 y 10">5 y 10</option>
              </select>

              {selectedLocationValue && (
                <>
                  <br />
                  <br />
                  <h2 className="text-[20px] font-medium">Select Service</h2>
                  <br />
                  <select
                    className="text-center border-[2px] rounded-lg px-4 py-4 custom-select"
                    value={selectedServiceValue}
                    onChange={handleServiceChange}
                  >
                    <option value="">Select a Service</option>
                    {availableServices.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </>
              )}

              {selectedServiceValue && (
                <>
                  <br />
                  <br />
                  <h2 className="text-[20px] font-medium">
                    Select a Specialist
                  </h2>
                  <br />
                  <select
                    className="text-center border-[2px] rounded-lg px-4 py-4 custom-select"
                    value={selectedSpecialistValue}
                    onChange={handleSpecialistChange}
                  >
                    <option value="">Select a Specialist</option>
                    {staffByLocation[selectedLocationValue].map((staff) => (
                      <option key={staff} value={staff}>
                        {staff}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>
            <div className="text-center">
              {showDateTime && (
                <>
                  <br />
                  <br />
                  <h2 className="text-[20px] font-medium">Select Date</h2>
                  <br />
                  <DatePicker
                    placeholderText="Click to select an appointment"
                    className="text-center border-[2px] w-[280px] rounded-lg px-4 py-4"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="EEEE, MMMM d, yyyy"
                    filterDate={filterWeekdays}
                    minDate={minDate}
                  />
                  <br />
                  <br />
                  <h2 className="text-[20px] font-medium">Select Time</h2>
                  <br />
                  <select
                    className="text-center border-[2px] rounded-lg px-4 py-4 custom-select"
                    value={selectedTimeValue}
                    onChange={handleTimeChange}
                  >
                    <option value="">Select a Time</option>
                    {generateTimes(selectedSpecialistValue).map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <br />
                  <br />
                  {selectedTimeValue && (
                    <button
                      className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] 
                      flex-items-center justify-center rounded-[50px]"
                      onClick={handleConfirmAppointment}
                    >
                      Confirm Appointment
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
          {appointmentConfirmed && (
            <div className="mt-4">
              <p>
                Your appointment at {appointmentData.location} for{" "}
                {appointmentData.service} with {appointmentData.specialist} for{" "}
                {appointmentData.date} at {appointmentData.time} has been
                confirmed.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;
