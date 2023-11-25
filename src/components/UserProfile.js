import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Realizar una búsqueda de detalles del usuario usando el nombre de usuario
    // y actualizar el estado de userData
  }, [username]);

  if (!userData) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{userData.username}</h1>
      <p>{userData.bio}</p>
      <img src={userData.imageUrl} alt="User" />
    </div>
  );
};

export default UserProfile;
