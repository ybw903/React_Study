//react => import & export
import React from'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Custmoer extends React.Component{
render(){
    return(
        <div>
           <TableRow>
               <TableCell>{this.props.id}</TableCell>
               <TableCell><img src={this.props.image} alt='profile'/></TableCell>
               <TableCell>{this.props.name}</TableCell>
               <TableCell>{this.props.birthday}</TableCell>
               <TableCell>{this.props.job}</TableCell>
               <TableCell>{this.props.gender}</TableCell>
           </TableRow>
        </div>
        //props를 사용하여 구조화되어 출력 시킬것임
    )
}
}
//component는 React요소 => 화면에 출력, React요소는 jsx문법에 따름 =><div>컨테이너로 감싸야만 함


export default Custmoer;