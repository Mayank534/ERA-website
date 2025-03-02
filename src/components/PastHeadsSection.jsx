// PastHeadsSection.jsx
import React from 'react';
import TeamHeadCard from './TeamHeadCard'; // Same card component used by current heads

// Example data for past heads (update to real data/images)
import pasthead1Img from '../assets/team/none.png';
import pasthead2Img from '../assets/team/21head2.jpeg';
import pasthead3Img from '../assets/team/none.png';
import pasthead4Img from '../assets/team/21head4.jpeg';

const pastHeadsData = [
  {
    name: 'Dhruva Singh Sachan',
    phone: '9621688942',
    email: 'dhruvass21@iitk.ac.in',
    image: pasthead1Img,
    githubLink: 'https://github.com/dhruv0x0x0',
    instagramLink: 'https://www.instagram.com/dhruv0x0/',
    linkedinLink: 'https://www.linkedin.com/in/dhruva-singh-sachan-366b17227/',
  },
  {
    name: 'Emaad Ahmed',
    phone: '8273019875',
    email: 'emaada21@iitk.ac.in',
    image: pasthead2Img,
    githubLink: 'https://github.com/pasthead2',
    instagramLink: 'https://www.instagram.com/emmddxx/',
    linkedinLink: 'https://www.linkedin.com/in/emaadahmedx4/',
  },
  {
    name: 'Kartik Kulkarni',
    phone: '9175009924',
    email: 'kartik21@iitk.ac.in',
    image: pasthead3Img,
    githubLink: 'https://github.com/kartik-iitk',
    instagramLink: 'https://www.instagram.com/kartikkulkarni27/',
    linkedinLink: 'https://www.linkedin.com/in/kartikkulkarni23/',
  },
  {
    name: 'Rishi Agarwal',
    phone: '7071377085',
    email: 'rishi21@iitk.ac.in',
    image: pasthead4Img,
    githubLink: 'https://github.com/LegendaryGene',
    instagramLink: 'https://www.instagram.com/_rishi_agarwal_/',
    linkedinLink: 'https://www.linkedin.com/in/-rishi-agarwal-/',
  },
];

const PastHeadsSection = () => {
  return (
    <section className="w-full flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold mb-6 text-white">Past Heads</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {pastHeadsData.map((head) => (
          <TeamHeadCard
            key={head.name}
            name={head.name}
            phone={head.phone}
            email={head.email}
            image={head.image}
            githubLink={head.githubLink}
            instagramLink={head.instagramLink}
            linkedinLink={head.linkedinLink}
          />
        ))}
      </div>
    </section>
  );
};

export default PastHeadsSection;
