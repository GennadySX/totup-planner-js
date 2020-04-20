import React, {Component} from 'react'
import $ from 'jquery'

export default class Scheduler extends Component {

    constructor(props) {
        super(props)

        this.state = {}

    }

    componentDidMount() {
        this.activeIt()
    }

    activeIt() {
        $('.control-btn').not('.active').hover(function(){$(this).css('background', $(this).css('border-color'))},function(){$(this).css('background', '#fff')})
    }


    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12 control-block">
                        <button className="btn control-btn blue active" href="#">All</button>
                        <button className="btn control-btn orange" href="#">1–2,5 ans</button>
                        <button className="btn control-btn green" href="#">2,5–4/5 ans</button>
                        <button className="btn control-btn cyan" href="#">5–8 ans</button>
                        <button className="btn control-btn yellow" href="#">8–14 ans</button>
                        <button className="btn control-btn purple" href="#">adulte</button>
                        <button className="btn control-btn pink" href="#">Abo Supplementaire</button>
                    </div>

                    <div className="block col-md-12">
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
                                <td className="bg-muted">9:00-10:00</td>
                                <td className='lesson-block full orange'>
                                    <span>Yoga BB Full</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def ">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="orange">Music BB</span>
                                    <span className="blue">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def ">Music BB</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>

                                <td className='lesson-block block-empty'>

                                </td>

                            </tr>
                            <tr>
                                <td className="bg-muted ">10:00-11:00</td>
                                <td className='lesson-block'>
                                    <span className="def ">Yoga BB</span>
                                    <span className="def ">Bodysculpt</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def ">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>

                                <td className='lesson-block block-empty'>

                                </td>
                            </tr>
                            <tr>
                                <td className="bg-muted ">11:00-12:00</td>
                                <td className='lesson-block'>
                                    <span className="def ">Yoga BB</span>
                                    <span className="def ">Bodysculpt</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def ">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>

                                <td className='lesson-block block-empty'>

                                </td>
                            </tr>
                            <tr>
                                <td className="bg-muted ">12:00-13:00</td>
                                <td className='lesson-block'>
                                    <span className="def ">Yoga BB</span>
                                    <span className="def ">Bodysculpt</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def ">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>

                                <td className='lesson-block block-empty'>

                                </td>
                            </tr>
                            <tr>
                                <td className="bg-muted ">13:30-14:30</td>
                                <td className='lesson-block'>
                                    <span className="def ">Yoga BB</span>
                                    <span className="def ">Bodysculpt</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def ">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>

                                <td className='lesson-block block-empty'>

                                </td>
                            </tr>
                            <tr>
                                <td className="bg-muted ">14:30-15:30</td>
                                <td className='lesson-block'>
                                    <span className="def ">Yoga BB</span>
                                    <span className="def ">Bodysculpt</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def ">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>

                                <td className='lesson-block block-empty'>
                                    merci de suivre le programme sur notre site
                                </td>
                            </tr>
                            <tr>
                                <td className="bg-muted ">15:30-16:30</td>
                                <td className='lesson-block'>
                                    <span className="def ">Yoga BB</span>
                                    <span className="def ">Bodysculpt</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def ">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>

                                <td className='lesson-block block-empty'>
                                </td>
                            </tr>
                            <tr>
                                <td className="bg-muted ">16:30-17:30</td>
                                <td className='lesson-block'>
                                    <span className="def ">Yoga BB</span>
                                    <span className="def ">Bodysculpt</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def ">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>

                                <td className='lesson-block block-empty'>

                                </td>
                            </tr>
                            <tr>
                                <td className="bg-muted ">17:30-18:30</td>
                                <td className='lesson-block'>
                                    <span className="def ">Yoga BB</span>
                                    <span className="def ">Bodysculpt</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def ">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>

                                <td className='lesson-block block-empty'>

                                </td>
                            </tr>
                            <tr>
                                <td className="bg-muted ">18:30-19:30</td>
                                <td className='lesson-block'>
                                    <span className="def ">Yoga BB</span>
                                    <span className="def ">Bodysculpt</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def ">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>
                                <td className='lesson-block'>
                                    <span className="def">Music BB</span>
                                    <span className="def">core strength</span>
                                </td>

                                <td className='lesson-block block-empty'>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </>
        )
    }

}
