// Academic.js

import './academic.css'
import React from 'react';
import Header from './partials/header';
import Footer from './partials/footer';

function Academic() {
  return (
    <div className="Academic">
      <Header></Header>
    <div className="academic-container">
      
      <h2>Academic Programs</h2>
      <p>
        At Shining Star Preschool & Day Care, we are committed to providing a nurturing
        learning environment that fosters the holistic development of your child. Our
        academic programs are designed to stimulate curiosity, creativity, and a love for
        learning.
      </p>

      <h3>Key Features of Our Academic Programs</h3>
      <ul>
        <li>Experienced and Caring Educators</li>
        <li>Age-Appropriate Curriculum</li>
        <li>Interactive Learning Activities</li>
        <li>Play-Based Learning Approach</li>
        <li>Social and Emotional Development</li>
        <li>Outdoor Exploration and Activities</li>
        <li>Homely Environment</li>
      </ul>

      <h3>Curriculum Overview</h3>
      <p>
        Our curriculum focuses on building a strong foundation in language development,
        numeracy skills, social interaction, and motor skills. We believe in a balanced
        approach that combines structured learning with ample opportunities for free play
        and exploration.
      </p>

      <h3>Enrichment Programs</h3>
      <p>
        In addition to our core curriculum, we offer various enrichment programs to enhance
        your child's learning experience. These may include art and music classes, physical
        activities, and special events that align with our educational philosophy.
      </p>

      <h3>Parent Involvement</h3>
      <p>
        We encourage active participation from parents in their child's educational journey.
        Regular communication, parent-teacher conferences, and special events provide
        opportunities for collaboration and a deeper understanding of your child's progress.
      </p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Academic;
