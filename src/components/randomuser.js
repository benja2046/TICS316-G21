// api.js

export const searchUserByUsername = async (username) => {
    try {
      const response = await fetch(`https://randomuser.me/api/?seed=${username}`);
      const data = await response.json();
  
      const user = data.results[0];
  
      return {
        username: `${user.name.first} ${user.name.last}`,
        bio: 'Una breve descripción sobre ti',
        imageUrl: user.picture.large,
      };
    } catch (error) {
      console.error('Error fetching user by username:', error);
      throw error; // Puedes manejar el error según tus necesidades
    }
  };
  