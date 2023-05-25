import '../index.css';
import Header from './Header';
import Dashboard from '../Components/Dashboard/Dashboard';
import Conversations from './Conversations/Conversations';
import { Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <div className="app container">
            <Header />
        
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/:name' element={<Conversations />} />
            </Routes>
        </div>
    )
}