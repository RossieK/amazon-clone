import "../styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Amazon background"
        />
        <div className="home__row">
          <Product
            key="12341234"
            id="12341234"
            title="The lean startup"
            price={19.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3BIWym5q5kW-7rNV4gQUTzLiYLLH0FGUADd_iM9u6oRVIY18gxxgt5WJLixXYcHctkc&usqp=CAU"
            rating={3}
          />
          <Product
            key="23452345"
            id="23452345"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5L Glass Bowl, Removable Splash Guard, 1000 W, Cream"
            price={299.99}
            image="https://m.media-amazon.com/images/I/51LH9DtmipL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            key="34563456"
            id="34563456"
            title="Panasonic LUMIX DC-S5 S5 Full Frame Mirrorless Camera body, 4K 60P Video Recording with Flip Screen and Wi-Fi, L-Mount, 20-60 mm Lens, 5-Axis Dual I.S, (Black)"
            price={42.29}
            image="https://m.media-amazon.com/images/I/81rMhM-GLAL._AC_SX180_SY120_QL70_.jpg"
            rating={4}
          />
          <Product
            key="45674567"
            id="45674567"
            title="EEFINITE Fitness Tracker with Alexa Built-in, 5ATM Waterproof Activity Tacker with Blood Oxygen Heart Rate Monitor, Sleep & Swim Tracking, Smart Fitness Band Step Calorie Counter for Women Men"
            price={34.99}
            image="https://m.media-amazon.com/images/I/61UFB9nPFLL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            key="56785678"
            id="56785678"
            title="Smart GU10 LED Bulbs, Warm White to Cold White Dimmable, RGB Multi Colour Changing WiFi MR16 Spotlight Bulb, Compatible with Alexa & Google Home, 5W=50W, 2.4Ghz Only, Pack of 4 by Torkase"
            price={39.99}
            image="https://m.media-amazon.com/images/I/51LZ+nwuW-S._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            key="67896789"
            id="67896789"
            title="Philips Ambilight 55OLED805/12 55-Inch OLED TV (4K UHD, P5 AI Perfect Picture Engine, Dolby Vision, Dolby Atmos, HDR 10+, Freeview Play, Works with Alexa, Android TV) Gun Metal Grey (2020/2021 Model)"
            price={1149.99}
            image="https://m.media-amazon.com/images/I/61g4UK2QwWL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
