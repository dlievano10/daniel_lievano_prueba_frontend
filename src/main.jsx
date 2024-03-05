import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './Views/App.jsx';

// Styles
import './style-general.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)