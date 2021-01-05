import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at Yash Technologies Inc. <span>2019-present</span></h2>
                        <p>At Yash me and my team help support our clients to design, build/enhance, develop, test their IT product/s. My role is to develop core back end applications, perform unit testing, fixe issues, update & maintain code repositories and monitor CI/CD pipelines in Azure DevOps.</p>
                        <span>Technology Stack: C#, ASP.Net, Vb.Net, SQL, Micro Services, Azure - CosmosDB, DevOps, Service Bus</span>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Masters Degree <span>2017-2019</span></h2>
                        <p>I graduated from University of Nebraska at Omaha with a major in Management Information Systems and minor in Database Management Systems. Most of my course work included design, develop and deliver ready-to-use application prototypes, design IT infrastructure to address business needs, manage resources with Zenhub. During my final semester I worked on a Capstone Project leading a team of 12 to deliver a fully functional and interactive website for our client FitGirl Inc. to empower young girls as they develop and mature by demonstrating positive lifestyle choices; physical, mental, relational and nutritional.</p>
                        <span>Technology Stack: Python, Django, HTML, CSS, JavaScript, Github, Zenhub, Heroku: Cloud Application Platform, SQL</span>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Application Developer at Accenture <span>2015-2017</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 91 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                        <span>Technology Stack: SAP ABAP, SAP SD</span>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
