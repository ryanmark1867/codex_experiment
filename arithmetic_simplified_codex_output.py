def multiply(num1, num2):
    return num1 * num2
# 
def divide(num1, num2):
    return num1 / num2
# 
def add(num1, num2):
    return num1 + num2
# 
def main():
    num1 = 10
    num2 = 10
    numa = multiply(num1, num2)
    num1 = divide(numa, num1)
    num2 = add(num1, num2)
    print("NUM1 * NUM2:", numa)
    print("NUMA / NUM1:", num1)
    print("NUM1 + NUM2:", num2)
# 
main()