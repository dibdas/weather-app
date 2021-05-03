

const weather = () => {
  const root = document.getElementById('content');
  root.innerHTML = '';
  const element = document.createElement('div');
  element.innerHTML = `
  <div class="bg-dark  weather-container border border-warning">
    <div class="form-floating mb-3 mt-4 px-5">
    
    <input type="text" class="form-control" placeholder="enter the name of city" >
  </div>
  <button class="submit">Submit</button>
  </div>
    
  
    `;
  root.appendChild(element);
};
export default weather;