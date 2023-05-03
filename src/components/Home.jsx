import React from "react";
import "./styles.css"
import Header from "./header/Header"
import Content from "./content/Content";
import Footer from "./foot/Footer"

function Home() {

    return (       
       <div className="home">
		
			<Header />	
			<Content />
			{/*<Footer />*/}
			
		</div>
	)
}
export default Home;