let should = chai.should()
describe('Test fizzBuzz function', function () {
  it('if input number is divisible by 3 return Fizz', function () {
    let input = fizzBuzz(6)
    let expect = "Fizz"
    input.should.be.equal(expect)
  })

  it('if input number is divisible by 5 return Buzz', function () {
    let input = fizzBuzz(10)
    let expect = "Buzz"
    input.should.be.equal(expect)
  })

  it('if input number is divisible by 3 & 5 return FizzBuzz', function () {
    let input = fizzBuzz(15)
    let expect = "FizzBuzz"
    input.should.be.equal(expect)
  })

  it('if input number is not divisible by 3 or 5 return Num', function () {
    let input = fizzBuzz(8)
    let expect = input
    input.should.be.equal(expect)
  })
})