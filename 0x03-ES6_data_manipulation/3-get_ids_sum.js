from functools import reduce

def getStudentIdsSum(students):
    if not isinstance(students, list):
        return 0
    return reduce(lambda total, student: total + student.get('id', 0), students, 0)
