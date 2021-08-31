
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile Generator</title>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="style.css">
        
    </head>
    <body>
        <section class="hero is-primary">
        <div class="hero-body">
        <p class="title is-center">
            My Team
        </p>
        </div>
        </section>
        
        <div class="main">
                          <div>
                    ${createProfile(team)}
                </div>
        </div>
        </div>
    </body>
    </html>
    `;
};

// Create Team Profile
const createProfile = team => {

    // Create Manager Profile
    const createManager = manager => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-header-title">${manager.getName()}</h2>
                <h4 class="card-header-title">Title: ${manager.getPosition()}</h4>
            </div>
            <div class="card-content">
                <ul class="">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    // Create Engineer Profile
    const createEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-header-title">${engineer.getName()}</h2>
                <h4 class="card-header-title">Title: ${engineer.getPosition()}</h4>
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
    const createIntern = intern => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-header-title">${intern.getName()}</h2>
                <h4 class="card-header-title">Title: ${intern.getPosition()}</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getPosition() === 'Manager')
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getPosition() === 'Engineer')
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getPosition() === 'Intern')
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("");

};