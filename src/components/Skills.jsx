import React from 'react';
import './Skills.css';

function Skills() {
  const cards = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'JavaScript']
    },
    {
      title: 'Web Technologies',
      skills: ['React.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB']
    },
    {
      title: 'Libraries',
      skills: ['Pandas', 'NumPy', 'Matplotlib']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Postman', 'Jupyter Lab', 'Jupyter Notebook',  'Canva']
    },
    {
      title: 'Coursework',
      skills: ['DSA (JAVA)', 'OOPs (Java)', 'Database Management', 'Operating Systems']
    }
  ];

  return (
    <section id="skills" className="pb-skills">
      <div className="pb-container">
        <h2 className="pb-skills__title">Skills</h2>

        <p className="pb-skills__subtitle">
          Here are some of the technologies, tools, and concepts I have been
          working with throughout my development journey.
        </p>

        <div className="pb-skills__grid">
          {cards.map((card) => (
            <div key={card.title} className="pb-skill-card">
              <h3 className="pb-skill-card__title">
                {card.title}
              </h3>

              <div className="pb-skill-card__badges">
                {card.skills.map((skill) => (
                  <span key={skill} className="pb-skill-badge">
                    <span
                      className="pb-skill-badge__icon"
                      aria-hidden="true"
                    >
                      ●
                    </span>

                    <span className="pb-skill-badge__text">
                      {skill}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;