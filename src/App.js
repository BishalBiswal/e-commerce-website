import './App.css';
import { data } from './data';
import Card from './card';
// import pic1 from './pexels-pixabay-270360.jpg'
import { FaHome, FaPhoneAlt, FaCartPlus, FaUserAlt, FaWhatsappSquare, FaTwitterSquare, FaGooglePlusSquare, FaHeadset, FaPenNib, FaListUl, FaLocationArrow, FaPhoneSquareAlt, FaInstagramSquare, FaEnvelope, FaClock } from 'react-icons/fa';
const App = () => {
  return (
    <>
      <section className='all'>
        <section className='head'>
          <button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas"> <FaListUl />&nbsp;&nbsp;Menu</button>
          <h2 className='hed'>Lorem technologies</h2>
          <div id="login"><button className='btn btn-danger'><FaHome />&nbsp;&nbsp;login</button>
            <button className='btn btn-danger'><FaHome />&nbsp;&nbsp;signup</button></div>
        </section>
        <section  >
          <div>
            <div className='offcanvas offcanvas-start' tabIndex="-1" id="offcanvas" aria-labelledby="offcanvaslabel">
              <div className='offcanvas-header'>
                <h2 className='offcanvas-title'>Menu</h2>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

              <div className='offcanvas-body'>
                <button className='btn btn-outline-warning'><FaHome />&nbsp;&nbsp;Home</button>
                <button className='btn btn-outline-warning'><FaUserAlt />&nbsp;&nbsp;About Us</button>
                <button className='btn btn-outline-warning'><FaCartPlus />&nbsp;&nbsp;Services</button>
                <button className='btn btn-outline-warning'><FaPenNib />&nbsp;&nbsp;Blog</button>
                <button className='btn btn-outline-warning'><FaHeadset />&nbsp;&nbsp;FAQ and Support</button>
                <button className='btn btn-outline-warning'><FaPhoneAlt />&nbsp;&nbsp;contact us</button>
                <div id="login1"><button className='btn btn-danger'><FaHome />&nbsp;&nbsp;login</button>
                  <button className='btn btn-danger'><FaHome />&nbsp;&nbsp;signup</button></div>
              </div>
            </div>
          </div>
        </section>


        <section className='canva'>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" id="d1">
                <img src="./" className="d-block w-100" alt="" />
                <div className="carousel-caption d-md-block block1">
                  <h4>Lorem technologies</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut neque dignissimos voluptatibus, ipsam tenetur quidem quae alias deserunt quas.</p>
                </div>
              </div>
              <div className="carousel-item" id="d2">
                <img src="./" className="d-block w-100" alt="" />
                <div className="carousel-caption d-md-block block2" >
                  <h4>Lorem technologies</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut neque dignissimos voluptatibus, ipsam tenetur quidem quae alias deserunt quas.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <section className='middle'>
          <div className="grid">
            <div className="g-col-4 cardimg1"> <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg" alt="." /></div>
            <div className="g-col-6 cardtext">
              <p>
                <h1>Fast and Efficient software</h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat explicabo illo eos necessitatibus aliquam ducimus possimus labore! Quod fugiat distinctio fuga necessitatibus, esse quaerat blanditiis eaque tempore consequatur ratione deleniti ut explicabo consectetur exercitationem corporis aut! Dolorum ab corporis dicta eum omnis, nemo, quisquam maxime perspiciatis eius, a temporibus quis.
              </p>
            </div>
            <div className="g-col-4 cardimg2"> <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg" alt="." /></div>
          </div>
          <div className="grid">
            <div className="g-col-6 cardimg3"> <img src="https://images.pexels.com/photos/6120170/pexels-photo-6120170.jpeg" alt="" /></div>
            <div className="g-col-4 cardtext">
              <p>
                <h1>Bug-Free and Smooth</h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat explicabo illo eos necessitatibus aliquam ducimus possimus labore! Quod fugiat distinctio fuga necessitatibus, esse quaerat blanditiis eaque tempore consequatur ratione deleniti ut explicabo consectetur exercitationem corporis aut! Dolorum ab corporis dicta eum omnis, nemo, quisquam maxime perspiciatis eius, a temporibus quis.
              </p>
            </div>
          </div>
          <section className='cardss'>
            <h2>OUR SERVICES</h2><br />
            <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quae!</article><br />
            <div className='cardd'>
              {data.map((card) => {
                return (
                  <Card key={card.id} {...card}></Card>
                );
              })}
            </div>
          </section>
        </section>


        <div className="progress-bar bg-danger">---</div>
        <section className='footer'>
          <div className='about'>
            <h5>About Lorem Technologies </h5>
            <div className='elems'><div><FaLocationArrow /></div><p>Lorem Technologies,Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aut?</p></div>
            <div className='elems'><div><FaPhoneSquareAlt /></div><p>0123456789</p></div>
            <div className='elems'><div><FaEnvelope /></div><p>lorem@mail.com</p></div>
            <div className='elems'><div><FaClock /></div><p>Monday - Friday : 09 : 00 - 18 : 00 Saturday, Sunday : Closed</p></div>
          </div>
          <div className='about'>
            <h5>Our Socials </h5>
            <div className='elems'><div><FaInstagramSquare /></div><p>Instagram</p></div>
            <div className='elems'><div><FaGooglePlusSquare /></div><p>Google</p></div>
            <div className='elems'><div><FaTwitterSquare /></div><p>Twitter</p></div>
            <div className='elems'><div><FaWhatsappSquare /></div><p>WhatsApp</p></div>
          </div>
        </section>
        <section className='bottom'>
          © 2022 Lorem Technologies All Rights Reserved.
        </section>
      </section>
    </>
  )


}

export default App;
