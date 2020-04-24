import React, {Component} from 'react'
import $ from 'jquery'
import {data} from '../fakeData/data'


const Planner = (props) => {
    const {state, hour} = props
    const day = state.week
    const colors = state.colors
    return (
        <>
            {state.index.map((e, eI) =>
                (day[hour][eI + 1]) ?
                    (day[hour][eI + 1].length <= 1) ?
                        (
                            <td key={eI} className={(state.active === 'all' || state.active === colors[day[hour][eI + 1][0].type].name) ?
                                `lesson-block full ${colors[day[hour][eI + 1][0].type].color}` :
                                `lesson-block full ${state.active}`} datatype={colors[day[hour][eI + 1][0].type]}>
                                <span>{day[hour][eI + 1][0].title}</span></td>)
                        : (<td key={eI} className={'lesson-block'}>{
                            Array.from(day[hour][eI + 1]).map((item, index) =>
                                (<span key={index}
                                    className={(state.active === 'all' || state.active === colors[item.type].name) ? colors[item.type].color : 'def'}>{item.title}</span>))}</td>)
                    : <td key={eI} className='lesson-block'><span className={'is'}></span></td>
            )}
        </>
    )
}

export default class Scheduler extends Component {

    constructor(props) {
        super(props)
        this.state = {
            week: [],
            colors: {
                a: {name: 'a', color: 'orange'},
                b: {name: 'b', color: 'green'},
                c: {name: 'c', color: 'blue'},
                d: {name: 'd', color: 'yellow'},
                e: {name: 'e', color: 'purple'},
                f: {name: 'f', color: 'pink'}
            },
            index: [{}, {}, {}, {}, {}, {}],
            active: 'all'
        }
    }

    componentDidMount() {
        this.activeIt()


        this.setState({week: this.realizeIt()}, () => console.log('state ', this.state))
    }


    realizeIt() {
        let state = {9: [], 10: [], 11: [], 12: [], 123: [], 13: [], 14: [], 15: [], 16: [], 17: [], 18: []}
        data.map((item, index) =>
            state[item.time][new Date(item.date).getDay()] = (state[item.time][new Date(item.date).getDay()]) ?
                [...state[item.time][new Date(item.date).getDay()], item]
                : [item]
        )
        return state
    }

    activeIt() {
        // $('.control-btn').not('.active').hover(function () {$(this).css('background', $(this).css('border-color'))},  function(e) {
        //     if ($(this).hasClass('active') === false) $(this).css('background', '#fff')
        // })

        const _ = this
        $('.control-btn').click((e) => {
            $('.control-btn.active').removeClass('active')
            $(e.target).addClass('active')
            _.setState({active: $(e.target).data('type')})
        })
    }


    render() {
        return (
            <>
                <div className="block col-md-12">
                </div>
                <div className="row">
                    <div className="col-md-12 control-block">
                        <button className="btn control-btn blue active" data-type="all">All</button>
                        <button className="btn control-btn orange" data-type="a">1–2,5 ans</button>
                        <button className="btn control-btn green" data-type="b">2,5–4/5 ans</button>
                        <button className="btn control-btn cyan" data-type="c">5–8 ans</button>
                        <button className="btn control-btn yellow" data-type="d">8–14 ans</button>
                        <button className="btn control-btn purple" data-type="e">adulte</button>
                        <button className="btn control-btn pink" data-type="f">Abo Supplementaire</button>
                    </div>

                    <div className="block col-md-12">
                        {(this.state.week && this.state.week[9]) ?
                            <table className="table table-bordered">
                                <thead className="thead bg-muted">
                                <tr className="table-head">
                                    <th className='white-d'></th>
                                    <th scope="col">LU / MO</th>
                                    <th scope="col">MA / TUE</th>
                                    <th scope="col">ME / WED</th>
                                    <th scope="col">JE / THU</th>
                                    <th scope="col">VE / FRI</th>
                                    <th scope="col">SA / SAT</th>
                                    <th scope="col">DI / SUN</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="bg-muted ">09:00-10:00</td>
                                    <Planner state={this.state} hour={9}/>
                                    <td className='lesson-block block-empty'></td>
                                </tr>
                                <tr>
                                    <td className="bg-muted ">10:00-11:00</td>
                                    <Planner state={this.state} hour={10}/>
                                    <td className='lesson-block block-empty'></td>
                                </tr>
                                <tr>
                                    <td className="bg-muted ">11:00-12:00</td>
                                    <Planner state={this.state} hour={11}/>
                                    <td className='lesson-block block-empty'></td>
                                </tr>
                                <tr>
                                    <td className="bg-muted ">12:00-13:00</td>
                                    <Planner state={this.state} hour={12}/>
                                    <td className='lesson-block block-empty'></td>
                                </tr>
                                <tr>
                                    <td className="bg-muted ">12:30-13:30</td>
                                    <Planner state={this.state} hour={123}/>
                                    <td className='lesson-block block-empty'></td>
                                </tr>
                                <tr>
                                    <td className="bg-muted ">13:30-14:30</td>
                                    <Planner state={this.state} hour={13}/>
                                    <td className='lesson-block block-empty'>merci de suivre le programme sur notre site</td>
                                </tr>
                                <tr>
                                    <td className="bg-muted ">14:30-15:30</td>
                                    <Planner state={this.state} hour={14}/>
                                    <td className='lesson-block block-empty'></td>
                                </tr>
                                <tr>
                                    <td className="bg-muted ">15:30-16:30</td>
                                    <Planner state={this.state} hour={15}/>
                                    <td className='lesson-block block-empty'></td>
                                </tr>

                                <tr>
                                    <td className="bg-muted ">16:30-17:30</td>
                                    <Planner state={this.state} hour={16}/>
                                    <td className='lesson-block block-empty'></td>
                                </tr>
                                <tr>
                                    <td className="bg-muted ">17:30-18:30</td>
                                    <Planner state={this.state} hour={17}/>
                                    <td className='lesson-block block-empty'></td>
                                </tr>
                                <tr>
                                    <td className="bg-muted ">18:30-19:30</td>
                                    <Planner state={this.state} hour={18}/>
                                    <td className='lesson-block block-empty'></td>
                                </tr>
                                </tbody>
                            </table>
                            : <div>Loading...</div>
                        }
                    </div>
                </div>
            </>
        )
    }

}
