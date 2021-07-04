
import { BrowserRouter as Router, Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';

function Links() {
    return (
        <div>
            <Link to="/"> <HomeIcon style={{ color: "#3648ff" }} fontSize="large" /></Link>
            <Link to="/portfolio"><AssignmentIcon style={{ color: "#3648ff" }} fontSize="large" /></Link>
            <Link to="/skills"><SchoolIcon style={{ color: "#3648ff" }} fontSize="large" /></Link>
            <Link to="/contact"><AddIcCallIcon style={{ color: "#3648ff" }} fontSize="large" /></Link>            
        </div>
    )
}
export default Links;