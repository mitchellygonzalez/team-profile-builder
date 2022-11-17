const generateTeam = (team) => {
    console.log(team);
    const html = [];
    const generateManager = manager => {
      console.log(manager);
      let managerHtml = `
      <div class="rev" style="width: 16rem;">
        <div class="rec-cub">
        ${manager.name} <br/>
        <i></i>Manager</div>
        <ul>
         <li>ID: ${manager.id}</li>
         <li>Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
         <li>Office Number: ${manager.officeNumber}</li>
       </ul>
      </div>    
      `;
      html.push(managerHtml);
    }
    const generateEngineer = engineer => {
      console.log(engineer);
      let engineerHtml = `
      <div class="flow" style="width: 16rem;">
        <div class="rec-cub">
        ${engineer.name} <br/>
        <i></i>Engineer</div>
        <ul>
         <li>ID: ${engineer.id}</li>
         <li>Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
         <li>Github Username: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
      </div>
      `;
      html.push(engineerHtml);
    }
    const generateIntern = intern => {
      console.log(intern);
      let internHtml = `
      <div class="flow" style="width: 16rem;">
        <div class="rec-cub">
        ${intern.name} <br/>
        <i"></i>Intern</div>
         <ul>
          <li >ID: ${intern.id}</li>
          <li>Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
          <li>School: ${intern.school}</li>
         </ul>
      </div>
      `;
      html.push(internHtml);
    }
    for (let i = 0; i < team.length; i++) {
      if (team[i].getRole() === "Manager") {
        generateManager(team[i]);
      }
      if (team[i].getRole() === "Engineer") {
        generateEngineer(team[i]);
      }
      if (team[i].getRole() === "Intern") {
        generateIntern(team[i]);
      }
    }
      return html.join('');
  }
  
  module.exports = team => {
  
  return `
  <!DOCTYPE html> <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <script src="https://kit.fontawesome.come/1e0a13a89f.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="../dist/style.css" />
  <title>Team Prof Builder</title>
  </head>
  <body>
  <header>
  <h1> Our Team </h1>
  </header>
  <main> ${generateTeam(team)} </main>
  </body>
  </html>
      `;
  }
  
  
  
  
  



















