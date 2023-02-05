const sectionGreeting = document.querySelector("#greetings-container");
const sectionForm = document.querySelector('#forms-container');

//Sections children
const greetingChildren = sectionGreeting.children;
const formChildren = sectionForm.children;

for(let child of greetingChildren) {
  const button = child.querySelector('button');
  button.addEventListener('click',() => toggleSectionsPosition());
}

function toggleSectionsPosition() {
  const isOriginalPosition = !sectionGreeting.classList.contains('moving-to-right') 
    && !sectionForm.classList.contains('moving-to-left');
  
  const greetingWelcome = greetingChildren[0];
  const greetingHello = greetingChildren[1];  

  const formCreatAccount = formChildren[0];
  const formLogin = formChildren[1];

  if (isOriginalPosition) {
    //moving section to opposite position 
    replaceClass(sectionGreeting, { remove: "moving-to-start",  add: "moving-to-right" });
    replaceClass(sectionForm, { remove: "moving-to-start", add: "moving-to-left" });
    
    toggleSectionChildrenVisibility(greetingWelcome, greetingHello);
    toggleSectionChildrenVisibility(formCreatAccount, formLogin);

    return;

  } else {
      //moving section to original position
      replaceClass(sectionGreeting, { remove: "moving-to-right", add: "moving-to-start" });
      replaceClass(sectionForm, { remove: "moving-to-left", add: "moving-to-start"});
  
      toggleSectionChildrenVisibility(greetingWelcome, greetingHello);
      toggleSectionChildrenVisibility(formCreatAccount, formLogin);
  }
}

function toggleSectionChildrenVisibility(firstChild, secondChild) {
  const firstChildIsVisible = firstChild.classList.contains("d-flex");

  if (firstChildIsVisible) {
    replaceClass(firstChild, { remove: "d-flex", add: "d-none" });
    replaceClass(secondChild, { remove: "d-none", add: "d-flex" });

    return;
  } else {
    replaceClass(firstChild, { remove: "d-none", add: "d-flex" });
    replaceClass(secondChild, { remove: "d-flex", add: "d-none" });;    
  }
}

function replaceClass(element, className) { 
  element.classList.add(className.add);
  element.classList.remove(className.remove);
} 
