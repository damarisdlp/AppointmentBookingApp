import React, { useState } from "react";
import { mockAppointments } from "../mockData";

const Account = ({ user, onUpdateUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [displayMode, setDisplayMode] = useState("userProfile");

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    onUpdateUser(editedUser);
    setEditMode(false);
  };

  const handleChange = (e, field) => {
    setEditedUser({ ...editedUser, [field]: e.target.value });
  };

  const handleUserButtonClick = () => {
    setDisplayMode("userProfile");
  };

  const handleAppointmentsButtonClick = () => {
    setDisplayMode("appointments");
  };

  const handlePaymentDetailsButtonClick = () => {
    setDisplayMode("paymentDetails");
  };

  // Filter appointments for the logged-in user
  const userAppointments = mockAppointments.filter(
    (appointment) => appointment.userId === user.id
  );

  return (
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="px-4 mx-auto max-w-screen-md">
          <h2 className="heading text-center">Profile Information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-custom gap-[40px] ">
            <div className="lg:w-[175px]">
              <br />
              <div className="vertical-buttons">
                <button
                  className={`bg-primaryColor py-2 px-2 text-white font-[600] w-full h-[44px] 
                    flex-items-center justify-center rounded-[50px] ${
                      displayMode === "userProfile" ? "active" : ""
                    }`}
                  onClick={handleUserButtonClick}
                >
                  User Profile
                </button>
                <button
                  className={`bg-primaryColor py-2 px-2 text-white font-[600] w-full h-[44px] 
                    flex-items-center justify-center rounded-[50px] ${
                      displayMode === "appointments" ? "active" : ""
                    }`}
                  onClick={handleAppointmentsButtonClick}
                >
                  Appointments
                </button>
                <button
                  className={`bg-primaryColor py-2 px-2 text-white font-[600] w-full h-[44px] 
                    flex-items-center justify-center rounded-[50px] ${
                      displayMode === "paymentDetails" ? "active" : ""
                    }`}
                  onClick={handlePaymentDetailsButtonClick}
                >
                  Payment Details
                </button>
              </div>
            </div>

            <div className="lg:w-[561px]">
              {displayMode === "userProfile" ? (
                <>
                  <br />
                  {/* User profile input fields */}
                  <p>First Name</p>
                  <input
                    placeholder={user.firstName}
                    value={editMode ? editedUser.firstName : user.firstName}
                    className="border-[2px] rounded-lg px-2 py-2"
                    disabled={!editMode}
                    onChange={(e) => handleChange(e, "firstName")}
                  />
                  <br />
                  <br />
                  <p>Last Name</p>
                  <input
                    placeholder={user.lastName}
                    value={editMode ? editedUser.lastName : user.lastName}
                    className="border-[2px] rounded-lg px-2 py-2"
                    disabled={!editMode}
                    onChange={(e) => handleChange(e, "lastName")}
                  />
                  <br />
                  <br />
                  <p>Email</p>
                  <input
                    placeholder={user.email}
                    value={editMode ? editedUser.email : user.email}
                    className="border-[2px] rounded-lg px-2 py-2"
                    disabled={!editMode}
                    onChange={(e) => handleChange(e, "email")}
                  />
                  <br />
                  <br />
                  <p>Username</p>
                  <input
                    placeholder={user.username}
                    value={editMode ? editedUser.username : user.username}
                    className="border-[2px] rounded-lg px-2 py-2"
                    disabled={!editMode}
                    onChange={(e) => handleChange(e, "username")}
                  />
                  <br />
                  <br />
                  <p>Password</p>
                  <input
                    placeholder={user.password}
                    value={editMode ? editedUser.password : user.password}
                    className="border-[2px] rounded-lg px-2 py-2"
                    disabled={!editMode}
                    onChange={(e) => handleChange(e, "password")}
                  />
                  <br />
                  <br />
                  <button
                    className="bg-primaryColor py-2 px-2 text-white font-[600] w-[200px] h-[44px] 
                  flex-items-center justify-center rounded-[50px]"
                    onClick={editMode ? handleSave : handleEdit}
                  >
                    {editMode ? "Save" : "Edit"}
                  </button>
                </>
              ) : displayMode === "appointments" ? (
                <div>
                  <br />
                  {userAppointments.length > 0 ? (
                    // Display appointments if the user has any
                    <ul>
                      {userAppointments.map((appointment) => (
                        <div>
                          <li className="border-[2px] py-4 px-4 font-[400] w-full rounded-[15px]" 
                          key={appointment.id}>
                            <p>Date: {appointment.date}</p>
                            <p>Time: {appointment.time}</p>
                            <p>Location: {appointment.location}</p>
                            <p>Service: {appointment.service}</p>
                            <p>Specialist: {appointment.specialist}</p>
                          </li>
                          <br />
                        </div>
                      ))}
                    </ul>
                  ) : (
                    // Display "No Appointments" if the user has no appointments
                    <p>No Appointments</p>
                  )}
                </div>
              ) : displayMode === "paymentDetails" ? (
                <div>
                  <br />
                  <p>No Card on File</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
