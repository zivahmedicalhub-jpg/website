import './App.css';
import BrandLogo from './components/BrandLogo';

function App() {
    return (
        <div className="app-container">
            {/* Standalone Brand Logo Display */}
            <BrandLogo />

            {/* You can add more content below */}
            <div className="content-section">
                <p>Welcome to Zivah Medical Hub - Your trusted healthcare partner.</p>
            </div>
        </div>
    );
}

export default App;
