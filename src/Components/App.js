import '../index.css';
import Header from './Header';
import Dashboard from '../Components/Dashboard/Dashboard';

export default function App() {
    return (
        <div className="app container">
            <Header />
        
            <Dashboard />
        </div>
    )
}