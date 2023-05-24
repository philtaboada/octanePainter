import './spinner.css'
import handle from '../assets/handWood.svg'
import brush from '../assets/brush.svg'
import building from '../assets/building.svg'


const Spinner: any = () => (
    <div className="loader">
        <div className='container-loader'>
            <div className="svg-icon handle">
                <img width={'100px'} className='brush-svg' src={brush} alt="brush" />
                <img width={'100px'} className='handle-svg' src={handle} alt="handle" />
            </div>
            <div className="svg-icon building">
                <img width={'100px'} src={building} alt="built" />
            </div>
        </div>
    </div>
);

export default Spinner;