def getStudentsByLocation(students, city):
    if not isinstance(students, list) or not isinstance(city, str):
        return []
    return list(filter(lambda student: student.get('location') == city, students))
