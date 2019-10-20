//react => import & export
import React from'react'

class Custmoer extends React.Component{
render(){
    return(
        <div>
            <CustmoerProfile id={this.props.id} image={this.props.img} name={this.props.name}>
            </CustmoerProfile>
            <CustmoerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
        </div>
        //props를 사용하여 구조화되어 출력 시킬것임
    )
}
}
//component는 React요소 => 화면에 출력, React요소는 jsx문법에 따름 =><div>컨테이너로 감싸야만 함

class CustmoerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image}alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustmoerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Custmoer;