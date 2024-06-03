def getListStudentIds(students):
    if not isinstance(students, list):
        return []
    return list(map(lambda student: student.get('id'), students))
