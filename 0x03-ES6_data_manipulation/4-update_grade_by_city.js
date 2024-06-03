def updateStudentGradeByCity(students, city, newGrades):
    if not isinstance(students, list) or not isinstance(city, str) or not isinstance(newGrades, list):
        return []

    def find_grade(student_id):
        grade = next((item['grade'] for item in newGrades if item['studentId'] == student_id), 'N/A')
        return grade

    return list(map(
        lambda student: {
            **student,
            'grade': find_grade(student['id'])
        },
        filter(lambda student: student.get('location') == city, students)
    ))
