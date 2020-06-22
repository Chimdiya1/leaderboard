    fetch('/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Work with JSON data here
        console.log(data);
      })
      .catch((err) => {
        // Do something for an error here
      });



var interns = [
  {
    name: 'Ben tom',
    userName: '@Chimdia',
    points: 8,
  },
  {
    name: 'Anyiam Chimdia',
    userName: '@Chimdia',
    points: 87,
  },
  {
    name: 'Evans shak',
    userName: '@Chimdia',
    points: 47,
  },
  {
    name: 'poyoyo poyumi',
    userName: '@Chimdia',
    points: 16,
  },
];
function display() {
  var board = document.getElementById('leaderboard');
  board.innerHTML = `<th>Name</th> 
     <th>Slack id</th> 
     <th>Points</th>`;
  interns.forEach((intern) => {
    board.innerHTML += `<tr class="row">
  <td>${intern.name}</td>
  <td>${intern.userName}</td>
  <td>${intern.points}</td>
  <td>Share</td>
  </tr>`;
  });
}

display();

function dynamicsort(property, order) {
  var sort_order = 1;
  if (order === 'desc') {
    sort_order = -1;
  }
  return function (a, b) {
    // a should come before b in the sorted order
    if (a[property] < b[property]) {
      return -1 * sort_order;
      // a should come after b in the sorted order
    } else if (a[property] > b[property]) {
      return 1 * sort_order;
      // a and b are the same
    } else {
      return 0 * sort_order;
    }
  };
}

var asc = document.getElementById('asc');
asc.addEventListener('click', () => {
  interns.sort(dynamicsort('points', 'asc'));
  display();
});
var desc = document.getElementById('desc');
desc.addEventListener('click', () => {
  interns.sort(dynamicsort('points', 'desc'));
  display();
});

var rows = document.getElementsByClassName('row');
for (var i = 0; i < 3; i++) {
  rows[i].classList.add('top');
}
