// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  let badge = "";

  if (license != "No"){
    badge = license;
  } 
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  let licenseLink = "";
  
  if(license != 'No'){
    licenseLink = license.split('(')[2].slice(0, -1);
  }

  return licenseLink 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if(license != "No"){
    return `Licensed under the [${license.slice(11, license.search("]"))}](${renderLicenseLink(license)}) license.`
  }else{
    return `
    `
  }
z
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)


  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## License

  ${renderLicenseSection(data.license)}

  ## Questions 

  https://github.com/${data.github}
  ${data.email}
  If you have any questions, concerns or suggestions please contact me through the email provided above and please include the name of the repository in the email subject.
  `;
}

module.exports = generateMarkdown;
