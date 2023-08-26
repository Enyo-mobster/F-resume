function Navcard(){
    return(
        <div className="navcard" style={{border:"1px solid black"}}>
            <div className="home">
            <img src="Homeicone.png" alt="" />
            <p htmlFor="">Home</p>
            </div>
            <div className="all">
            <img src="resume.png" alt="" />
            <p htmlFor="">Resume</p>
            </div>
           <div className="all">
           <img src="work.png" alt="" />
           <p htmlFor="">Work</p>
           </div>
            <div className="all">
            <img src="contact.png" alt="" />
            <p htmlFor="">Contact</p>
            </div>
        </div>
    )
}

export default Navcard