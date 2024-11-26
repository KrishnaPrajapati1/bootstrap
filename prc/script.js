$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:5000/api/students/all',
        method: 'GET',
        success: function(data) {
            let studentList = '<ul class="list-group">';
            data.forEach(student => {
                studentList += `<li class="list-group-item">${student.name} - ${student.email}</li>`;
            });
            studentList += '</ul>';
            $('#students').html(studentList);
        },
        error: function(error) {
            console.error('Error fetching students:', error);
        }
    });
});