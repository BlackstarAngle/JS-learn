//declarations
let siteName = 'Project';
let author = 'Mateusz';
let daysPassed = 1;
let finished = false;

//inputing info

document.getElementById('id_1').innerHTML = `Welcome to ${siteName}`;
document.getElementById('id_2').innerHTML = `The author of ${siteName} is ${author}`;
document.getElementById('id_3').innerHTML = `Started ${daysPassed} ago`;
document.title = siteName;