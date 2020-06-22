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
fetch('/leaderdata')
  .then((response) => {
    loader.style.display = 'inline-block';
    return response.json();
  })
  .then((data) => {
    // Work with JSON data here
    interns = data
    display(interns)
    topStyle();
    console.log(data);
    
  })
  .catch((err) => {
    // Do something for an error here
  });

  loader = document.getElementById('loading');
function display(arr) {
  
  var board = document.getElementById('leaderboard');
  board.innerHTML = `
     <th>S/N</th> 
     <th>Name</th> 
     <th>Slack id</th> 
     <th>Points</th>`;
  let no = 0;
  arr.forEach((intern) => {
    no++;
    board.innerHTML += `<tr class="row">
  <td>${no}</td>
  <td>${intern['FULL NAME']}</td>
  <td>${intern.USERNAME}</td>
  <td>${intern['TOTAL POINTS']}</td>
  <td><a href= "https://twitter.com/home">Share</a></td>
  </tr>`;
  });
  loader.style.display = 'none';
}

function dynamicsort(property, order) {
  var sort_order = 1;
  if (order === 'desc') {
    sort_order = -1;
  }
  return function (a, b) {
    // a should come before b in the sorted order
    if (Number.parseFloat(a[property]) < Number.parseFloat(b[property])) {
      return -1 * sort_order;
      // a should come after b in the sorted order
    } else if (
      Number.parseFloat(a[property]) > Number.parseFloat(b[property])
    ) {
      return 1 * sort_order;
      // a and b are the same
    } else {
      return 0 * sort_order;
    }
  };
}

var asc = document.getElementById('asc');
asc.addEventListener('click', () => {
  fetch('/leaderdata')
    .then((response) => {
      loader.style.display = 'inline-block';
      return response.json();
    })
    .then((data) => {
      // Work with JSON data here
      interns = data;
      display(interns.sort(dynamicsort('TOTAL POINTS', 'asc')));
    })
    .catch((err) => {
      // Do something for an error here
    });
});

var desc = document.getElementById('desc');
desc.addEventListener('click', () => {
  fetch('/leaderdata')
    .then((response) => {
      loader.style.display = 'inline-block';
      return response.json();
    })
    .then((data) => {
      // Work with JSON data here
      interns = data;
      display(interns.sort(dynamicsort('TOTAL POINTS', 'desc')));
      topStyle();
      console.log(data);
    })
    .catch((err) => {
      // Do something for an error here
    });
});

function topStyle() {
  var rows = document.getElementsByClassName('row');
  for (var i = 0; i < 3; i++) {
    rows[i].classList.add('top');
  }
}

