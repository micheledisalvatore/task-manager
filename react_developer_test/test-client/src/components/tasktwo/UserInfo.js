import React, { useContext } from 'react';
import dataContext from '../../contexts/dataContext';

import './UserInfo.scss';

const UserInfo = () => {
  const { user: { username, email, website }, user } = useContext(dataContext);

  if (!Object.keys(user).length) {
    return null;
  }

  return (
    <div className="UserInfo">
      <div>
        username:
        { username }
      </div>
      <div>
        email:
        {email}
      </div>
      <div>
        website:
        {website}
      </div>
    </div>
  );
};

export default UserInfo;
