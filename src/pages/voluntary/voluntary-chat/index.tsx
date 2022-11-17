import { useLocation } from "react-router-dom";

export default function VoluntaryChat(){
    const location = useLocation();
    
    const {birthday, city, email, name, phone, state} = location.state;
    
    return <div>Voluntary chat works!</div>
}