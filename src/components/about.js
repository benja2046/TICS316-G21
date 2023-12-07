import { Link, useNavigate } from 'react-router-dom';
import './About.css'; // Importar el archivo CSS de estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import NAV from './navbar.js';
import Card from './Card.js'
import Footer from './footer.js';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const cards = [
  {
    id: 1,
    title: 'Diseño Estilizado\n ',
    encargado: 'Agustín Vargas',
    image: '',
    url: "\nEncargado de darle el estilo a la página"
  },
  {
    id: 2,
    title: 'HTML\n',
    encargado: 'Tomas Pantoja',
    image: '',
    url: 'Encargado de darle la estructura a la página'
  },

  {
    id: 3,
    title: 'Funcionalidad',
    encargado: 'Benjamin Gonzalez',
    image: '',
    url: 'Encargado de la funcionalidad'
  }
]
const Menu = () => {
  const navigate = useNavigate();
  const { username } = useParams(); // Obtiene el parámetro de la URL (nombre de usuario)
  const [userData, setUserData] = useState({
    username: 'Nombre de usuario',
    bio: 'Una breve descripción sobre ti',
    imageUrl: 'https://via.placeholder.com/150',
  });

  const searchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const randomUserData = data.results[0];
      setUserData({
        username: randomUserData.login.username,
        bio: 'Una breve descripción sobre ti',
        imageUrl: randomUserData.picture.large,
      });
    } catch (error) {
      console.error('Error fetching random user:', error);
    }
  };

  const searchUserByUsername = async (username) => {
    try {
      const response = await fetch(`https://randomuser.me/api/?seed=${username}`);
      const data = await response.json();

      // Extrae la información del primer resultado (puedes ajustar según la estructura de la respuesta)
      const user = data.results[0];

      // Actualiza el estado con la información del usuario encontrado
      setUserData({
        username: `${user.name.first} ${user.name.last}`,
        bio: 'Una breve descripción sobre ti',
        imageUrl: user.picture.large,
      });
    } catch (error) {
      console.error('Error fetching user by username:', error);
    }
  };


  useEffect(() => {
    if (username) {
      searchUserByUsername(username);
    } else {
      searchRandomUser();
    }
  }, [username]);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className='about'>
      <div>
        <nav class=''>
          <NAV title='navbar' onSearch={searchRandomUser} />
        </nav>
      </div>
      <section class="hero">
        <div class="contenido-hero">
          <h2>Trabajo para el proyecto</h2>
          <div class="location">
            <div class="text">
              <p>Somos un apasionado equipo de estudiantes provenientes de la Universidad Adolfo Ibáñez, comprometidos en el emocionante viaje de aprendizaje del diseño de software. Nos une la curiosidad y el deseo de crear soluciones innovadoras y efectivas a los desafíos tecnológicos actuales. A través del curso de Diseño de Software, estamos explorando las metodologías y prácticas más avanzadas para desarrollar aplicaciones impactantes y funcionales. Nuestra diversidad de habilidades y perspectivas nos permite abordar los problemas desde diferentes ángulos, enriqueciendo así nuestra capacidad para generar soluciones únicas y centradas en el usuario.</p>
              <p>Esta plataforma está concebida como una red social especializada en la colaboración y el intercambio de ideas dentro del ámbito profesional. Su principal objetivo es promover la creación de una comunidad dinámica y creativa, donde los usuarios puedan compartir sus proyectos y desafíos laborales. A través de la publicación de contenido, los miembros tienen la oportunidad de presentar sus proyectos en curso, exponer los obstáculos que enfrentan y solicitar la opinión de la comunidad para superarlos.
La interacción se ve facilitada por características como el gusto por expresar apoyo y la capacidad de comentar cada publicación. Esto no sólo le permite recibir comentarios inmediatos, sino que también fomenta la construcción de relaciones profesionales sólidas. La plataforma está diseñada para fomentar la participación activa, promoviendo el diálogo constructivo y la colaboración entre los miembros.
La diversidad de perfiles profesionales presentes en la red social crea un entorno propicio para el aprendizaje mutuo. Los usuarios pueden encontrar inspiración, soluciones creativas y consejos de expertos al conectarse con otras personas que comparten intereses y experiencias similares. La plataforma busca ser un espacio inclusivo donde converjan profesionales de diversas disciplinas para compartir conocimientos, superar desafíos y promover la innovación.
En resumen, esta red social está diseñada para ser un espacio dinámico y colaborativo donde profesionales de diversas áreas comparten sus proyectos, enfrentan desafíos y construyen una comunidad que fomenta la creatividad, el aprendizaje mutuo y la colaboración constante.
</p>
            </div>

          </div>
          <a class="button" href="#equipo">conoce al equipo</a>
        </div>
      </section>
      <main class="content shadow" id='equipo'>
        <h2 class="title" style={{ padding: '10px' }}>Conoce al equipo</h2>
        <div className='row menu subjects'>
          {    //Creamos el map para no tener que escribir reiteradas veces los paneles
            cards.map(card => (
              <div className='col-md-4 member' key={card.id}>
                <Card title={card.title} url={card.url} encargado={card.encargado} />
              </div>

            ))
          }
        </div>
      </main>
      <footer>
        <Footer title='footer' />
      </footer>
    </div>
  );
};

export default Menu;