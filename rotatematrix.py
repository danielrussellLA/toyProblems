# test cases
matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

matrix2 = [
    [1,  2, 3, 4, 5, 6],
    [7,  8, 9,10,11,12],
    [13,14,15,16,17,18],
    [19,20,21,22,23,24],
    [25,26,27,28,29,30],
    [31,32,33,34,35,36]
]

# algorithm
def rotate_matrix(matrix, n):
    rotated = []
    i = len(matrix) * n
    x = 0
    temp = []
    for row in range(0, len(matrix) * n):
        while(i):
            if len(temp) == n:
                rotated.insert(len(rotated), temp)
                temp = []
                x = 0
            temp.insert(n, matrix[x].pop())
            x += 1
            i -= 1
    rotated.insert(len(rotated), temp)
    return rotated

#  execution
if __name__ == "__main__":
    rotate_matrix(matrix1, 3)
    rotate_matrix(matrix2, 6)
