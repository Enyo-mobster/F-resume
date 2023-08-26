function Profilecard(){
    return(
        <div className="box">
            <div className="label">
                <img className="img" src="profile.png" alt="" />
           <h1> Beatrice Wambui</h1>
            </div>
            <div className="label1">
                <p>Full stack developer</p>
            </div>
            <div className="f">
               
            <a href="https://facebook.com"> <li className="b"><img src="Vector4.png" alt="" /></li></a>
                <li className="b"><img  src="Vector (1).png" alt=""  /></li>
                <li className="b"><img src="Vector (2).png" alt="" /></li>
                <li className="b"><img src="Vector (3).png" alt="" /></li>
            </div>
            <div className="box1">
                <div className="mobi">
                    <img src="phone.png" alt="" />
                    <label htmlFor="">1800-180-0020</label>
                </div>
                <div className="email">
                    <img src="email.png" alt="" />
                    <label htmlFor="">BeatriceWambui@gmail.com</label>
                </div>
                <div className="location">
                    <img src="location.png" alt="" />
                    <label htmlFor="">Nairobi, Kenya</label>
                </div>

                <div className="down">
                    <img src="download.png" alt="" />
                    <label htmlFor="">Download  Resume</label>
                </div>

            </div>
        </div>
    )
}

export default Profilecard