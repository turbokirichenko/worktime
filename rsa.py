def gcd(x, y):
    while y != 0:
        (x, y) = (y, x % y)
    return x


def gcd_extended(num1, num2):
    if num1 == 0:
        return (num2, 0, 1)
    else:
        div, x, y = gcd_extended(num2 % num1, num1)
    return (div, y - (num2 // num1) * x, x)


p = 486145180033462600762307431607
q = 47251
N = p*q
Y = (p-1)*(q-1)
e = 31
eu = gcd_extended(e, Y)
if eu[0] != 1:
    print("Bad e")

d = (Y + eu[1]) % Y
M = 566268877196869056462419883294 % N
print(p, q, N, Y)
print(e, d)
print(M)
Dp = d % (p-1)
Dq = d % (q-1)
print(Dp, Dq)
S = pow(M, d, N)
Sp = pow(M, Dp, p)  # not change
Sq = pow(M, Dq, q)
print(S, Sp, Sq)
Se = pow(Sp, e, N)
print(Se)
modal = (Se - M)
res = gcd(modal, N)
print(res, p, N)
print(res == p)

I = N//2
prevI = 0
count = 0
countAll = 0
while 1:
    I = I+1
    countAll += 1
    if (pow(I, Dp, p) == pow(I, d, N)):
        print(I)
        count = count + 1
    if (countAll % 10000000 == 0):
        print('count:', count, "/", countAll, countAll // count)
    if (I >= N):
        break
    # if S == pow(M, i, N):
    #    print(i % Dp, i % Dq, i % (p-1), i % (q-1), i)
    #    if i > d:
    #        break
