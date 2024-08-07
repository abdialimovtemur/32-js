function addCount() {
    const addCountBtn = document.getElementById('addCount');
    const taskList = document.getElementById('tasks_list');

    addCountBtn.onclick = function() {


        const li = document.createElement('li');
        let num = 0;
        li.textContent = num;  

        const plusBtn = document.createElement('button');
        plusBtn.textContent = '+';
        plusBtn.onclick = function() {
            num++;
            li.firstChild.textContent = num; 
        };

        const minusBtn = document.createElement('button');
        minusBtn.textContent = '-';
        minusBtn.onclick = function() {
            num--;
            li.firstChild.textContent = num; 
        };

        li.appendChild(plusBtn);
        li.appendChild(minusBtn);
        taskList.appendChild(li);

    };
}

addCount();









// ikkinchi masala



const users = [];

// References to DOM elements
const userForm = document.getElementById('userForm');
const userTableBody = document.getElementById('userTableBody');
const searchInput = document.getElementById('search');

function renderUsers(filteredUsers = users) {
    userTableBody.innerHTML = '';
    filteredUsers.forEach((user, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        userTableBody.appendChild(tr);
    });
}

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    
    users.push({ firstName, lastName });
    
    userForm.reset();
    
    renderUsers();
});

function deleteUser(index) {
    users.splice(index, 1);
    renderUsers();
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredUsers = users.filter(user => 
        user.firstName.toLowerCase().includes(searchTerm)
    );
    renderUsers(filteredUsers);
});

renderUsers();
