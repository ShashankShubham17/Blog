import './Ourstory.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Ourstory() {
  return (
    <div className="text-white" style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      {/* Header */}
      <nav className="navbar navbar-dark px-4 py-3 border-bottom">
        <span className="navbar-brand mb-0 h1">Medium</span>
       
      </nav>

      {/* Hero Section */}
      <div className="container my-5 px-4">
        <h1 className="display-1 bold">Everyone has a story to tell</h1>
        <p className="mt-4 fs-5">
          Ultimately, our goal is to deepen our collective understanding of the world
          through the power of writing.
        </p>
      </div>

      {/* Description */}
      <div className="container px-4 mb-5">
        <p className="fs-5">
          We believe that what you read and write matters. Words can divide or empower us,
          inspire or discourage us. In a world where the most sensational and surface-level
          stories often win, we’re building a system that rewards depth, nuance, and time
          well spent. A space for thoughtful conversation more than drive-by takes, and
          substance over packaging.
        </p>
        <p className="fs-5">
          Over 100 million people connect and share their wisdom on Medium every month.
          They’re software developers, amateur novelists, product designers, CEOs, and
          anyone burning with a story they need to get out into the world. They write about
          what they’re working on, what’s keeping them up at night, what they’ve lived
          through, and what they’ve learned that the rest of us might want to know too.
        </p>
         <p className="fs-5">
          Instand of selling ads or selling your data,we're supported by a growing community
          of over a million Medium members who belive in our mission.If yo're new here,
          Startreading.Dive deeper into whatever matters to you.Find a post that helps
          you learn something new,Or reconsider something familiar-and then Write your story.
         </p>
      </div>

      {/* CTA Buttons */}
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-12 py-4 bg-dark border-top border-bottom">
            <h2>Start reading <span className="float-end me-3">&rarr;</span></h2>
          </div>
          <div className="col-12 py-4 bg-white text-dark border-bottom">
            <h2>Start writing <span className="float-end me-3">&rarr;</span></h2>
          </div>
          <div className="col-12 py-4 bg-dark text-white border-bottom">
            <h2>Become a member <span className="float-end me-3">&rarr;</span></h2>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-muted py-3" style={{ fontSize: "0.9rem" }}>
        <span>About</span> · <span>Terms</span> · <span>Privacy</span> · <span>Help</span> · <span>Teams</span> · <span>Press</span>
      </footer>
    </div>
  );
}

export default Ourstory;
