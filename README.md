# 1. 자바스크립트 코드 작성 위치

- js-location.html
- javascript/jsLocation.js

## 1.1 자바스크립트 콘솔

- console.html

# 2. 데이터 형과 연산자

## 2.1 variable(변수)

- variable.html

### 2.1.1 변수란?

- 데이터가 컴퓨터 메모리에 저장되는 주소
- 변수를 선언하고 할당한다.

### 2.1.2 키워드

- var 이제 잘 안씀
- let
- const 상수

### 2.1.3 변수 네이밍 규칙

- 변수 이름에는 영어, 숫자, 밑줄, $ 사용
- 숫자로 시작하면 안된다.
- 대소문자 구분, 카멜케이스 사용이 일반적

## 2.2 자료형(data type)

- 숫자(number)
- 문자열(string)
- 부울(boolean)
- Null
- Undefined
- 객체(object)
- 그외...Bigint, 심볼(symbol)

### 2.2.1 숫자(number)

- number.html
- 정수(integer)
- 소수점이 있는 부동소수점 숫자(floating point number)

### 2.2.2 문자열(string)

- string.html
- 하나 이상의 문자를 표현하는 데 사용
- 문자열에서는 문자들을 큰 따옴표""나 작은 따옴표''로 감싸야한다.

### 2.2.4 부울(boolean)

- boolean.html
- true와 false 값만 존재

### 2.2.5 Undefined 와 Null

- undefined-null.html
- 변수가 값을 가지고 있지 않으면 그 값은 undefined
- 유효하지 않은 데이터 null

### 2.2.6 객체(object)

- object.html
- 객체는 프로퍼티와 메서드로 구성
- 프로퍼티(속성)는 키와 값의 쌍
- 메서드(함수)는 기능

## 2.3 연산자 operator

- operator.html

### 2.3.1 할당 연산자

- 할당(assignment)연산자는 데이터나 변수 값을 변수에 저장, 즉 메모리 공간에 할당하는 역할

```js
let a = 10,
  b = 20,
  c = 30,
  d = 40,
  e = 50;
let f = "안녕";

a += 10;
f += "하세요!";
console.log(a);
console.log(f);
```

### 2.3.2 비교 연산자

```js
let a = 3,
  b = "3",
  c = 5,
  d = 3;

console.log(a == b); // 같다
console.log(a === b); // 값과 데이터 타입이 같다
console.log(a != b); // 다르다
console.log(a !== b); // 값과 데이터 타입이 다르다
console.log(a > c); // 크다
console.log(a < c); // 작다
console.log(a >= c); // 크거나 같다
console.log(a <= d); // 작거나 같다
```

### 2.3.3 논리 연산자

```txt
&& AND 두 조건이 모두 true일 경우에만 최종결과 true
|| OR 두 조건 중 하나만 true가 되어도 최종결과 true
! NOT 결과가 true인 경우 false, 반대로 false인 경우 true
```

# 3. 반복문

- for.html
- 특정 코드를 반복해서 실행 for(for in, for of), while, do while

## 3.1 for 문

- 기본 형태

```js
for(초기값; 조건식; 증가 또는 감소;){
 문장;
 ...
}
```

```js
// for의 조건식이 true인 동안 문장들을 반복실행
// 1. i의 값을 1로 초기화 let i = 1;
// 2. 조건식 1 <= 3 true, 1 출력
// 3. i의 값이 1 증가 i++, i의 값이 2가 됨
// 4. 조건식 2 <= 3 true, 2 출력
// 5. i의 값이 1 증가 i++, i의 값이 3이 됨
// 6. 조건식 3 <= 3 true, 3 출력
// 7. i의 값이 1 증가 i++, i의 값이 4가 됨
// 8. 조건식 4 <= 3 false, for 루프를 빠져나감
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

```js
// for 문, 배열, 템플릿 문자열을 이용하여
// 웹페이지 글자에 색을 설정하는 프로그램
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "navy",
  "purple",
  "violet",
];

let text = "";
for (let i = 0; i < colors.length; i++) {
  text += `<p style="color: ${colors[i]}">안녕하세요!</p>`;
}
console.log(text);
document.querySelector("#show").innerHTML = text;
```

```js
const projects = [
  {
    projectName: "웹배너 디자인",
    published: "2025. 04. 21",
    description: "웹 배너 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=1",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
  {
    projectName: "제품 상세페이지 디자인",
    published: "2025. 04. 24",
    description: "제품 상세페이지 디자인 작업입니다.",
    imgSrc: "https://picsum.photos/400/300?random=2",
  },
];

let tempTags = "";
for (let i = 0; i < projects.length; i++) {
  tempTags += `<li>
    <a href="#">
     <img src="${projects[i].imgSrc}" alt="이미지" />
     <h2>프로젝트명: ${projects[i].projectName}</h2>
     <p>프로젝트 설명: ${projects[i].description}</p>
     <span>업로드 날짜: ${projects[i].published}</span>
    </a>
   </li>`;
}
document.querySelector(".projects").innerHTML = tempTags;
```

## 3.2 for in 문

- 기본 형태

```js
for(변수 in 객체){
 문장;
 ...
}
```

```js
const project = {
  title: "제품 상세페이지",
  description: "실제 작업한 상세페이지에 대한 컨셉 및 내용 설명입니다.",
  createdAt: "0000. 00. 00",
  imgSrc: "https://picsum.photos/300/200?random=1",
};

// for in 문
// 객체 내 각 요소들을 반복해서 읽어와
// 그 키를 변수에 저장하는 식으로 반복 루프 진행
for (let property in project) {
  console.log(project[property]);
}
```

## 3.3 for of 문

- 기본 형태

```js
for(변수 of 배열){
 문장;
 ...
}
```

```js
// for of 문
const cardWrap = document.getElementById("cardWrap");
let htmlTag = "";

const projects = [
  {
    title: "첫 번째 작업",
    description: "실제 작업한 작업물 컨셉 및 내용 설명입니다.",
    createdAt: "0000. 00. 00",
    imgSrc: "https://picsum.photos/300/200?random=1",
  },
  {
    title: "두 번째 작업",
    description: "실제 작업한 작업물 컨셉 및 내용 설명입니다.",
    createdAt: "0000. 00. 00",
    imgSrc: "https://picsum.photos/300/200?random=2",
  },
  {
    title: "세 번째 작업",
    description: "실제 작업한 작업물 컨셉 및 내용 설명입니다.",
    createdAt: "0000. 00. 00",
    imgSrc: "https://picsum.photos/300/200?random=3",
  },
  {
    title: "네 번째 작업",
    description: "실제 작업한 작업물 컨셉 및 내용 설명입니다.",
    createdAt: "0000. 00. 00",
    imgSrc: "https://picsum.photos/300/200?random=4",
  },
  {
    title: "다섯 번째 작업",
    description: "실제 작업한 작업물 컨셉 및 내용 설명입니다.",
    createdAt: "0000. 00. 00",
    imgSrc: "https://picsum.photos/300/200?random=5",
  },
];

for (let item of projects) {
  htmlTag += `
     <div class="card">
      <div class="thumbnail">
       <img src="${item.imgSrc}" alt="작업물 썸네일" />
      </div>
      <div class="text-wrap">
       <h2>${item.title}</h2>
       <p>${item.description}</p>
       <span>${item.createdAt}</span>
      </div>
    </div>`;
}

cardWrap.innerHTML = htmlTag;
```

# 4. 조건문

## 4.1 if~

- 기본 형태

```js
if(조건식){
 문장;
 ...
}
```

## 4.2 if ~ else ~

- 기본 형태

```js
if(조건식){
 문장;
 ...
}else{
 문장;
 ...
}
```

## 4.3 if ~ else if ~ else ~

- 기본 형태

```js
if(조건식1){
 문장;
 ...
}else if(조건식2){
 문장;
 ...
}else{
 문장;
 ...
}
```

# 5. 함수

## 5.1 함수 정의와 호출

```js
// 함수 정의
function hello() {
  console.log("안녕하세요!");
}

// 함수 호출
hello();
```

## 5.2 매개변수 parameter, 인수 argument

```js
function hello(text) {
  console.log(text);
}

hello("Hello!!");
hello("안녕!");
hello("안녕하세요!");
hello(19);
```

## 5.3 익명 함수

```js
function sayHello(callBack) {
  callBack();
  console.log("콜백 함수가 실행되었습니다!");
}

sayHello(() => {
  console.log("안녕!");
});
```

## 5.4 자바스크립트 스코프 scope

- 스코프(scope)는 "범위"라는 뜻을 가진 용어
- 변수에 접근할 수 있는 유효 범위를 의미

- 전역 스코프(global scope)

  - 하나의 프로그램 내 전체 영역에서 사용 가능
  - 전역 스코프에서 사용되는 변수를 전역 변수(global variable)라고 함

- 함수 스코프(function scope)

  - 함수 내에서만 사용 가능
  - 함수 스코프에서 사용되는 변수를 지역 변수(local variable)라고 함

- 블록 스코프(block scope)

  - 블록({})내에서 사용 가능
  - 특정 블록({}) 내에서 let 이나 const로 선언한 변수는 블록 외부에서 사용할 수 없음

  ### 5.4.1 전역 스코프(global scope)

  - 전역 스코프에서 선언된 전역 변수는 프로그램 내 어디서든 접근 가능

  ```js
  let x = 10;

  function fnc() {
    console.log(x);
  }

  fnc();
  console.log(x);
  ```

### 5.4.2 함수 스코프 (function scope)

- 함수 스코프에서 선언된 변수를 지역 변수
- 변수가 선언된 해당 함수 스코프에서만 접근 가능

```js
function fnc() {
  let x = 10;
  console.log(x);
}

fnc();
console.log(x);
```

### 5.4.3 블록 스코프(block scope)

- 블록 스코프에서 선언된 변수는 해당 블록 내에서만 사용 가능

```js
function fnc() {
  if (true) {
    let x = 10; // 변수 x는 if문 내, 즉 블록 내부에서 선언
  }
  console.log(x); // 블록 외부에서는 변수 x에 접근 하지 못함
}

fnc();
```

# 6. 객체 object

```js
const project = {
  title: "제목",
  desc: "설명",
  published: "날짜",
};
```

## 6.1 프로퍼티 property

```js
const member = {
  userName: "홍길동",
  age: 30,
  userId: "kdhong",
  // 중첩 객체
  // 객체 member의 프로퍼티 hobby는 값으로
  // 객체(프로퍼티: hobby1, hobby2, hobby3)를 가지고 있다.
  hobby: {
    hobby1: "게임",
    hobby2: "탁구",
    hobby3: "축구",
  },
};

// memeber.email에 "kdh@example.com"값을 할당함으로써
// 객체 member에 email 프로퍼티를 추가한다.
member.email = "kdh@example.com";

// 객체 memeber의 프로퍼티 age를 삭제
// 키워드 delete는 해당 프로퍼티 자체와 값을 삭제한다.
delete member.age;

let text = "";

for (property in member) {
  text += `키: ${property}, 값: ${member[property]} <br>`;
}

text += member.hobby.hobby1;
text += member.hobby.hobby2;
text += member.hobby.hobby3;

document.querySelector("#show").innerHTML = text;
```

## 6.2 메서드 method

- 프로퍼티는 객체에 소속된 변수
- 메서드는 객체에 소속된 함수
- 프로퍼티는 객체의 상태를 정의
- 메서드는 객체의 동작을 정의한다고 할 수 있다.

```js
const dog = {
  name: "댕댕이",
  species: "믹스",
  color: "알록달록",
  age: 3,
  // 메서드 intro
  // intro: function () {},
  intro() {
    return `나의 이름은 ${this.name}이고, 나이는 ${this.age}살 입니다.`;
  },
};

dog.getColor = function () {
  return `색깔은 ${this.color}입니다.`;
};

document.querySelector("#show").innerHTML = dog.getColor();
```

## 6.3 생성자 함수 constructor function

- 생성자 함수란 일반 함수와 기능적인 차이는 없다.
- 그러나 일반 함수와는 달리 생성자 함수는 new 연산자와 함께 자바스크립트에서 객체를 생성하기 위해 사용
- 생성자 함수를 정의할 때에는 일반 함수와 구분하기 위해 첫 글자를 대문자로 시작

```js
// 생성자 함수의 객체 생성 예
// 1. 생성자 함수 Member는 세 개의 매개변수 userId, userName, age를 가진다.
// function Member(userId, userName, age) {
//  // 키워드 this는 생성자 함수로 생성되는 객체 자신을 의미
//  this.userId = userId;
//  this.userName = userName;
//  this.age = age;
// }

// 객체 단위로 묶어서 전달
// function Member(options) {
//  // 키워드 this는 생성자 함수로 생성되는 객체 자신을 의미
//  this.userId = options.userId;
//  this.userName = options.userName;
//  this.age = options.age;
// }

// 구조 분해 할당
function Member({ userId, userName, age }) {
  // 키워드 this는 생성자 함수로 생성되는 객체 자신을 의미
  this.userId = userId;
  this.userName = userName;
  this.age = age;
  // 생성자 함수의 메서드
  this.getUserName = function () {
    return `나의 이름은 ${this.userName}입니다!`;
  };
}

// 2. new 연산자를 이용하여 생성자 함수 호출 시 인수를 전달 받는데 사용한다.
const member1 = new Member("kdhong", "홍길동", 25);
const member2 = new Member({
  userId: "kdkim",
  userName: "김길동",
  age: 10,
});

let text = "";
text += member2.userId;
text += member2.userName;
text += member2.age;
text += member2.getUserName();
// for (property in member2) {
//  text += `<li>${member2[property]}</li>`;
// }

document.getElementById("show").innerHTML = text;
```

## 6.4 프로토타입

- prototype.html
- 모든 자바스크립트 객체들은 프로토타입 객체(prototype object)로부터 프로퍼티와 메서드를 상속받는다.

```js
function Member(userId, userName, age) {
  this.userId = userId;
  this.userName = userName;
  this.age = age;
}

// 모든 자바스크립트 객체는 프로토타입으로부터
// 프로퍼티와 메서드를 상속받는다.
// 프로토타입을 이용하면 생성자 함수에 의해 생성된 모든 객체들에
// 새로운 프로퍼티와 메서드를 추가할 수 있다.
Member.prototype.company = "삼성";
Member.prototype.getUserName = function () {
  return `이름은 ${this.userName}입니다.`;
};

const member1 = new Member("kdhong", "홍길동", 25);

let text = "";
text += member1.company + "<br>";
text += member1.getUserName();

document.querySelector(".show").innerHTML = text;
```

## 6.5 클래스

- 클래스(class)는 객체를 생성하기 위한 템플릿(template)
- 자바스크립트에서 클래스는 프로토타입을 이용하여 만들어졌지만
- 프로토타입을 사용한 객체지향 프로그래밍과는 문법이 다르고 사용방법 또한 다르다.
- 자바스크립에서 클래스는 함수와 유사한 구조를 가지며
- 클래스는 특별한 함수라고 볼 수 있다.

### 6.5.1 클래스의 기본 구조

```js
// 자바스립트의 클래스
class Member {
  // 1. 생성자 constructor는 new 연산자에 의해 자동으로 호출
  // 객체의 기본 상태를 설정하는 데 사용
  constructor(userId, userName, age) {
    this.userId = userId;
    this.userName = userName;
    this.age = age;
  }
  // 2. 클래스 메서드
  getUserName() {
    return `이름은 ${this.userName}입니다.`;
  }
}

const member1 = new Member("kdhong", "홍길동", 30);
console.log(member1);

let text = "";
text += `${member1.userId} <br>`;
text += `${member1.userName} <br>`;
text += `${member1.age} <br>`;
text += `${member1.getUserName()} <br>`;

document.querySelector("#show").innerHTML = text;
```

### 6.5.2 클래스 상속

- 클래스 상속은 다른 클래스에 있는 프로퍼티와 메서드를 상속받아 사용하는 것을 말함
- 하나의 클래스에서 부모 클래스가 가지고 있는 자원과 기능을 확장하여 사용할 수 있음
- 클래스 상속에는 키워 extends를 사용

```js
// 자바스립트의 클래스
class Member {
  // 1. 생성자 constructor는 new 연산자에 의해 자동으로 호출
  // 객체의 기본 상태를 설정하는 데 사용
  constructor(userId, userName, age) {
    this.userId = userId;
    this.userName = userName;
    this.age = age;
  }
  // 2. 클래스 메서드
  getUserName() {
    return `이름은 ${this.userName}입니다.`;
  }
}

// 클래스 상속
class Student extends Member {
  constructor(userId, userName, age, school) {
    super(userId, userName, age);
    this.school = school;
  }
  intro() {
    return `${this.getUserName()} ${this.school} 학생입니다.`;
  }
}

const member1 = new Member("kdhong", "홍길동", 30);
const student1 = new Student("kdkim", "김길동", 25, "그린컴퓨터학원");

let text = "";
text += `${member1.userId} <br>`;
text += `${member1.userName} <br>`;
text += `${member1.age} <br>`;
text += `${member1.getUserName()} <br>`;

document.querySelector("#show").innerHTML = student1.intro();
```

### 6.5.3 정적 메서드

- 정적 메서드(static method)는 클래스 자체에서 정의
- 정적 메서드는 객체를 통해 호출되는 것이 아니라 클래스에서 호출하여 사용하는 메서드

```js
class Member {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return "나의 이름은 " + this.name + "입니다.";
  }
  // 정적 메서드
  static getCountry() {
    return "한국인입니다.";
  }
}
const mem1 = new Member("홍길동", 30);

let text = "";
text += mem1.getName() + "<br>";
text += Member.getCountry(); // 정적 메서드는 클래스 자체에 속하는 메서드임

document.getElementById("show").innerHTML = text;
```

# 7. 배열 array

- array.html
- 여러 값을 하나의 변수에 저장할 수 있게 해주는 특별한 변수

## 7.1 배열의 생성

```js
// 배열의 생성
const works = [
  "상세페이지",
  "웹사이트 리디자인",
  "클론코딩",
  "포트폴리오사이트",
  "노션 포트폴리오",
];

let text = "";
text += `${works} <br>`;
text += `${works[0]} <br>`;
text += `${works[1]} <br>`;
text += `${works[2]} <br>`;
text += `${works[3]} <br>`;
text += `${works[4]} <br>`;

// Array()메서드와 new 연산자를 이용한 배열 생성
const projects = new Array("팀작업", "앱디자인", "웹디자인", "그외");
// ... 스프레드연산자 - 무한대로 저장가능

// document.querySelector("#show").innerHTML = text;
document.querySelector("#show").innerHTML = projects;
```

## 7.2 배열 요소 변환/추가/삭제

- join(), push(), pop(), shift()
- 원본 배열을 건드리게 된다.

### 7.2.1 join() 메서드

- 배열을 문자열로 변환하는 데 사용

```js
const works = [
  "상세페이지",
  "웹사이트리디자인",
  "클론코딩",
  "포트폴리오사이트",
  "노션포트폴리오",
];

const str1 = works.join();
const str2 = works.join("/");
const str3 = works.join("");

let text = "";
text += `${str1} <br>`;
text += `${str2} <br>`;
text += `${str3} <br>`;

document.querySelector("#show").innerHTML = text;
```

### 7.2.2 push() 메서드

- 배열의 끝에 새로운 요소를 추가하는 데 사용

```js
const works = [
  "상세페이지",
  "웹사이트리디자인",
  "클론코딩",
  "포트폴리오사이트",
];

const returnValue = works.push("노션포트폴리오");

let text = "";
text += `${works} <br>`;
// push() 메서드는 배열의 길이를 반환한다.
text += `반환값: ${returnValue} <br>`;

document.querySelector("#show").innerHTML = text;
```

### 7.2.3 pop() 메서드

- 배열의 마지막 요소를 삭제하는데 사용

```js
const works = [
  "상세페이지",
  "웹사이트리디자인",
  "클론코딩",
  "포트폴리오사이트",
  "노션포트폴리오",
];

const returnValue = works.pop();

let text = "";
text += `${works} <br>`;
// 제일 마지막 요소인 "노션포트폴리오"를 삭제하고 삭제된 요소인 "노션포트폴리오" 반환
text += `반환값: ${returnValue} <br>`;

document.querySelector("#show").innerHTML = text;
```

### 7.2.4 shift() 메서드

- 배열의 첫 요소를 삭제하는데 사용

```js
const works = [
  "상세페이지",
  "웹사이트리디자인",
  "클론코딩",
  "포트폴리오사이트",
  "노션포트폴리오",
];

const returnValue = works.shift();

let text = "";
text += `${works} <br>`;
text += `반환값: ${returnValue} <br>`;

document.querySelector("#show").innerHTML = text;
```

### 7.2.5 splice() 메서드

- 배열에 요소를 추가하거나 삭제할 때 사용

```js
const works = [
  "상세페이지",
  "웹사이트리디자인",
  "클론코딩",
  "포트폴리오사이트",
  "노션포트폴리오",
];

// 1. 인덱스 2인 요소 "클론코딩"부터 3개의 요소를 삭제하고 "배너디자인" 삽입
// const returnValue = works.splice(2, 3, "배너디자인");

// 2. 인덱스 2인 요소 "클론코딩"부터 0개의 요소를 삭제하고 인덱스 2에 "배너디자인" 삽입
// const returnValue = works.splice(2, 0, "배너디자인");

// 3. 인덱스 2인 요소 부터 1개의 요소 "클론코딩" 삭제
const returnValue = works.splice(2, 1);

let text = "";
text += `${works} <br>`;
text += `반환값: ${returnValue} <br>`;

document.querySelector("#show").innerHTML = text;
```

## 7.3 배열 요소 추출/검색

- 원본을 건드리지 않고 새로운 배열을 만든다.

### 7.3.1 indexOf() 메서드

- 배열에서 특정 문자열에 위치, 즉 인덱스 값을 반환

```js
const works = [
  "상세페이지",
  "웹사이트리디자인",
  "클론코딩",
  "포트폴리오사이트",
  "노션포트폴리오",
];

const index1 = works.indexOf("웹사이트리디자인");
// "포트폴리오사이트"를 검색할 때 인덱스 2의 위치에서 시작
const index2 = works.indexOf("포트폴리오사이트", 2);
// 배열에서 "배너디자인"이 존재하지 않기 때문에 -1을 반환
const index3 = works.indexOf("배너디자인");

let text = "";
text += `${index1} <br>`;
text += `${index2} <br>`;
text += `${index3} <br>`;

document.querySelector("#show").innerHTML = text;
```

### 7.3.2 includes() 메서드

- 배열에서 특정 요소의 존재 여부를 파악하는데 사용

```js
const works = [
  "상세페이지",
  "웹사이트리디자인",
  "클론코딩",
  "포트폴리오사이트",
  "노션포트폴리오",
];

// "배너디자인"은 배열에 존재 x -> false
const result1 = works.includes("배너디자인");
// "클론코딩"은 배열에 존재 o -> true
const result2 = works.includes("클론코딩");

let text = "";
text += `${result1} <br>`;
text += `${result2} <br>`;

document.querySelector("#show").innerHTML = text;
```

### 7.3.3 slice() 메서드

- 인덱스를 이용하여 특정 요소를 추출하는데 사용

```js
const works = [
  "상세페이지",
  "웹사이트리디자인",
  "포트폴리오사이트",
  "노션포트폴리오",
];

// 인덱스 1부터 인덱스 3 사이(3은 포함하지 않음)의 요소
const arr1 = works.slice(1, 3);
// 인덱스 2부터 끝까지의 요소
const arr2 = works.slice(2);
// 끝에서 3번째 요소 부터 2번째 요소
const arr3 = works.slice(-3, -1);

let text = "";
text += `${arr1} <br>`;
text += `${arr2} <br>`;
text += `${arr3} <br>`;
text += `${works} <br>`;

document.querySelector("#show").innerHTML = text;
```

### 7.3.4 find() 메서드

- 배열에서 특정 요소를 찾는 콜백 함수(callback function)를 통해 전달하여 조건에 해당하는 첫 번째 요소 값을 반환

```js
const works = [
  "상세페이지",
  "웹사이트리디자인",
  "클론코딩",
  "포트폴리오사이트",
  "클론코딩",
  "노션포트폴리오",
];

const arr = works.find((work) => {
  if (work !== "클론코딩") {
    console.log(work);
    return;
  }
  return work;
});

let text = "";

text += `${arr} <br>`;
text += `${works} <br>`;

document.querySelector("#show").innerHTML = text;
```

### 7.3.5 forEach() 메서드

- 배열 각 요소에 대해 매개변수로 설정된 콜백 함수를 실행

```js
const works = [
  "상세페이지",
  "웹사이트리디자인",
  "클론코딩",
  "포트폴리오사이트",
  "클론코딩",
  "노션포트폴리오",
];
let text = "";

works.forEach((item, index) => {
  text += `${index}: ${item} <br>`;
});

document.querySelector("#show").innerHTML = text;
```

### 7.3.6 map() 메서드

- 배열 각 요소에 대해 매개변수로 설정된 콜백 함수를 실행하여 얻어진 요소들로 구성된 새로운 배열을 반환

```js
const works = [
  "상세페이지",
  "웹사이트리디자인",
  "클론코딩",
  "포트폴리오사이트",
  "클론코딩",
  "노션포트폴리오",
];

let htmlTags = "";

const personalWorks = works.map((work, index) => {
  const card = `
        <div class="card">
        <a href="#">${index}: ${work}</a>
        </div>`;

  return card;
});

htmlTags = personalWorks.join("");

document.querySelector("#cardWrap").innerHTML = htmlTags;
```

# 8. Math 객체

- min() 최솟값 반환
- max() 최대값 반환
- abs() 절대값 반환
- round() 반올림 한 정수 값 반환
- floor() 무조건 내림 한 정수 값 반환
- ceil() 무조건 올림 한 정수 값 반환
- pow() 거듭제곱 값 반환
- sqrt() 제곱근 값 반환
- log() 로그 값 반환
- random() 0 ~ 1 사이의 무작위 부동 소수점 숫자 반환

# 9. Date 객체

## 9.1 현재 날짜와 시간

```js
// 현재 날짜와 시간
const now = new Date();

document.querySelector("#show").innerHTML = now;
```

## 9.2 날짜 가져오기

- getFullYear()
- getMonth() [인덱스 번호를 가져와서 0부터 시작함. +1 해줘야함]
- getDate()

```js
// 날짜 가져오기
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
```

## 9.3 시간 가져오기

- getHours()
- getMinutes()
- getSeconds()

```js
// 시간 가져오기
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();
```

## 9.4 날짜와 시간 설정하기

```js
// 날짜와 시간 설정하기
// 연, 월, 일, 시, 분, 초
const a = new Date(2025, 11, 25, 10, 30, 25);
// 연, 월, 일, 시, 분
const b = new Date(1998, 8, 13, 18, 20);
// 연, 월, 일
const c = new Date(2000, 1, 20);
```

# 10. Set 객체

# 11. Map 객체

# 12. DOM (문서 객체 모델)

## 12.1 문서 객체 모델

- HTML 문서의 구조화 된 표현
- DOM 구조에 접근하여 HTML 문서의 구조, 스타일, 내용 등을 변경
- DOM은 웹 페이지, 즉 HTML 문서에 접근하여 문서를 읽고 조작할 수 있는 API(App Programming Interface)를 제공하는 인터페이스라고 할 수 있다.
- DOM은 자바스크립트 언어와는 독립적인 구조를 가지고 있다.

### 12.1.1 DOM의 구조

- HTML요소: element
- 속성: attribute
- 내용: content
- 웹 페이지 요소들과 요소들에 관련된 정보를 트리 형태로 가지고 있음
- 모든 HTML 요소들은 객체로 정의 된다.
- 자바스크립트에서는 DOM에서 제공하는 메서드(method)와 프로퍼티(property)를 통하여 HTML 요소들에 접근하거나 요소들을 수정할 수 있다.

### 12.1.2 DOM 메서드와 프로퍼티

```js
// 웹 페이지에 있는 <p> 요소의 내용 변경
// document 객체의 getElementById("show")은 웹 페이지에서 아이디 "show"
// 즉, <p> 요소를 가져옴
// innerHtml에 "안녕!"을 설정함으로써
// 단락 <p>의 내용을 "안녕!"으로 변경
// DOM method: getElementById()
// DOM property: innerHTML
document.getElementById("show").innerHTML = "안녕!";

// 문서가 로드될 때 h1 요소를 생성하는 예시
// 1. window 객체의 onload() 메서드는
// 자바스크립트 문서가 로드될 때 자동으로 호출
window.onload = function () {
  // 2. h1 요소를 생성하여 변수 element에 저장
  let element = document.createElement("h1");
  // 3. "글 제목" 텍스트 노드를 생성하여 변수 text에 저장
  let text = document.createTextNode("글 제목");
  // 4. element 요소에 text를 추가
  element.appendChild(text);
  // 5. document 객체의 body 요소에 element를 추가
  document.body.appendChild(element);
};
```

## 12.2 HTML 요소 선택

- 자바스크립트에서 웹페이지에 있는 HTML 요소를 추가, 수정, 삭제
- 제일 먼저 페이지 내에 존재하는 해당 요소를 선택

- 아이디(id) 이용
- 태그 이름(tag name) 이용
- 클래스 이름(class name) 이용
- CSS 선택자(selector) 이용

### 12.2.1 아이디(id)로 요소 선택

- getElementById() 메서드

```html
<p id="p1">안녕하세요.</p>
<!-- 1. 버튼을 클릭하면 changeColor('red')함수가 호출 -->
<!-- 이 때 'red'가 changeColor()의 매개변수 new_color에 복사 -->
<button onclick="changeColor('red');">빨강</button>
<!-- 2. 버튼을 클릭하면 changeColor('blue')함수가 호출 -->
<!-- 이 때 'blue'가 changeColor()의 매개변수 new_color에 복사 -->
<button onclick="changeColor('blue');">파랑</button>
<script>
  function changeColor(newColor) {
    // 3. Document 객체의 getElementById("p1")은 아이디 p1
    // 즉 <p> 요소를 반환하여 elem에 저장
    const elem = document.getElementById("p1");
    // 4. <p>요소의 속성인 style 객체의 color 속성을 의미
    // 여기에 new_color를 저장함으로써 "안녕하세요." 글자가 빨강,파랑으로 변경
    elem.style.color = newColor;
  }
</script>
```

### 12.2.2 태그이름(tag name)으로 요소 선택

- getElementsByTagName() 메서드

```html
<div id="parent">
  <p>안녕1</p>
  <p>안녕2</p>
  <p>안녕3</p>
  <p>안녕4</p>
  <p>안녕5</p>
</div>
<p id="show"></p>

<!-- js -->
<script>
  const parent = document.getElementById("parent");
  // 1. 객체 parent가 가리키는 <div>요소 내에 있는 모든 <p>요소의 콜렉션(collection)객체를 반환
  // 따라서 children에 저장된 요소들은 인덱스를 통해 접근할 수 있음
  const children = parent.getElementsByTagName("p");

  // 2. 세번째 <p>요소를 의미
  children[2].style.color = "red";
</script>
```

### 12.2.3 클래스 이름으로 요소 선택하기

- getElementsByClassName() 메서드

```html
<div id="parent">
  <p>안녕1</p>
  <p>안녕2</p>
  <p class="a">안녕3</p>
  <p class="a">안녕4</p>
  <p class="a">안녕5</p>
</div>

<!-- js -->
<script>
  const parent = document.getElementById("parent");
  // 1. 객체 x가 가리키는 아이디 parent 요소 내에서 클래스 a로 정의된 요소
  // "안녕3", "안녕4", "안녕5"의 콜렉션을 가져와서 y에 저장
  const children = parent.getElementsByClassName("a");
  console.log(children);

  // 2. 객체 children가 가리키는 세 개의 요소에 접근하기 위해 For문 사용
  // 배열이 아닌 HTMLCollection 객체라서 forEach 메서드 사용할 수 없다.
  for (let i = 0; i < children.length; i++) {
    children[i].style.color = "blue";
  }
  // [...children].forEach((child) => {
  //  child.style.color = "blue";
  // });
</script>
```

### **12.2.4 CSS 선택자로 요소 선택하기**

- querySelector(), querySelectorAll()

```html
<div id="parent">
  <p>안녕1</p>
  <p>안녕2</p>
  <p class="a">안녕3</p>
  <p class="a">안녕4</p>
  <p class="a">안녕5</p>
</div>

<!-- js -->
<script>
  // 1. p.a는 <p>요소의 클래스 a를 의미
  // querySelector()메서드는 CSS선택자가 선택한 요소 중 첫 번째 요소 반환
  // "안녕3"
  const p = document.querySelector("p.a");
  // 2. style객체의 배경색을 red
  p.style.backgroundColor = "red";
</script>
```

```html
<h1 id="title">글 제목</h1>
<p>단락1</p>
<ul>
  <li>항목1</li>
  <li class="item">항목2</li>
  <li class="item">항목3</li>
  <li class="item">항목4</li>
</ul>

<!-- js -->
<script>
  // 1. h1#title은 아이디가 title인 <h1>요소를 선택
  const x = document.querySelectorAll("h1#title");
  // 2. 페이지 내 모든 <p>요소를 선택
  const y = document.querySelectorAll("p");
  // 3. 클래스 이름이 item인 <li>요소를 선택
  const z = document.querySelectorAll("li.item");

  // 4. querySelectorAll()메서드가 반환한 요소들인 x,y,z 즉 NodeList 객체는
  // 인덱스를 통하여 접근 가능
  // x와 y는 하나의 요소로 구성되지만 콜렉션 구조를 가지기 때문에 x[0], y[0]으로 사용
  // z[1]은 두 번째 요소인 "항목3"을 의미
  x[0].style.backgroundColor = "red";
  y[0].style.backgroundColor = "green";
  z[1].style.backgroundColor = "blue";
</script>
```

## 12.3 HTML 요소 내용과 속성

### 12.3.1 요소 내용 가져오기

- 자바스크립트에서 HTML 요소의 내용을 가져오는 데는
- innerHTML

```js
const text = document.querySelector("#p1");
// 아이디 p1의 내용(HTML 코드 포함)을 가져옴
alert(text.innerHTML);
```

- innerText

```js
const text = document.querySelector("#p1");
// 아이디 p1 요소의 내용에서 순수한 텍스트만 가져옴
alert(text.innerText);
```

### 12.3.2 요소 속성 변경

- HTML 요소의 속성(attribute) 값 변경

```html
<img id="image" src="images/gallery-2.png" alt="gallery-2" />
<button id="imageChangeBtn">이미지 변경</button>

<!-- js -->
<script>
  const image = document.querySelector("#image");
  const imageChangeBtn = document.querySelector("#imageChangeBtn");
  imageChangeBtn.addEventListener("click", () => {
    image.src = "images/gallery-3.png";
  });
</script>
```

### 12.3.3 요소 CSS 변경

```js
const image = document.querySelector("#image");
const imageChangeBtn = document.querySelector("#imageChangeBtn");
imageChangeBtn.addEventListener("click", () => {
  image.src = "images/gallery-3.png";
  // 요소 CSS 변경하기
  image.style.width = "200px";
  image.style.border = "1px solid red";
});
```

## 12.4 HTML 폼 검증

## 12.5 DOM 노드

- DOM 트리의 가장 기본이 되는 HTML 요소, 속성, 텍스트 등은 모두 노드(node)에 속한다.
- 자바스크립트에서는 DOM을 이용하여 DOM 트리에 포함된 모든 노드에 접근하고 노드의 추가, 생성, 삭제 등의 조작을 할 수 있다.

### 12.5.1 노드의 종류

- 요소 노드(element node): body, p, div 등 모든 HTML 요소를 의미
- 속성 노드(attribute node): HTML 요소의 속성을 의미 src, alt ...
- 텍스트 노드(text node): HTML 문서에 있는 모든 텍스트를 의미
- 문서 노드(document node): HTML 문서 전체를 의미, DOM의 루트 노드(root node)
- 주석 노드(comment node): HTML 모든 주석을 의미

### 12.5.2 노드 추가하기

```html
<div id="box">
  <p>단락1</p>
  <p>단락2</p>
</div>

<!-- js -->
<script>
  // 1. 새로운 노드 생성
  // <p> 노드를 생성해서 변수에 저장
  const pElement = document.createElement("p");
  // 2. 텍스트 노드 생성
  const textNode = document.createTextNode("새로운 단락!");
  // 3. 생성한 텍스트 노드를 <p> 노드의 자식으로 추가
  pElement.appendChild(textNode);
  // 4. 아이디 box 요소 안에 <P> 노드를 자식으로 추가
  document.querySelector("#box").appendChild(pElement);
</script>
```

### 12.5.3 노드 삽입하기

```html
<div id="box">
  <p id="p1">단락1</p>
  <p id="p2">단락2</p>
</div>

<!-- js -->
<script>
  // 1. 새로운 노드 생성
  // <p> 노드를 생성해서 변수에 저장
  const pElement = document.createElement("p");
  // 2. 텍스트 노드 생성
  const textNode = document.createTextNode("새로운 단락!");
  // 3. 생성한 텍스트 노드를 <p> 노드의 자식으로 추가
  pElement.appendChild(textNode);
  // 4. 아이디 box 요소 안에 p2 요소 앞에 새로운 요소 삽입
  const p2 = document.querySelector("#p2");
  document.querySelector("#box").insertBefore(pElement, p2);
</script>
```

### 12.5.4 노드 삭제하기

```js
const p2 = document.querySelector("#p2");
p2.remove();
```

### 12.5.5 노드 변경하기

```js
const pElement = document.createElement("p");
const textNode = document.createTextNode("새로운 단락!");
pElement.appendChild(textNode);

const p1 = document.querySelector("#p1");
const box = document.querySelector("#box");

box.replaceChild(pElement, p1);
```

# 13. 이벤트

- event.html

## 13.1 이벤트란?

- 웹 페이지 에서 발생하는 사건을 의미
- 이벤트를 처리하는 함수를 event handler 또는 event listener라고 함

## 13.2 click 이벤트 (on click)

```html
<button onclick="handleClick()">클릭</button>
<button id="btn">클릭</button>
<button id="btn2">클릭</button>

<!-- js -->
<script>
  // 이벤트 핸들러
  function handleClick() {
    console.log("click 이벤트 설정");
  }

  // 이벤트 리스너
  document.querySelector("#btn").addEventListener("click", handleClick);
  document.querySelector("#btn2").addEventListener("click", function () {
    console.log("이벤트 함수 실행");
  });
</script>
```

## 13.3 change 이벤트

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>이벤트</title>
  </head>
  <body>
    <label for="input1">change 이벤트 핸들러</label>
    <input type="text" id="input1" onchange="handleChange(event)" />
    <br /><br />
    <label for="input2">input 이벤트 리스너</label>
    <input type="text" id="input2" /> <br /><br />

    <h3>change 이벤트 리스너</h3>
    <label for="check1">체크1</label>
    <input type="checkbox" id="check1" value="check1" />
    <label for="check2">체크2</label>
    <input type="checkbox" id="check2" value="check2" />
    <label for="check3">체크3</label>
    <input type="checkbox" id="check3" value="check3" /> <br /><br />

    <select name="" id="select">
      <option value="f1">FAMLISITE-1</option>
      <option value="f2">FAMLISITE-2</option>
      <option value="f3">FAMLISITE-3</option>
    </select>

    <!-- js -->
    <script>
      // change 이벤트 핸들러
      function handleChange(e) {
        const inputValue = e.target.value;
        console.log(inputValue);
      }

      // input 이벤트 리스너
      document.querySelector("#input2").addEventListener("input", (e) => {
        const value = e.target.value;
        console.log(value);
      });

      document
        .querySelectorAll("input[type='checkbox']")
        .forEach((checkbox) => {
          checkbox.addEventListener("change", checkedValue);
        });

      function checkedValue(e) {
        console.log(e.target.value);
      }

      document.querySelector("#select").addEventListener("change", (e) => {
        console.log(e.target.value);
      });
    </script>
  </body>
</html>
```

# 14. 실습 예제

## 14.1 버튼 상태 변경

- button-state-change.html

## 14.2 페이지의 스크롤 양 표시

- scroll-amount.html

## 15.3 데이터 다루기

- menu-list.html
- css/menu-list.css
- javascript/menuList.js
