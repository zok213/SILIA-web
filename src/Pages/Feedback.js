import React from "react"; 
import "../App.css";
import AN from "../Assets/An.jpg"
import HAN from "../Assets/Han.png"
import KHANG from "../Assets/Khang.jpg"
import KHOI from"../Assets/Khoi.png"
import TAI from "../Assets/Minh Tài.jpg"
import VIET from "../Assets/Viet.jpg"
import WHITE from "../Assets/flower-white.png"
import YELLOW from "../Assets/flower-yellow.png"
import RED from "../Assets/flower-red.png"
import BLUE from "../Assets/flower-blue.png"
import PURPLE from "../Assets/flower-purple.png"
function Feedback() {
  return (
    <div>
      <div className="fieldset-wrapper">
        <fieldset>
          <legend className="sr-only">Effects</legend>
          <input type="radio" id="blink-effect" name="effect" value="blink" checked className="sr-only" />
        </fieldset>
      </div>

      <main>
        <section id="snapping" className="section">
          <div className="content">
            <h2 class = "title"><strong style={{color: "#f36666"}} >First</strong>,The purpose of <b>SILIA-web</b></h2>
            <div className="text">
              <img src={WHITE} alt="" />
              <div className = 't'>
              <h3>SILIA-web is a project that aims to develop an intelligent translation app that will help bridge communication between the hearing-impaired and the world.</h3>
              <h3>Use technology to turn speech or text into Vietnamese Sign Language (VSL) videos.</h3>
              <h3>Help the hearing-impaired community communicate more easily through a virtual interpreter.</h3>
              <h3>Let users learn VSL by watching and practicing with animated avatars.</h3>
              </div>
            </div>
          </div>
        </section>
        <section id="scrolling" className="section">
          <div className="content">
            <h2 class = "title"><strong style={{color: "#E7AD41FF"}} >Next</strong>,About our <em>devolopments</em> team</h2>
            <div className="text">
              <img src={YELLOW} alt="" />
              <div class="about">     
                  <div class="person">
                        <div class="containerabout">
                          <div class="container-inner">
                            <img
                              class="circle"
                              src=""
                            />
                            <img class="img img1" src={AN} alt="Nguyễn Lê Khánh An" />
                          </div>
                        </div>
                        <div class="divider"></div>
                        <div class="name">Nguyễn Lê Khánh An</div>
                  </div>
                  <div class="person">
                        <div class="containerabout">
                          <div class="container-inner">
                            <img
                              class="circle"
                              src=""
                            />
                            <img class="img img1" src={KHANG} alt="Nguyễn Bắc Bảo Khang" />
                          </div>
                        </div>
                        <div class="divider"></div>
                        <div class="name">Nguyễn Bắc Bảo Khang</div>
                  </div>

              </div>
            </div>
          </div>
        </section>
        <section id="layout" className="section">
          <div className="content">
            <h2 class = "title"><strong style={{color: "#4DD2F3FF"}} >Then</strong>,Come to our <em>media and event </em> team</h2>
            <div className="text">
              <img src={BLUE} alt="" />
              <div class="about">     

                  <div class="person">
                        <div class="containerabout">
                          <div class="container-inner">
                            <img
                              class="circle"
                              src=""
                            />
                            <img class="img img1" src={KHOI} alt="Võ Huỳnh Khôi" />

                          </div>
                        </div>
                        <div class="divider"></div>
                        <div class="name">Võ Huỳnh Khôi</div>
                  </div>
                  <div class="person">
                        <div class="containerabout">
                          <div class="container-inner">
                            <img
                              class="circle"
                              src=""
                            />
                              <img class="img img1" src={TAI} alt="Mai Phước Minh Tài" /> 
                          </div>
                        </div>
                        <div class="divider"></div>
                        <div class="name">Mai Phước Minh Tài</div>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <section id="transition" className="section">
          <div className="content">
            <h2 class = "title"><strong style={{color: "#E46363FF"}} >Finally</strong>,See our <em>management</em> team </h2>
            <div className="text">
              <img src={RED} alt="" />
              <div class="about" >     
                  <div class="person">
                        <div class="containerabout">
                          <div class="container-inner">
                            <img
                              class="circle"
                              src=""
                            />
                            <img class="img img1" src={VIET} alt="Nguyễn Xuân Việt" />
                          </div>
                        </div>
                        <div class="divider"></div>
                        <div class="name">Nguyễn Xuân Việt</div>
                  </div>
                  <div class="person">
                        <div class="containerabout">
                          <div class="container-inner">
                            <img
                              class="circle"
                              src=""
                            />
                            <img class="img img1" src={HAN} alt="Huỳnh Ngọc Hân" />

                          </div>
                        </div>
                        <div class="divider"></div>
                        <div class="name">Huỳnh Ngọc Hân</div>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <section id="caveats" className="section">
          <div className="content">
            <h2 class = "title">Ways to <strong class = "purple">get in touch</strong> with us</h2>
            <div className="text">
              <img src= {PURPLE} alt="" />
              <div className="p">
                <h3>Our Fanpage: https://shorturl.at/9Fv3S</h3>
                <h3>Our Email: SILIA-web.danghinhthanham@gmail.com</h3>
                <h3>Call us: +84896233053 </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Feedback;
