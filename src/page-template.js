module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/4cb8335a00.js" crossorigin="anonymous"></script>        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <section class="hero is-medium">
            <div class="hero-body">
                <p class="title has-text-centered">My Team</p>
            </div>
        </section>
                
        <section class="section">
            <div class="container">
                    ${createProfile(team)}
            </div>
         </section>
    </body>
    </html>
    `;
};

// Create Team Profile
const createProfile = (team) => {
  // Create Manager Profile
  //-----------Card 1----------
  const createManager = (manager) => {
    return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-header-title">${manager.getName()}</h2>
            </div>
            <div class="card-header">
                <h4 class="card-header-title"><i class="fas fa-briefcase fa-2x"></i>${manager.getPosition()}</h4>
            </div>
            <div class="card-content">
                <ul>
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
                </ul>
            </div>
        </div>
       
        `;
  };

  // Create Engineer Profile
  const createEngineer = (engineer) => {
    return `
       
        <div class="card">
            <div class="card-header">
                <h2 class="card-header-title">${engineer.getName()}</h2>
            </div>
            <div class="card-header">
                <h4 class="card-header-title"><i class="fas fa-hard-hat fa-2x"></i>${engineer.getPosition()}</h4>
            </div>
            <div class="card-content">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        
        `;
  };

  // Create Intern Profile
  const createIntern = (intern) => {
    return `
        
        <div class="card">
            <div class="card-header">
                <h2 class="card-header-title">${intern.getName()}</h2>
                </div>
                <div class="card-header">
                <h4 class="card-header-title"><i class="fas fa-graduation-cap fa-2x"></i>${intern.getPosition()}</h4>
            </div>
            <div class="card-content">
                <ul>
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        
        `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getPosition() === "Manager")
      .map((manager) => createManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getPosition() === "Engineer")
      .map((engineer) => createEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getPosition() === "Intern")
      .map((intern) => createIntern(intern))
      .join("")
  );

  return html.join("");
};
