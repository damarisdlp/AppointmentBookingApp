import React, { useState } from "react";

const Account = ({ user, onUpdateUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

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

  return (
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="px-4 mx-auto max-w-screen-md ">
          <h2 className="heading text-center">Profile Information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-custom gap-[40px] ">
            <div className=" lg:w-[175px]">
              <br />
              <div className="vertical-buttons">
                <button
                  className="bg-primaryColor py-2 px-2 text-white font-[600] w-full h-[44px] 
                  flex-items-center justify-center rounded-[50px]"
                >
                  User Profile
                </button>
                <button
                  className="bg-primaryColor py-2 px-2 text-white font-[600] w-full h-[44px] 
                  flex-items-center justify-center rounded-[50px]"
                >
                  Appointments
                </button>
                <button
                  className="bg-primaryColor py-2 px-2 text-white font-[600] w-full h-[44px] 
                  flex-items-center justify-center rounded-[50px]"
                >
                  Payment Details
                </button>
              </div>
            </div>

            <div className="lg:w-[561px]">
              <br /> <p>First Name</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
