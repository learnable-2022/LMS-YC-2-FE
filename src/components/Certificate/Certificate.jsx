import { Logo, lowerFrameImg, medalGoldIcon, upperFrameImg } from '../../assets';





function Certificate() {
  return (
    <div>
        <div style={{width: "100%", height: "100vh", position: "relative"}}>
            <div style={{ width: "50px", height: "100vh", backgroundColor: "#F8A711", position: "absolute", left: "0", top: "0" }}>

            </div>


            <div style={{ position: "fixed", top: "0" }}>
                <img src={upperFrameImg} alt=""  style={{ height: "290px", width: "100%"}}/>
            </div>

            
            <div style={{ position: "absolute", top: "200px", left: "400px"}}>
                <div>
                    <h1 style={{ fontFamily: "Wicked Mouse", fontStyle: "normal", fontWeight: "bold", fontSize: "40px", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                        <span>CE</span>
                        <span style={{color: "#009A49"}}>RT</span>
                        <span style={{color: "#FF57E4"}}>IFI</span>
                        <span style={{color: "#F8A711"}}>CA</span>
                        <span>TE</span>
                        <span style={{color: "#009A49"}}> OF </span>
                        <span>COMP</span>
                        <span style={{color: "#009A49"}}>LETION</span>
                    </h1>
                </div>


                <div style={{fontFamily: "Allura", fontStyle: "italic", fontWeight: "400", fontSize: "20px"}}>
                    <p style={{ textAlign: "center", padding: "20px 0"}}>
                        This is to certify that
                    </p>
                </div>


                <div>
                    <input type="text" style={{  marginTop: "40px", width: "100%", paddingLeft: "200px", outline: "none", borderTop: "none", borderRight: "none", borderLeft: "none", borderBottom: "1px solid #000000"}}/>
                </div>


                <div>
                    <p style={{fontStyle: "normal", fontWeight: "600", fontSize: "20px", textAlign: "center", paddingTop: "10px", color: "rgba(17, 17, 17, 0.5)"}}>
                        has successfully completed the course
                    </p>
                </div>


                <div>
                    <input type="text" placeholder="COURSE NAME HERE" style={{ marginTop: "40px", paddingLeft: "200px", fontWeight: "900", color: "#000000", width: "100%", outline: "none", borderTop: "none", borderRight: "none", borderLeft: "none", borderBottom: "1px solid #000000"}} />
                </div>


                <div style={{  display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "60px"}}>
                    <div>
                        <input type="text" style={{  width: "70%", outline: "none", borderTop: "none", borderRight: "none", borderLeft: "none", borderBottom: "1px solid #000000"}} />
                        <p style={{ fontWeight: "bold"}}>Date</p>
                    </div>

                    <div>
                        <img src={medalGoldIcon} alt="" style={{ width: "20%", height: "20%", marginLeft: "80px"}} />
                    </div>

                    <div>
                        <img src={Logo} alt="" style={{ width: "50%", height: "50%", float: "right"}} />
                    </div>
                </div>
            </div>


            <div style={{ width: "50px", height: "100vh", backgroundColor: "#F8A711", position: "absolute", right: "0"}}>

            </div>


            <div style={{  position: "fixed", bottom: "0", top: "530px"}}>
                <img src={lowerFrameImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Certificate
