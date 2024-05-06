//Font Uploader

const fontProject = document.querySelector("[fontProject]");
const closeFontProject = document.querySelector("[closeFontProject]");

const showSection = () => {
  document.getElementById('font').style.display = 'block';
}

const closeSection = () => {
  document.getElementById('font').style.display = 'none';
}

fontProject.addEventListener("click", showSection);
closeFontProject.addEventListener("click", closeSection);

// tashboard
const tashboardProject = document.querySelector("[tashboardProject]");
const closeTashboardProject = document.querySelector("[closeTashboardProject]");

const showTashboardSection = () => {
  document.getElementById('tashboard').style.display = 'block';
}

const closeTashboardSection = () => {
  document.getElementById('tashboard').style.display = 'none';
}

tashboardProject.addEventListener("click", showTashboardSection);
closeTashboardProject.addEventListener("click", closeTashboardSection);

// Producer Layout

const producerProject = document.querySelector("[producerProject]");
const closeProducerProject = document.querySelector("[closeProducerProject]");

const showProducerSection = () => {
  document.getElementById('producer').style.display = 'block';
}

const closeProducerSection = () => {
  document.getElementById('producer').style.display = 'none';
}

producerProject.addEventListener("click", showProducerSection);
closeProducerProject.addEventListener("click", closeProducerSection);