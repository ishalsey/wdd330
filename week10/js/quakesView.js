 // Quake View handler
 export default class QuakesView {
  renderQuakeList(quakeList, listElement) {
    //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
    listElement.innerHTML = quakeList.features
    .map(quake => {
      return `<li data-id="${quake.id}">${quake.properties.title}, <span style="color: gray;" data-id="${quake.id}">${new Date(quake.properties.time)}<span></li>`;
    })
    .join('');
  }
  renderQuake(quake, element) {
      const quakeProperties = Object.entries(quake.properties);
      // for the provided quake make a list of each of the properties associated with it. 
      // Then append the list to the provided element. Notice the first line of this method. 
      // Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
      // element.innerHTML = `quake`;
      console.log(element);
      if(element.classList.contains("hidden")){element.classList.remove("hidden");}

      console.log(quake);
      console.log(Object.entries(quake));
      console.log(Object.keys(quake));
      let toTheDOM = "";
      Object.keys(quake).forEach(property => {
          if(typeof quake[property] == 'object'){
              toTheDOM += `<p class="property_group">${property}: </p>`;
              Object.keys(quake[property]).forEach(sub_property => {
                  toTheDOM += `<p class="sub_property"><span class="sub_type">${sub_property}:</span> ${quake[property][sub_property]}</p>`;
              });
          } else {
              toTheDOM += `<p class="property_group">${property}: ${quake[property]}</p>`;
          }
      });
      console.log(toTheDOM);
      element.innerHTML = toTheDOM;
      let exitbtn = document.createElement('div');
      exitbtn.innerHTML = "X";
      exitbtn.classList.add("exit-btn");
      exitbtn.addEventListener('touchend', (e)=>{ element.classList.add("hidden"); });
      element.appendChild(exitbtn);
  }
}