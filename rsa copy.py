def block(x1, x2, x3):
    res = (x1 or x2 or (not x3)) and ((not x1) or (not x2) or x3)
    return res


def C(x1, x2, x3, x4, x5, x6, x7, x8):
    return block(x1, x2, x5) and block(x1, x3, x5) and block(x2, x3, x5) and \
        block(x1, x2, x6) and block(x1, x4, x6) and block(x2, x4, x6) and \
        block(x1, x3, x7) and block(x1, x4, x7) and block(x3, x4, x7) and \
        block(x2, x3, x8) and block(x2, x4, x8) and block(x3, x4, x8)


def fn(x1, x2, x3, x4):
    for i in range(0, 16):
        x8 = bool(i % 2)
        x7 = bool(i//2 % 2)
        x6 = bool(i//4 % 2)
        x5 = bool(i//8 % 2)
        if C(x1, x2, x3, x4, x5, x6, x7, x8) == True:
            return f'{int(x1)}{int(x2)}{int(x3)}{int(x4)} {int(x5)}{int(x6)}{int(x7)}{int(x8)}'
    return f'{int(x1)}{int(x2)}{int(x3)}{int(x4)} None'


for i in range(0, 16):
    x4 = bool(i % 2)
    x3 = bool(i//2 % 2)
    x2 = bool(i//4 % 2)
    x1 = bool(i//8 % 2)
    print(fn(x1, x2, x3, x4))
