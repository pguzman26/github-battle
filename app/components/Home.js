var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Github Battle: Battle your friends... and stuff.</h1>
        <Link className='button' to='/battle'>Battle</Link>
      </div>
    )
  }
}

// Interested? Send us your score:
function candidateEligibility(experience) {
var score = 0;
var mustHaves = {
JavaScript: {min: 1, factor: 2},
HTML: {min: 1, factor: 2},
CSS: {min: 1, factor: 2},
SQL: {min: 1, factor: 1}
};
var niceToHaves = {




// Libraries
jQuery: 2,
// CVS
git: 2
};

for(var tech in mustHaves) {
if(experience.hasOwnProperty(tech) && experience[tech] >= mustHaves[tech].min) {
var yearsExp = experience[tech];
score += yearsExp * mustHaves[tech].factor;
} else {
return 0;
}
}
for(var tech in niceToHaves) {
if(experience.hasOwnProperty(tech) && experience[tech] > 0) {
score += niceToHaves[tech];
}
}

alert(score);
}

module.exports = Home;