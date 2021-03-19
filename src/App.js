import './App.css';
import React, {useState} from 'react'
import moment from 'moment'

const App = () => {


    const [leftday, setLeftday] = useState(0)
    const onChange = (e) =>{

        // let now = new Date()
        // let dday = Date.parse(e.target.value)
        // let diff = now.getTime() - dday
        // let result = Math.floor(diff/(1000*60*60*24)) * -1
        // setLeftday(result)

        let selectedDate = moment(e.target.value)
        let nowDate = moment()
        //오늘 부터 현재까지 날짜수
        let diff = selectedDate.diff(nowDate, "days") + 1
        if (diff<=0){
            alert('현재 날짜 이후로 선택해주세요')
        }
        let next_day = null
        // 오늘 부터 선택 날짜 까지 주말 카운트
        let count = 0
        for (let i = 1; i <= diff; i++){
            next_day = nowDate.clone().add(i,'days').day()
            if ((next_day === 6) || (next_day ===0)){
                count++
            }
        }

        let left_days = diff - count
        setLeftday(left_days)
    }

    return (
        <div className="App">
            <input type={'date'} onChange={onChange}/>
            <h1>Left Day</h1>
            <div>{leftday}</div>
        </div>
    );
}

export default App;
