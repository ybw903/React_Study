import React from 'react';
import './App.css';
import Custmoer from './components/Customer';


const custmoers=[{
  'id' :1,
  'image' : 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' :2,
  'image' : 'https://placeimg.com/64/64/2',
  'name': '홍길숙',
  'birthday': '961222',
  'gender' : '여자',
  'job' : '프로그래머'
},
{
  'id' :3,
  'image' : 'https://placeimg.com/64/64/3',
  'name': '홍길현',
  'birthday': '961222',
  'gender' : '남자',
  'job' : '디자이너'
}
]

//BODY부분이라 보면 됨
function App() {
  //class대신에 function으로 되어있음
  return (
    <div>
   {
     //배열을 일일이 코딩할 필요 x
     custmoers.map(c=>{
       return(<Custmoer key={c.id} //map함수에 키 필요id={c.id}
          image={c.image}
          name ={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
          />
       )
    })
   }
    </div>
    
    //react는 jsx문법을 따름
  );
}

export default App;
