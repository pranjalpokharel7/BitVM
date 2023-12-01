import { ASM_ADD, ASM_SUB, ASM_MUL, ASM_JMP, ASM_BEQ, ASM_BNE } from '../transactions/bitvm.js'

export const program = [
    [ASM_ADD, 0, 1, 0], // Increment value at address 0 by value at address 1
    [ASM_BNE, 0, 2, -1], // If value at address 0 and value at address 2 are not equal, jump 1 line backwards
]

export const data = [0, 1, 10, 0, 0]
