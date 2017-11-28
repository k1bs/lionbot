import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='about-body'>
        <h1>AOA Digital</h1>
        <h2>General Assembly</h2>
        <div className='person-container'>
          <img src='https://media.licdn.com/media/AAEAAQAAAAAAAAilAAAAJGMyMzlhYmYwLTM3MGItNDk1Mi1hNmQ2LTdlYmNlMjQxZTVhMA.jpg' />
          <h4>Aaron Bart-Addison <br /><a href='https://www.linkedin.com/in/abaddison16/'><i className='fa fa-linkedin-square' /></a><a href='https://github.com/RonAddy'><i className='fa fa-github-square' /></a></h4>
        </div>
        <div className='person-container'>
          <img src='https://media.licdn.com/media/AAEAAQAAAAAAAAvGAAAAJDZlZmRjYmEyLTEzYWQtNGRlYy1hMjQxLTIyNmYwYmEyMjY5Mg.jpg' />
          <h4>Alex Kibler <br /><a href='https://www.linkedin.com/in/alexkibler/'><i className='fa fa-linkedin-square' /></a><a href='https://github.com/k1bs'><i className='fa fa-github-square' /></a></h4>
        </div>
        <div className='person-container'>
          <img src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/24068183_10214874797251909_8019347114147861708_n.jpg?oh=b9bd774019d023adab0a66daad4af931&oe=5A88CEE9' />
          <h4>Olivia Stoick <br /><a href='https://www.linkedin.com/in/olivia-stoick-5b292295/'><i className='fa fa-linkedin-square' /></a><a href='https://github.com/oliviastoick'><i className='fa fa-github-square' /></a></h4>
        </div>
      </div>
    </div>
  )
}

export default About
