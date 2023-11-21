import Header from './Header';
import MyCard from './MyCard';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const perritos = [
    {
      id: 1,
      name: "Max",
      image: "src/assets/imgs/perro1.jpeg",
      description: "Un perrito amigable y juguetón.",
      tags: [
        { text: "Amigable", color: "success" },
        { text: "Activo", color: "primary" }
      ]
    },
    {
      id: 2,
      name: "Dali",
      image: "src/assets/imgs/perro2.jpeg",
      description: "Cariñosa y tranquila, ama los paseos al aire libre.",
      tags: [
        { text: "Amigable", color: "success" },
        { text: "Activo", color: "primary" }
      ]
    },
    {
      id: 3,
      name: "Capi",
      image: "src/assets/imgs/perro3.jpeg",
      description: "Jugeton y ama el mar.",
      tags: [
        { text: "Amigable", color: "success" },
        { text: "Mar", color: "primary" }
      ]
    },
    {
      id: 4,
      name: "Bella",
      image: "src/assets/imgs/perro4.jpeg",
      description: "Amante de los deportes acuaticos y del sol.",
      tags: [
        { text: "Amigable", color: "success" },
        { text: "Sol", color: "primary" }
      ]
    }
  ];

  return (
    <div>
      <Header title="Adopta un perrito" />
      <div className="container">
      {perritos.map(perrito => (
        <MyCard
          key={perrito.id}
          name={perrito.name}
          image={perrito.image}
          description={perrito.description}
          tags={perrito.tags}

        />
      ))}
      </div>
      <Footer description="Galería de perritos para adopción" />
    </div>
  );
}

export default App;
