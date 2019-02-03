/* Find all students */
let student = document.getElementsByClassName('student-item');
let studentCount = student.length;

/* Gets Number of Buttons */
let buttonCount = Math.ceil(studentCount/10); 

function showPage(x) {
  for (let i = 0; i < studentCount; i += 1) {
    student[i].style.display = 'none';
  }
  if (x == 1) {
    for (let i = 0; i < 10; i += 1) {
      student[i].style.display = 'block';
    }
  } else {
    a = x-1; /* Sets X to one less than the text content of the button to start the next round of 10 (X is content of button) */
    b = parseInt(a + '' + 0);
    c = parseInt(a + '' + 9);
    if (studentCount >= c) {
      for (let i = b; i <= c; i += 1) {
        student[i].style.display = 'block';
      }
    } else if (studentCount <= c) {
      for (let i = b; i < studentCount; i += 1) {
        student[i].style.display = 'block';
      }
    }
  }
};

/* Is my showPage function good? I feel proud of it but I don't know if this is how it's done. */

function removeActive() {
  let buttonActive = document.querySelectorAll('a.active');
  for (let i = 0; i < buttonActive.length; i += 1) {
    buttonActive[i].classList.remove('active');
  }
};

function appendPageLinks() {
  const paginationWrapper = document.createElement('div');
  const paginationList = document.createElement('ul');
  paginationWrapper.className = 'pagination';
  document.querySelector('div.page').appendChild(paginationWrapper);
  paginationWrapper.appendChild(paginationList);

  for (let i = 0; i < buttonCount; i += 1) {
    const paginationListItem = document.createElement('li');
    const paginationLink = document.createElement('a');

    paginationList.appendChild(paginationListItem);
    paginationListItem.appendChild(paginationLink);

    paginationLink.href.preventDefault = i+1;
    paginationLink.className = 'student-counter';
    paginationLink.textContent = i+1;

    paginationLink.addEventListener ('click', () => {
      removeActive();
      paginationLink.className = 'active';
      /* Pulls number from button */
      let x = paginationLink.textContent;
      showPage(x);
    });

  }
};

/* Add pagination if more than 10 students */

if (buttonCount < 10) {
  /* On load hide all but first 10 students */
  for (let i = 10; i < studentCount; i += 1) {
    student[i].style.display = 'none';
  }
  appendPageLinks();
}