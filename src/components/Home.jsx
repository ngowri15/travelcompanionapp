import {
    Link
} from "react-router-dom";
import Navbar from './Navbar';
import "./styles.css"

function Home() {

    return (       
        <>
            <Navbar />
			<div className="button-container">
			<Link to="/SignIn"><input type="submit" value="Sign In"/></Link>
        	</div>
		</> 
	)
}
export default Home;