import React from "react";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", percentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", percentage: "75%", value: "75" },
        { id: "PHP_skill", content: "PHP", percentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          percentage: "85%",
          value: "85"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          percentage: "70%",
          value: "70"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          percentage: "60%",
          value: "60"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                          Hi, I am a Front-End developer from Wellington, New Zealand. I’m interested in frontend and full-stack development roles. My experience with JavaScript extends across the full-stack spectrum and I enjoy leveraging various libraries and frameworks to create modular components and scalable applications. I relish any opportunity to work with new technologies while obtaining mastery with my other skills. Ultimately, I want to work on bringing inspirational ideas to life.
                          I enjoy building everything from small business sites to IoT interactive apps.
                          If you'd like to know more I'm always open to chat so feel free to shoot me a message! You can check out my code at:https://github.com/myexistance. 
                          Experienced with HTML/CSS, JavaScript, React/Redux, Node.js, Express, MongoDB, Bootstrap, Shopify
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
