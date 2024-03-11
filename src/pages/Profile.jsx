import React, { useState } from "react";

function Profile() {
  const [userData, setUserData] = useState({
    name: "RajuPerikala",
    email: "rajuperikala@gmail.com",
  });
  const [edit, setEdit] = useState(false)
  const { name, email } = userData;
  function onChange(e) {
    setUserData([
      ...userData,
      [e.target.id]= e.target.value
    ])
  }
  return (
    <div>
      <div className="flex mt-6 justify-center">
        <img
          src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
          alt="profile pic"
          className="lg:h-40 lg:w-40 rounded-full md:w-40 md:h-40 md:rounded-full sm:h-40 sm:w-40"
        />
        <div className="mt-4 ml-8">
          <input type="text" value={name} onChange={onChange}className="block p-1 bg-transparent outline-none border-none text-xl font-bold" disabled={edit}/>
          <input type="text" value={email} className="block  p-1  bg-transparent outline-none border-none text-xl font-semibold" disabled={edit}/>
          <button className="p-1 text-l bg-dark rounded text-lightgray" onClick={() => setEdit(!edit)}>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
