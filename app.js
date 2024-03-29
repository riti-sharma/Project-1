const input = document.querySelector('input')
const button = document.querySelector('button')
const div = document.querySelector('div')
const apikey = "46c85d02ac3500f88225b35170f06a6c"
const doctorInfo = document.querySelector('.doctor-info');
const button2 = document.getElementsByTagName('button')[1];
const input2 = document.getElementsByTagName('input')[1];

button.addEventListener('click', async () => {
  const doctor = input.value;
  const response = await axios.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctor}&user_key=${apikey}`)
  console.log(response);
  const info = document.createElement('div');
  info.innerHTML = `<h2>Top 3 Results: </h2>`
  for (let i = 0; i < 3; i++) {
    info.innerHTML += `
    <p>${response.data.data[i].profile.bio}</p>
    `
  }

  doctorInfo.appendChild(info);
})

button2.addEventListener('click', async () => {
  const query = input2.value;
  const response = await axios.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&user_key=${apikey}`)
  console.log(response);
  const info = document.createElement('div');
  info.innerHTML = `<h2>Top 3 Results: </h2>`
  for (let i = 0; i < 3; i++) {
    info.innerHTML += `
      <p> ${response.data.data[i].profile.bio}</p>
      `
  }

  doctorInfo.appendChild(info);
})