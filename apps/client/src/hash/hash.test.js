import { signHash, validateHash } from "./hash.js";

const templatesArray = [
    "qwdoiqhdawdaoaiwdh2qwsqwd",
    "wsdq22dwd29dwxwadaw!%@$!awd2q*",
    "  @!@  12@!#! !@!##!!@ 1!@@! ##!@!@!",
    "hqsqqhsbdwdkwd212b2sqs",
    "qwdqd083dhui2djhbqwd129doqdsmqdq2do1*@U@!B21hI!@U!@1@B!@1@#H!HQJSBi2u23uq3u",
    "wadwdq2wdoqwidqqiqwoq2q",
    "q2dq2e902ednw dq 2q2e q2iq2equd38q20i qwdq2",
]

const hashesArray = templatesArray.map(str => signHash(str));

console.log(hashesArray);

const testFunction = () => {
    templatesArray.forEach((temp, i) => {
        try {
            console.log("START TEST: " + (i + 1))
            const result = validateHash(temp, hashesArray[i]);
            if (result) {
                console.log("SUCCESS TEST PASSED")
            }
            if (!result) {
                throw new Error('it isnt passing test number: ' + i)
            }
        } catch (err) {
            console.error("ERROR: " + err.message)
            throw new Error()
        } finally {
            console.log("FINISH TEST")
        }
    })
}

testFunction()