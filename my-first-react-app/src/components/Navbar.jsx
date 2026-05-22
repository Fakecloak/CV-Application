export default function Navbar() {

    function downloadCV() {
    window.print();
  }
    return (
        <nav className="navbar">
            <h2 className="navbar-title">CV Maker</h2>

            <button className="navbar-button" onClick={downloadCV}>
                Download CV
            </button>
        </nav>
    );
}