const config = {
  title: "Komal Sonar | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Komal Sonar, a Full Stack Developer with React & AI Integration Expertise. Passionate about building scalable, interactive web applications using React, JavaScript, and modern frontend frameworks. Experienced in integrating AI/ML models into web platforms.",
    short:
      "Discover the portfolio of Komal Sonar, a Full Stack Developer specializing in React, AI integration, and modern web applications.",
  },
  keywords: [
    "Komal Sonar",
    "portfolio",
    "full-stack developer",
    "React",
    "AI integration",
    "web development",
    "Flask",
    "JavaScript",
    "Python",
    "Chrome Extensions",
    "Streamlit",
    "Machine Learning",
    "REST APIs",
  ],
  author: "Komal Sonar",
  email: "komalsonar19@gmail.com ",
  phone: "8767986558",
  location: "Shirpur, Maharashtra",
  site: "https://komalsonar.site",

  // for github stars button
  githubUsername: "sonarkomalgithub",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/komal-sonar1901/",
    github: "https://github.com/sonarkomalgithub",
  },
};
export { config };
