import React from 'react';
import {NavHashLink,HashLink} from 'react-router-hash-link'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <center className="title"><strong>Welcome to Algo-Visualizer 2021</strong></center>
            <section>
                <header className="algo-title">
                    Sorting Algorithms
                </header>
                <nav>
                <ul className='algo-list'>
                    <li><NavHashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#bubble" className="algo-link">Bubble Sort</NavHashLink></li>
                    <li><HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#insertion" className="algo-link">Insertion Sort</HashLink></li>
                    <li><HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#merge" className="algo-link">Merge Sort</HashLink></li>
                    <li><HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#selection" className="algo-link">Selection Sort</HashLink></li>
                    <li><HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#quick" className="algo-link">Quick Sort</HashLink></li>
                    <li><HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#heap" className="algo-link">Heap Sort</HashLink></li>
                </ul>
                </nav>
            </section>
            <hr></hr>
            <section className="algo-detail" id="bubble">
                <header className="algo-title">Bubble Sort</header>
                <div className="algo-body">
                <q >
                    Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.
                </q> <br/>
                <a href="https://en.wikipedia.org/wiki/Bubble_sort" target="_blank">from Wikipedia </a><br/>
                <Link to="/sorting">Go to Visualizer</Link>
                </div>
            </section>
        </div>
    )
}
export default Home;