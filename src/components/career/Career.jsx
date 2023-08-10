import './Career.css';
import Job from './job/Job';


let countries = ['Select Country','India', 'USA', 'Japan', 'Indonesia', 'Taiwan', 'China', 'Puerto Rico', 'Switzerland', 'Germany', 'New Zealand'];

let city = ['Select City', 'India', 'USA', 'Japan', 'Indonesia', 'Taiwan', 'China', 'Puerto Rico', 'Switzerland', 'Germany', 'New Zealand'];

export default function Career(){

    return(
        <section className='career-container'>
            <h1 className='career-heading'>Careers</h1>

            <div className="filter">
                <select name="country" id="">
                    {countries.map((country)=> <option>{country}</option>)}
                </select>

                <select name="city" id="">
                    {city.map((city)=> <option>{city}</option>)}
                </select>
            </div>

            <div className='all-jobs'>
                <Job/>
                <Job/>
                <Job/>
                <Job/>
                <Job/>
                <Job/>

            </div>

        </section>
    )
}