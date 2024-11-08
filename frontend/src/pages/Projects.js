import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const projects = [
  {
    title: 'Pelikani',
    description: 'Pelikani eshte krijuar per individet dhe agjencite e pasurive te paluajtshme,duke ofruar nje hapesire te integruar per menaxhimin e listimeve de prezantimin e sherbimeve tuaja.Made with Laravel/React',
    image: `${process.env.PUBLIC_URL}/pelikani.jpeg`,
    link: 'https://pelikani.net/'
  },
  {
    title: 'Selita Finesse',
    description: 'Një faqe blerjeje e ndërtuar me Next.js ofron një përvojë të shpejtë dhe të rrjedhshme për përdoruesit, me katalog të dinamik të produkteve, autentikim të përdoruesit, shportë dhe proces blerjeje. Next.js siguron performancë të lartë dhe optimizim për motorët e kërkimit (SEO), duke e bërë faqen të përshtatshme për rritje dhe shkallëzim. Përdoruesit mund të shfletojnë produkte, të shtojnë artikuj në shportë dhe të kryejnë blerjen në mënyrë të sigurt.',
    image: `${process.env.PUBLIC_URL}/selita.jpg`,
    link: 'https://mariooconstruction.com/'
  },
  {
    title: 'Mario Construction',
    description: 'Mario Construction është një faqe prezantuese (landing page) për një kompani ndërtimi, e krijuar për të ofruar një përvojë të pastër dhe profesionale për vizitorët. Ndërtuar me TypeScript, CSS, dhe JavaScript, faqja është e optimizuar për performancë dhe dizajn të përgjegjshëm, duke u përshtatur për të gjitha pajisjet. Me një pamje moderne dhe seksione të dedikuara për projektet e realizuara, shërbimet, dhe informacionin e kontaktit, Mario Construction synon të tërheqë klientët dhe të prezantojë cilësinë e punës së kompanisë në ndërtim.',
    image: `${process.env.PUBLIC_URL}/mario.png`,
    link: 'https://selitafinesse.com/'
  },
];

function Projects() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100" onClick={() => window.open(project.link, '_blank')} style={{ cursor: 'pointer' }}>
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;