const students = [
    {
        name: "Prajan Ghimire",
        faculty: "BIM",
        year: 3,
        courses: ["Economics", "Database", "Programming"]
    },
    {
        name: "Prajen Rajbanshi",
        faculty: "BIM",
        year: 3,
        courses: ["Economics", "Database", "Programming"]
    },
    {
        name: "Crust Johnson",
        faculty: "CSIT",
        year: 1,
        courses: ["Compiler", "Python", "Java"]
    },
    {
        name: "Sarah Chaudhary",
        faculty: "BCA",
        year: 4,
        courses: ["Software Design", "Networks", "Cloud"]
    }
];

// Geting DOM elements
const facultyFilter = document.getElementById('faculty-filter');
const studentsContainer = document.getElementById('students-container');

// Displaying students data
const displayStudents = (faculty = 'all') => {
    // Filter students based on selected faculty
    const filteredStudents = students.filter(student => 
        faculty === 'all' || student.faculty === faculty
    );

    // Map filter
    const studentCards = filteredStudents.map(student => `
        <div class="student-card">
            <h3>${student.name}</h3>
            <p>Faculty: ${student.faculty}</p>
            <p>Year: ${student.year}</p>
            <p>Courses: ${student.courses.join(', ')}</p>
        </div>
    `).join('');

    // Update display
    studentsContainer.innerHTML = studentCards;
};

// event listener 
    facultyFilter.addEventListener('change', (e) => {
    displayStudents(e.target.value);
});

// Initial display
displayStudents();