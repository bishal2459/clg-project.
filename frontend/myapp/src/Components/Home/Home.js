import React from "react";
import "./home.css";
import logo4 from "../../image/Treatment.jpg";
import logo3 from "../../image/Emotion.jpg";
import logo2 from "../../image/looking.jpg";
import logo1 from "../../image/2.webp";
import Lottie from "lottie-react";
import home from "../lottie/home.json";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const logoAnimate = {
    loop: true,
    autoplay: true,
    animationData: home,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleInfo = () => {
    navigate("/info");
  };

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Diabetes Prediction System Using Machine Learning</h1>
          <p>
            A diabetic prediction system is a healthcare application that uses
            various techniques, often leveraging artificial intelligence and
            machine learning, to predict the likelihood of a person developing
            diabetes.
          </p>
          <p>
            The first step in creating a diabetic prediction system is data
            collection. This includes gathering medical records that detail
            patient history, such as age, gender, family history of diabetes,
            blood pressure, cholesterol levels, body mass index (BMI), and blood
            glucose levels. Additionally, lifestyle information such as diet,
            physical activity, smoking habits, and alcohol consumption is
            collected. Clinical tests, including glucose tolerance tests and
            HbA1c levels, are also critical components of the data set.
            <br />
            <b> To know more about Diabetes...</b>
          </p>
          <button onClick={handleInfo}>Read More</button>
        </div>
        <div className="hero-image">
          {/* <img src={logo} alt="Diabetes"/> */}
          <Lottie
            animationData={logoAnimate.animationData}
            loop={logoAnimate.loop}
            autoplay={logoAnimate.autoplay}
            style={{ height: "600px", width: "100%" }}
          />
        </div>
      </section>

      <section className="features">
        <h2>Living with diabetes</h2>
        <div className="container1">
          <div className="section1">
            <img src={logo3} alt="Emotional wellbeing" />
            <h2> <a href="https://www.diabetes.org.uk/guide-to-diabetes/emotions" target="_blank" style={{textDecoration:"none" , color:"white"}}> Emotional wellbeing</a> </h2>
            <p>
              Diabetes isn’t just a physical condition, it can affect you
              emotionally too. We’re here to help you get the right emotional
              support and show you that whatever you’re feeling, you are not
              alone.
            </p>
          </div>
          <div className="section1">
            <img src={logo4} alt="Treatments" />
            <h2> <a href="https://www.diabetes.org.uk/diabetes-the-basics/diabetes-treatments" target="_blank" style={{textDecoration:"none" , color:"white"}}> Treatments</a> </h2>
            <p>
              There are a number of treatments available to help you manage your
              diabetes, from insulin to tablets. This section will help you find
              what works for you, so you can control your diabetes in a way that
              suits your lifestyle.
            </p>
          </div>
          <div className="section1">
            <img
              src={logo2}
              alt="Managing your diabetes"
            />
            <h2> <a href="https://www.diabetes.org.uk/diabetes-the-basics/diabetes-treatments" target="_blank" style={{textDecoration:"none" , color:"white"}}> Managing your diabetes</a> </h2>
            <p>
              From checking your blood sugar or HbA1c level, to going to your
              annual diabetes checks, there can be a lot to think about when you
              have diabetes. In this section, find out more about how to manage
              your condition and look after yourself.
            </p>
          </div>
        </div>
      </section>

      <section className="header1">
        <div className="header-image">
          <img src={logo1} alt="Diabetes Prediction System" />
          <div className="header-title">Diabetes Prediction System</div>
        </div>
        <div className="header-description">
          <h1>About Diabetes Prediction System</h1>
          <p>
            Healthcare industry has huge amount of data that contains hidden
            information. This information supports decision making process on
            related area. In this research paper, we discussed various
            approaches of data mining which are useful in predicting the
            diabetes disease. One of the complex tasks in healthcare industry is
            predicting of diabetes disease and it requires more experience and
            knowledge. Some of the ways of predicting diabetes diseases are ECG,
            stress test and diabetes MRI etc. Here the system uses 14 parameters
            for predicting diabetes disease that include blood pressure,
            cholesterol, chest pain and diabetes rate. These parameters are used
            to improve an accuracy level. The main aim of this paper is to
            provide an analysis of data mining techniques on diagnosing diabetes
            disease. Healthcare industry has huge amount of data that contains
            hidden information. This information supports decision making
            process on related area. In this research paper, we discussed
            various approaches of data mining which are useful in predicting the
            diabetes disease.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
