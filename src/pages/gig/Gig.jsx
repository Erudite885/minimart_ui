import React from "react";
import "./Gig.scss";
import { ReactIcon } from "../../assets";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">MINIMART > GRAPHICS & DESIGN ></span>
          <h1>i will create ai generated art for you</h1>

          <div className="user">
            <img src={ReactIcon} alt="" className="pp" />
            <span>Jane Does</span>
            <div className="stars">
              <img src={ReactIcon} alt="" />
              <img src={ReactIcon} alt="" />
              <img src={ReactIcon} alt="" />
              <img src={ReactIcon} alt="" />
              <img src={ReactIcon} alt="" />
              <span>5</span>
            </div>
          </div>
          {/* <Slider slidesToshow={1} arrowsScroll={1} className="slider">
            <img src={ReactIcon} alt="" />
            <img src={ReactIcon} alt="" />
            <img src={ReactIcon} alt="" />
          </Slider> */}
          <h2>About This Gig</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            recusandae. Unde ipsam assumenda nemo sapiente perspiciatis nesciunt
            libero voluptates! Tenetur explicabo harum ab. Earum autem ipsum,
            laudantium ipsa reprehenderit nemo. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Itaque recusandae minima perferendis
            vitae accusantium eius, veritatis aut distinctio ad! Ut quibusdam
            sunt maiores alias. Voluptate impedit nisi reprehenderit veniam cum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            magnam quasi non corrupti eos at, veritatis cumque. Modi asperiores
            porro, a nihil praesentium, nulla eaque est illum nam, minus
            delectus.
          </p>
          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img src={ReactIcon} alt="" />
              <div className="info">
                <span>Jane Doe</span>
                <div className="stars">
                  <img src={ReactIcon} alt="" />
                  <img src={ReactIcon} alt="" />
                  <img src={ReactIcon} alt="" />
                  <img src={ReactIcon} alt="" />
                  <img src={ReactIcon} alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last Delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                ducimus dicta adipisci dolores exercitationem itaque suscipit
                impedit ratione, sit pariatur vitae optio nulla vel cumque quasi
                facere aliquam magni eius!
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src={ReactIcon} alt="" className="pp" />
                <div className="info">
                  <span>Jane Doe</span>
                  <div className="country">
                    <img src={ReactIcon} alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={ReactIcon} alt="" />
                <img src={ReactIcon} alt="" />
                <img src={ReactIcon} alt="" />
                <img src={ReactIcon} alt="" />
                <img src={ReactIcon} alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                eveniet eos quis sed neque fuga officiis repellendus quod
                corporis quibusdam. Obcaecati amet sit asperiores culpa
                exercitationem ea, suscipit sed omnis! Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src={ReactIcon} alt="" />
                <span>Yes</span>
                <img src={ReactIcon} alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src={ReactIcon} alt="" className="pp" />
                <div className="info">
                  <span>Jane Doe</span>
                  <div className="country">
                    <img src={ReactIcon} alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={ReactIcon} alt="" />
                <img src={ReactIcon} alt="" />
                <img src={ReactIcon} alt="" />
                <img src={ReactIcon} alt="" />
                <img src={ReactIcon} alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                eveniet eos quis sed neque fuga officiis repellendus quod
                corporis quibusdam. Obcaecati amet sit asperiores culpa
                exercitationem ea, suscipit sed omnis! Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src={ReactIcon} alt="" />
                <span>Yes</span>
                <img src={ReactIcon} alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src={ReactIcon} alt="" className="pp" />
                <div className="info">
                  <span>Jane Doe</span>
                  <div className="country">
                    <img src={ReactIcon} alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={ReactIcon} alt="" />
                <img src={ReactIcon} alt="" />
                <img src={ReactIcon} alt="" />
                <img src={ReactIcon} alt="" />
                <img src={ReactIcon} alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                eveniet eos quis sed neque fuga officiis repellendus quod
                corporis quibusdam. Obcaecati amet sit asperiores culpa
                exercitationem ea, suscipit sed omnis! Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src={ReactIcon} alt="" />
                <span>Yes</span>
                <img src={ReactIcon} alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            officia,
          </p>
          <div className="details">
            <div className="item">
              <img src={ReactIcon} alt="" />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src={ReactIcon} alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src={ReactIcon} alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src={ReactIcon} alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src={ReactIcon} alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src={ReactIcon} alt="" />
              <span>Prompt Writing</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
