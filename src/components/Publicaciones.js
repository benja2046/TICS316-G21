import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import './Publicaciones.css';
import Post from './Post'
import Avatar from '@mui/material/Avatar';



function Home() {
    const [newPost, setNewPost] = useState({
        username: "TomasPantoja",
        avatarImage: "/static/images/avatar/1.jpg",
        image: "",
        title: "",
        description: ""
    });

    const [posts, setPost] = useState([
        {
            username: "TomasPantoja",
            avatarImage: "/static/images/avatar/1.jpg",
            image: "00ejis46.jpg",
            title: "Museo Conceptual, Asia",
            description: "Bienvenido al Museo Conceptual, un espacio único donde las fronteras entre el arte y la imaginación se difuminan, creando una experiencia verdaderamente inmersiva. Este museo va más allá de las tradicionales galerías para explorar las infinitas posibilidades de la creatividad y el pensamiento conceptual."
        },
        {
            username: "TomasPantoja",
            avatarImage: "/static/images/avatar/1.jpg",
            image: "00ejis46.jpg",
            title: "Museo Conceptual, Asia",
            description: "Bienvenido al Museo Conceptual, un espacio único donde las fronteras entre el arte y la imaginación se difuminan, creando una experiencia verdaderamente inmersiva. Este museo va más allá de las tradicionales galerías para explorar las infinitas posibilidades de la creatividad y el pensamiento conceptual."
        },
        {
            username: "TomasPantoja",
            avatarImage: "/static/images/avatar/1.jpg",
            image: "00ejis46.jpg",
            title: "Museo Conceptual, Asia",
            description: "Bienvenido al Museo Conceptual, un espacio único donde las fronteras entre el arte y la imaginación se difuminan, creando una experiencia verdaderamente inmersiva. Este museo va más allá de las tradicionales galerías para explorar las infinitas posibilidades de la creatividad y el pensamiento conceptual."
        },
        {
            username: "TomasPantoja",
            avatarImage: "/static/images/avatar/1.jpg",
            image: "00ejis46.jpg",
            title: "Museo Conceptual, Asia",
            description: "Bienvenido al Museo Conceptual, un espacio único donde las fronteras entre el arte y la imaginación se difuminan, creando una experiencia verdaderamente inmersiva. Este museo va más allá de las tradicionales galerías para explorar las infinitas posibilidades de la creatividad y el pensamiento conceptual."
        },
        {
            username: "FerUai2018",
            avatarImage: "retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.avif",
            image: "123.jpg",
            title: "CNC X8 exagonal",
            description: "Una fresadora CNC (Control Numérico Computarizado) exagonal X8 es una herramienta de vanguardia diseñada para la fabricación precisa y eficiente. Con su configuración hexagonal única, este equipo ofrece una versatilidad excepcional al permitir el mecanizado desde seis direcciones distintas. Cada eje proporciona un movimiento controlado por ordenador, lo que significa que la fresadora puede realizar cortes y grabados precisos en diferentes ángulos y profundidades. La disposición exagonal optimiza la eficiencia al permitir un acceso más completo a la pieza de trabajo, lo que es especialmente beneficioso para proyectos complejos que requieren múltiples enfoques de corte. Además, la CNC exagonal X8 destaca por su capacidad para manejar una variedad de materiales con precisión, desde maderas y plásticos hasta metales, brindando a los fabricantes y diseñadores una herramienta potente y versátil para dar vida a sus proyectos con un nivel excepcional de detalle y exactitud."
        }
    ]);

    useEffect(() => {

    }, [posts]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost({
            ...newPost,
            [name]: value
        });
    };

    return (
        <div className="Home">


            <div className="Home_header">
                <div className='left_header'>
                    <img
                        className="Home_headerImage"
                        src='/logoR.png'
                        alt="logo rawcreate"
                        width="auto"
                        height="40"
                    />
                </div>

                <Link to="/Login">
                    <img
                        className="Home_Imagebrand"
                        src='/Captura_de_pantalla_2023-11-16_233049-removebg-preview.png'
                        alt="rawcreate"
                        height="40"
                        width="auto"

                    />

                </Link>


                <div className='rigth_header'>

                    <Link className='logout_button' to="/Login">
                        Log out
                    </Link>

                    <Link to="/Login">
                        <Avatar
                            className='post_avatar'
                            alt="Tomas Pantoja"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 30, height: 30 }}
                        />
                    </Link>

                </div>

            </div>


            <div className='body'>

                <div className='posts'> {
                    posts.map(post => (
                        <Post username={post.username}
                            avatarImage={post.avatarImage}
                            image={post.image}
                            title={post.title}
                            description={post.description} />
                    ))
                }
                </div>
                <div className='upload'>
                    <h2>Subir Publicación</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        // Agregar lógica para agregar el nuevo post al estado 'posts'
                        setPost([...posts, newPost]);
                        // Limpiar los campos del formulario
                        setNewPost({
                            username: "TomasPantoja",
                            avatarImage: "/static/images/avatar/1.jpg",
                            image: "",
                            title: "",
                            description: ""
                        });
                    }}>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={newPost.title}
                            onChange={handleInputChange}
                        />
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={newPost.description}
                            onChange={handleInputChange}
                        />
                        <label>Image:</label>
                        <input
                            type="file"
                            name="image"
                            onChange={(e) => {
                                // Obtener la primera imagen del conjunto seleccionado
                                const file = e.target.files[0];
                                // Convertir la imagen a una URL de datos (data URL)
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    setNewPost({
                                        ...newPost,
                                        image: reader.result // La URL de datos de la imagen
                                    });
                                };
                                if (file) {
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />
                        <button type="submit">Agregar Post</button>
                    </form>

                </div>
            </div>



        </div>
    );
}

export default Home;
