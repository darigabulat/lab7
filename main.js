// Find the body element
const body = document.querySelector('body');

// Create the main heading and add it to the body
const h1 = document.createElement('h1');
h1.textContent = 'Lab7 Assignment';
h1.style.color = 'blue';
body.appendChild(h1);

// Add a horizontal rule to the body
const hr = document.createElement('hr');
body.appendChild(hr);

// Create the subheading for the task and add it to the body
const h2Task = document.createElement('h2');
h2Task.textContent = 'Task';
h2Task.style.color = 'red';
body.appendChild(h2Task);

// Create the paragraph and add it to the body
const pTask = document.createElement('p');
pTask.innerHTML = 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';
body.appendChild(pTask);

// Create the unordered list and add it to the body
const ul = document.createElement('ul');
body.appendChild(ul);

// Add the list items to the unordered list
const listItems = [
  'find elements in the DOM (<b>5 points</b>)',
  'create/add/remove elements (<b>5 points</b>)',
  'change content of the elements (<b>5 points</b>)',
  'change styles of the elements (<b>5 points</b>)',
  'change attributes of the elements (<b>5 points</b>)',
  'change classes of the elements (<b>5 points</b>)'
];
listItems.forEach((item, index) => {
  const li = document.createElement('li');
  li.classList.add(index % 2 === 0 ? 'even' : 'odd');
  li.style.color = index % 2 === 0 ? 'green' : 'purple';
  li.innerHTML = item;
  ul.appendChild(li);
});

// Create the horizontal rule and add it to the body
const hr2 = document.createElement('hr');
body.appendChild(hr2);

// Create the subheading for the submission and add it to the body
const h2Submission = document.createElement('h2');
h2Submission.textContent = 'Submission';
h2Submission.style.color = 'red';
body.appendChild(h2Submission);

// Create the paragraph and add it to the body
const pSubmission = document.createElement('p');
pSubmission.textContent = 'To submit your work, follow these instructions:';
body.appendChild(pSubmission);

// Create the unordered list and add it to the body
const ul2 = document.createElement('ul');
body.appendChild(ul2);

// Add the list items to the unordered list
const listItems2 = [
  'Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).',
  'Clone this repository to your local machine and work inside it.',
  'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).',
  'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).',
  'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).',
  'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).',
  'After you finish your work, submit it to the Github (<b>2 points</b>).'
];
listItems2.forEach((item, index) => {
  const li2 = document.createElement('li');
  li2.classList.add(index % 2 === 0 ? 'even' : 'odd');
  li2.style.color = index % 2 === 0 ? 'green' : 'purple';
  li2.innerHTML = item;
  ul2.appendChild(li2);
});

// Create the horizontal rule and add it to the body
const hr3 = document.createElement('hr');
body.appendChild(hr3);