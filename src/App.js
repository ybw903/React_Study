import React, {Component} from 'react';
import './App.css';
import Custmoer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX:"auto"
  },
  table:{
    minWidth: 1080
  }
})

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
class App extends Component{
  //class대신에 function으로 되어있음
  //배열을 일일이 코딩할 필요
  render() {
    const{classes}=this.props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { custmoers.map(c=>{ return(<Custmoer key={c.id} id = {c.id} image={c.image} name ={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})}   
        </TableBody>
      </Table>
    </Paper>
    
    //react는 jsx문법을 따름
  );
}
}

export default withStyles(styles) (App);
