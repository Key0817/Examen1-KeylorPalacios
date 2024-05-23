export default function skills(){
    return(
        <div className="skills container d-flex">
            <div className="saludo intro col-lg-6">
                <h1>My <span> Skills </span></h1>
                <p>Learn more about my skills in which I excel more and have more knowledge</p>
            
                <a className="btnp btn-about" href="#projects">See Projects</a>
            </div>
            <div className="list-skills col-lg-6">
                <ol>
                    <li><span>01.</span> Html 5</li>
                    <li><span>02.</span> Css</li>
                    <li><span>03.</span> Boostrap</li>
                    <li><span>04.</span> React</li>
                    <li><span>05.</span> Git & github</li>
                    <li><span>06.</span> NextJs</li>
                </ol>
            </div>
        </div>
    )
}