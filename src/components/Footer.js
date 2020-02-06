import React from 'react'
import p1 from "../resource/coulson.gif";
import p2 from "../resource/kree.gif";
import border from "../resource/bgBar.gif";
import counter from "../resource/counter-purple2.gif";
import email from "../resource/email.gif";

export default function Footer() {
    const counterImgS = {
        "width": "178px",
        "margin-left": "299px",
    };
    return (
        <div className="Footer-call-out-container" style={{"display":"flex"}}>
            <div className="Footer-call-out" style={{"flex-grow":"1"}}>
                <img className="Footer-img" src={p1}/> 
            </div>
            <div className="Footer-call-out" style={{"flex-grow":"3"}}>
                <div style={{"flexDirection":"column"}}>
                    <div> 
                        <img src={border}/>
                    </div>
                    <div>
                        <img src={email}/>  
                        support@IGF.UNI
                        <img src={email}/>  
                        <img src={counter} style={counterImgS}/>
                    </div>
                </div>
            </div>
            <div className="Footer-call-out" style={{"flex-grow":"1"}}>
                <img className="Footer-img" src={p2}/> 
            </div>
        </div>
    )
}
