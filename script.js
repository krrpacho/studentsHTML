function loadStudents() {
    fetch('http://localhost:8080/students' + '/all')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#studentTable tbody');
            tableBody.innerHTML = '';

            data.forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.id}</td>
                    <td>${student.firstName}</td>
                    <td>${student.lastName}</td>
                    <td>${student.middleName}</td>
                    <td>${student.birthDate}</td>
                    <td>${student.group}</td>
                    <td>
                        <button onclick="deleteStudent(${student.id})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        });
}

function addStudent(student) {
    fetch('http://localhost:8080/students' + '/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    })
    .then(response => response.json())
    .then(() => {
        loadStudents(); 
    });
}

function deleteStudent(id) {
    fetch(`${'http://localhost:8080/students'}/delete/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        loadStudents(); 
    });
}

document.getElementById('addStudent').addEventListener('click', () => {
    const firstName = prompt('Enter first name:');
    const lastName = prompt('Enter last name:');
    const middleName = prompt('Enter middle name:');
    const birthDate = prompt('Enter birth date (YYYY-MM-DD):');
    const group = prompt('Enter group:');

    if (firstName && lastName && middleName && birthDate && group) {
        addStudent({ firstName, lastName, middleName, birthDate, group });
    }
});


loadStudents();

document.getElementById('search').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('#studentTable tbody tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const studentData = Array.from(cells).map(cell => cell.textContent.toLowerCase());
        const match = studentData.some(data => data.includes(query));
        
        row.style.display = match ? '' : 'none';
    });
});const baseURL = 'http://localhost:8080/api/students';  

function loadStudents() {
    fetch('http://localhost:8080/students' + '/all')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#studentTable tbody');
            tableBody.innerHTML = ''; 

            data.forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.id}</td>
                    <td>${student.firstName}</td>
                    <td>${student.lastName}</td>
                    <td>${student.middleName}</td>
                    <td>${student.dateOfBirth}</td>  <!-- Updated to match backend field -->
                    <td>${student.groupName}</td>  <!-- Updated to match backend field -->
                    <td>
                        <button onclick="deleteStudent(${student.id})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        });
}

function addStudent(student) {
    fetch('http://localhost:8080/students' + '/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    })
    .then(response => response.json())
    .then(() => {
        loadStudents(); 
    });
}

function deleteStudent(id) {
    fetch(`${'http://localhost:8080/students'}/delete/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        loadStudents();  
    });
}

document.getElementById('addStudent').addEventListener('click', () => {
    const firstName = prompt('Enter first name:');
    const lastName = prompt('Enter last name:');
    const middleName = prompt('Enter middle name:');
    const dateOfBirth = prompt('Enter birth date (YYYY-MM-DD):'); 
    const groupName = prompt('Enter group name:');  

    if (firstName && lastName && dateOfBirth && groupName) {
        addStudent({ firstName, lastName, middleName, dateOfBirth, groupName });
    }
});

loadStudents(); 
document.getElementById('search').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('#studentTable tbody tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const studentData = Array.from(cells).map(cell => cell.textContent.toLowerCase());
        const match = studentData.some(data => data.includes(query));
        
        row.style.display = match ? '' : 'none';
    });
});

