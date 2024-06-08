import React from "react";
import "./about.css";
import Lottie from "lottie-react";
import about from "../lottie/about1.json";
import about2 from "../lottie/about2.json";
import about3 from "../lottie/about3.json";
import Dbimage1 from "../../image/47866.jpg";


const About = () => {
  const logoAnimate = {
    loop: true,
    autoplay: true,
    animationData: about,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const logoAnimate2 = {
    loop: true,
    autoplay: true,
    animationData: about2,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const logoAnimate3 = {
    loop: true,
    autoplay: true,
    animationData: about3,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="about_header">
        <div className="header3">
          <div id="title">Understanding Diabetes</div>
        </div>
        <div id="intro">
          <h1>Diabetes in India</h1>
          <p>
            Diabetes is a chronic disease that occurs either when the pancreas
            does not produce enough insulin or when the body cannot effectively
            use the insulin it produces. Insulin is a hormone that regulates
            blood sugar. Hyperglycaemia, or raised blood sugar, is a common
            effect of uncontrolled diabetes and over time leads to serious
            damage to many of the body's systems, especially the nerves and
            blood vessels. In India, there are estimated 77 million people above
            the age of 18 years are suffering from diabetes (type 2) and nearly
            25 million are prediabetics (at a higher risk of developing diabetes
            in near future). More than 50% of people are unaware of their
            diabetic status which leads to health complications if not detected
            and treated early. Adults with diabetes have a two- to three-fold
            increased risk of heart attacks and strokes. Combined with reduced
            blood flow, neuropathy (nerve damage) in the feet increases the
            chance of foot ulcers, infection, and the eventual need for limb
            amputation. Diabetic retinopathy is an important cause of blindness
            and occurs as a result of long-term accumulated damage to the small
            blood vessels in the retina. Diabetes is among the leading causes of
            kidney failure
          </p>
          <div className="dbImg1">
            <Lottie
              animationData={logoAnimate2.animationData}
              loop={logoAnimate2.loop}
              autoplay={logoAnimate2.autoplay}
              style={{ height: "400px", width: "100%" }}
            />
          </div>
          <hr />
        </div>

        <div className="article">
          <h2>Causes of Diabetes in India</h2>
          <div className="db_Cause">
            <p>
              The high prevalence of diabetes in India can be attributed to a
              combination of genetic and lifestyle factors. Genetically, Indians
              have a higher predisposition to insulin resistance and diabetes. A
              family history of diabetes significantly increases an individual's
              risk of developing the condition. Lifestyle factors play a crucial
              role in the development of diabetes in India. Traditional Indian
              diets are often high in carbohydrates and sugars, leading to
              higher calorie intake and subsequent weight gain. Physical
              inactivity is another major factor, particularly in urban areas
              where sedentary lifestyles are more common. Rapid urbanization has
              brought about lifestyle changes that contribute to the increasing
              incidence of diabetes, including reduced physical activity and
              increased consumption of processed foods. Obesity, particularly
              central obesity characterized by excess abdominal fat, is a
              significant risk factor for diabetes in India. The tendency for
              Indians to accumulate fat in the abdominal area leads to higher
              insulin resistance. Socioeconomic factors also play a role, with
              changing economic conditions and improved living standards leading
              to dietary and lifestyle changes that increase the risk of
              diabetes.Environmental factors are also significant contributors
              to the increasing diabetes cases in India. Rapid urbanization has
              led to substantial changes in living conditions and lifestyles.
              Urbanization has resulted in the adoption of more sedentary
              lifestyles and increased consumption of calorie-dense foods. Urban
              areas often offer less space and fewer opportunities for physical
              activities like walking or cycling. The fast-paced life in urban
              settings also leads to a preference for quick, often unhealthy
              food options. Emerging evidence suggests that environmental
              pollutants may also contribute to the development of diabetes. Air
              pollution, which is a significant issue in many Indian cities, has
              been linked to insulin resistance and inflammation. Exposure to
              pollutants such as particulate matter, heavy metals, and
              endocrine-disrupting chemicals can interfere with metabolic
              processes and exacerbate the risk of diabetes.
            </p>
            <div className="dbImg1">
              <Lottie
                animationData={logoAnimate.animationData}
                loop={logoAnimate.loop}
                autoplay={logoAnimate.autoplay}
                style={{ height: "400px", width: "400px" }}
              />
            </div>
          </div>

          <hr />
        </div>
        <div className="article">
          <h2 id="disease_about">
            Diseases and Complications Arising from Diabetes
          </h2>
          <div className="db_Cause">
            <div className="dbImg1" style={{ marginBottom: "534px" }}>
              <img src={Dbimage1} style={{ width: "100%" }} />
            </div>
            {/* <div className="dbImg1">
              <img src={Dbimage2} style={{width:"50%"}}/>
            </div> */}

            <p className="disease_unit">
              Diabetes, characterized by chronic high blood glucose levels, can
              lead to a range of serious health complications affecting various
              organs and systems in the body. The complications of diabetes can
              be broadly categorized into microvascular (affecting small blood
              vessels) and macrovascular (affecting large blood vessels)
              complications. Additionally, diabetes can have other adverse
              effects on overall health. Understanding these complications is
              crucial for managing and preventing the progression of
              diabetes-related diseases.
              <div className="disease_sub">
                <br />

                <ol>
                  <h6>Microvascular Complications</h6>
                  <li>
                  <b> Diabetic Retinopathy: </b> This eye condition results from damage
                    to the small blood vessels in the retina due to prolonged
                    high blood sugar levels. It is a leading cause of blindness
                    among adults. Early stages may present no symptoms, but as
                    the condition progresses, it can cause vision loss and
                    blindness if untreated. Regular eye exams and good blood
                    sugar control are essential for prevention and management.
                  </li>
                  <li>
                   <b>Diabetic Nephropathy:</b>  This kidney disease is caused by
                    damage to the blood vessels in the kidneys. It can lead to
                    kidney failure if not managed properly. Symptoms include
                    protein in the urine, swelling in the legs and feet, and
                    high blood pressure. Monitoring kidney function through
                    regular tests and controlling blood pressure and blood sugar
                    levels are crucial for managing this complication.
                  </li>
                  <li>
                   <b>Diabetic Neuropathy: </b> Nerve damage due to diabetes can affect
                    various parts of the body. The most common type is
                    peripheral neuropathy, which affects the legs and feet,
                    causing symptoms such as numbness, tingling, pain, and
                    weakness. Autonomic neuropathy affects the nerves
                    controlling internal organs, leading to issues such as
                    digestive problems, urinary tract infections, and
                    cardiovascular abnormalities. Managing blood sugar levels
                    and regular monitoring of symptoms are essential for
                    preventing and treating neuropathy.
                  </li>
                </ol>
                <ol>
                  <h6>Macrovascular Complications</h6>
                  <li>
                   <b>Cardiovascular Disease: </b> People with diabetes are at a higher
                    risk of developing cardiovascular diseases, including
                    coronary artery disease, heart attack, and stroke. High
                    blood sugar levels can damage the blood vessels and nerves
                    controlling the heart. Managing blood sugar, blood pressure,
                    and cholesterol levels, along with adopting a healthy
                    lifestyle, can significantly reduce the risk of
                    cardiovascular complications.
                  </li>
                  <li>
                   <b> Peripheral Arterial Disease (PAD):</b> Diabetes increases the
                    risk of PAD, a condition where the blood vessels outside the
                    heart, particularly in the legs, are narrowed or blocked.
                    This can lead to pain, cramping, and reduced blood flow to
                    the extremities, increasing the risk of infections and
                    amputations. Regular physical activity, smoking cessation,
                    and proper foot care are crucial for managing PAD.
                  </li>
                </ol>
              </div>
            </p>
          </div>
        </div>

        <div>
          <div className="disease_sub1">
            <div className="disease_sub11" style={{ width: "65%" }}>
              <ol>
                <h6 style={{ fontSize: "25px", fontWeight: "bold" }}>
                  Other Complications
                </h6>
                <li style={{fontSize:"20px"}}>
                 <b>Foot Problems:</b>  Diabetes can cause severe foot complications
                  due to poor blood circulation and nerve damage. Minor cuts and
                  blisters can develop into serious infections and ulcers,
                  sometimes leading to amputations. Regular foot care, wearing
                  appropriate footwear, and monitoring for any injuries or
                  infections are vital preventive measures.
                </li>
                <li style={{fontSize:"20px"}}>
                 <b> Skin Conditions: </b>People with diabetes are more prone to skin
                  infections and disorders, including bacterial and fungal
                  infections. Maintaining good blood sugar control and skin
                  hygiene can help prevent these issues.
                </li>
                <li style={{fontSize:"20px"}}>
                 <b>Dental Problems:</b>  High blood sugar levels can lead to an
                  increased risk of gum disease, infections, and tooth decay.
                  Regular dental check-ups and maintaining good oral hygiene are
                  essential for preventing dental complications.
                </li>
                <li style={{fontSize:"20px"}}>
                 <b>Mental Health Issues:</b>  Living with diabetes can be challenging
                  and may lead to mental health issues such as depression,
                  anxiety, and stress. Psychological support, along with
                  diabetes education and management, is essential for improving
                  the quality of life for people with diabetes.
                </li>
              </ol>
            </div>

            <div>
            <Lottie
                animationData={logoAnimate3.animationData}
                loop={logoAnimate3.loop}
                autoplay={logoAnimate3.autoplay}
                style={{ height: "550px", width: "700px",marginLeft:"40px",marginBottom:"50px" }}
              />
              {/* <img
                src={Dbimage2}
                style={{
                  width: "546px",
                  marginLeft: "70px",

                  marginTop: "-18px",
                }}
              /> */}
            </div>
          </div>
        </div>

        <hr />

        <div className="article">
          <h2>Precautionary Measures to take</h2>
          <div className="db_Cause">
            <p>
              To mitigate the risk and manage diabetes effectively, several
              precautionary measures can be taken. A healthy diet is paramount,
              emphasizing a balanced intake of vegetables, fruits, whole grains,
              lean proteins, and healthy fats. Reducing the intake of sugary
              foods, beverages, and refined carbohydrates is crucial. Practicing
              portion control helps manage calorie intake effectively.
              <ul>
                <li>
                <b>Blood Sugar Control: </b>  Maintaining blood glucose levels within
                  the target range is crucial for preventing complications. This
                  can be achieved through medication, insulin therapy, and
                  lifestyle modifications.
                </li>
                <li>
                 <b>Regular Monitoring: </b> Regular check-ups with healthcare
                  providers, including eye exams, kidney function tests, and
                  foot exams, are essential for early detection and management
                  of complications.
                </li>
                <li>
                 <b>Healthy Lifestyle: </b> Adopting a healthy diet, engaging in
                  regular physical activity, maintaining a healthy weight, and
                  avoiding tobacco and excessive alcohol consumption can
                  significantly reduce the risk of complications.
                </li>
                <li>
                 <b> Medication Adherence: </b>Taking prescribed medications as
                  directed and managing coexisting conditions such as
                  hypertension and hyperlipidemia are vital for comprehensive
                  diabetes management.
                </li>
              </ul>
            </p>
            {/* <div className="dbImg1">
              <Lottie
                animationData={logoAnimate.animationData}
                loop={logoAnimate.loop}
                autoplay={logoAnimate.autoplay}
                style={{ height: "400px", width: "400px" }}
              />
            </div> */}
          </div>

          <hr />
        </div>
      </div>
    </>
  );
};

export default About;
