// 함수 작성 과제

// 1. 인사말 메시지
// 사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성합니다.
function greetUser(userName) {
  let greetMessage = '안녕하세요! ' + userName + '님. 좋은 하루되세요!'
  return greetMessage
}
console.log( greetUser('헤리'))
console.log(typeof greetUser('헤리'))

// ## 2. 원가 계산
// 판매가를 입력 받아 원가를 계산하는 함수를 작성합니다.
// 판매가(세후 금액)에서 원가(세전 금액)를 계산하려면 판매가를 "100% + 세금 비율"로 나눠야 합니다.
// 해당 품목의 세금 비율은 3.3%입니다.
let calculateOriginalPrice = function(priceWithTax)  {
const taxRate = 3.3 / 100
const priceWithoutTax = priceWithTax / (100/100 + taxRate)
return priceWithoutTax
}

console.log(calculateOriginalPrice(10000))
console.log(typeof calculateOriginalPrice())

// 3. 주류 판매 가능 여부
// 신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성합니다.
// 19세 이상 주류 구매가 가능합니다.

//나의 주민등록증 
const registrationCard = {
  name:'우헤리',
  age: 5,
  gender: 'female'

  }

const canSellAlcohol = (registrationCard) => {
  const ADULT_AGE = 19
  
  if (registrationCard.age >= ADULT_AGE) return true
  else return false

}

console.log(canSellAlcohol(registrationCard))
console.log(typeof canSellAlcohol(registrationCard))

//4. 할인가 계산
// 판매가와 할인 비율(%)을 입력 받아, 할인가를 반환하는 함수를 작성합니다.
// [예] 판매가가 18,700원이고, 할인율이 20%인 경우
//      계산된 할인가는 14,960원입니다.

const getDiscountedPrice =function(originalPrice, discountPercent) {
  let numberOfdiscountPercent = parseInt(discountPercent)
  return (100 - numberOfdiscountPercent)/100 * originalPrice 
}

console.log(getDiscountedPrice(1000, 20))
console.log(getDiscountedPrice(1000, '30%'))
console.log(typeof getDiscountedPrice(1000, 20))

// 5. 등급 판단
// 점수를 전달받아 점수, 등급과 설명을 포함한 객체를 반환하는 함수를 작성합니다

const yourGrade = (score) => {
  let gradeReport = {
    score: score,
    grade: '등급',
    description:'설명'
  }

  if (score > 100) {return "만점이 100점인 수업입니다! 거짓말하지 마세요!"} 
  
  else if (score >= 90) {
    gradeReport.grade = 'A'
    gradeReport.description = '매우 우수'
  }

  else if (score >= 80) {
    gradeReport.grade = 'B'
    gradeReport.description = '우수'
  }

  else if (score >= 70) {
    gradeReport.grade = 'C'
    gradeReport.description = '보통'
  }
  else if (score >= 60) {
    gradeReport.grade = 'D'
    gradeReport.description = '미달, 통과 기준 근접'
  }
  else if (score < 60) {
    gradeReport.grade = 'F'
    gradeReport.description = '낙제'
  }


  return gradeReport

} 

console.log(yourGrade(50))
console.log(typeof yourGrade())