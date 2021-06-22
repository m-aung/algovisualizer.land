import React from 'react';
import {NavHashLink,HashLink} from 'react-router-hash-link'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div>
            {/* <section className='title-head' >
                <strong >Welcome to Algo-Visualizer 2021</strong>
            </section> */}
            <section className="algo-nav-main" id='top'>
                <ul className="algo-nav-main">
                    <li>
                    <header className="algo-title">  
                    <NavHashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#sorting" className="algo-link">Sorting Algorithms</NavHashLink>
                    </header>
                    </li>
                    <li>
                    <header className="algo-title">  
                    <NavHashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#searching" className="algo-link">Searching Algorithms</NavHashLink>
                    </header>
                    </li>
                </ul>
            </section>
            <section className="algo-nav">
                <ul className='algo-list' id="sorting">
                    <li><NavHashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#bubble" className="algo-link">Bubble Sort</NavHashLink></li>
                    <li><HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#insertion" className="algo-link">Insertion Sort</HashLink></li>
                    <li><HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#merge" className="algo-link">Merge Sort</HashLink></li>
                    <li><HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#selection" className="algo-link">Selection Sort</HashLink></li>
                    <li><HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#quick" className="algo-link">Quick Sort</HashLink></li>
                    <li><HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#heap" className="algo-link">Heap Sort</HashLink></li>
                </ul>
                </section>
            <section className="algo-detail" id="bubble">
                <header className="algo-detail-head">Bubble Sort</header>
                <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#sorting" className="algo-detail-link">Sorting Algorithm</HashLink>
                <div className="algo-body">
                <q>
                    Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.
                </q> <br/>
                <a href="https://en.wikipedia.org/wiki/Bubble_sort" target="_blank">from Wikipedia </a><br/>
                <Link to="/sorting">Go to Visualizer</Link>
                <header className="algo-title">Performance</header>
                <p> 
                    Bubble sort has a worst-case and average complexity of О(n2), where n is the number of items being sorted. Most practical sorting algorithms have substantially better worst-case or average complexity, often O(n log n). Even other О(n2) sorting algorithms, such as insertion sort, generally run faster than bubble sort, and are no more complex. Therefore, bubble sort is not a practical sorting algorithm.

                    The only significant advantage that bubble sort has over most other algorithms, even quicksort, but not insertion sort, is that the ability to detect that the list is sorted efficiently is built into the algorithm. When the list is already sorted (best-case), the complexity of bubble sort is only O(n). By contrast, most other algorithms, even those with better average-case complexity, perform their entire sorting process on the set and thus are more complex. However, not only does insertion sort share this advantage, but it also performs better on a list that is substantially sorted (having a small number of inversions). Additionally, if this behavior is desired, it can be trivially added to any other algorithm by checking the list before the algorithm runs.

                    Bubble sort should be avoided in the case of large collections. It will not be efficient in the case of a reverse-ordered collection.
                    </p>
                </div>
                <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#insertion" className="algo-detail-link"><i className="fas fa-arrow-alt-circle-right"></i>&#9;Next</HashLink>
            </section>
            <section className="algo-detail" id="insertion">
                <header className="algo-detail-head">Insertion Sort</header>
                <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#sorting" className="algo-detail-link">Sorting Algorithm</HashLink>
                <div className="algo-body">
                <q>
                Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:</q>
                <ul>
                    <li>
                        Simple implementation: Jon Bentley shows a three-line C version, and a five-line optimized version
                    </li>
                    <li>
                        Efficient for (quite) small data sets, much like other quadratic sorting algorithms
                    </li>
                    <li>
                        More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or bubble sort
                    </li>
                    <li>
                        Adaptive, i.e., efficient for data sets that are already substantially sorted: the time complexity is O(kn) when each element in the input is no more than k places away from its sorted position
                    </li>
                    <li>
                        Stable; i.e., does not change the relative order of elements with equal keys
                    </li>
                    <li>
                        In-place; i.e., only requires a constant amount O(1) of additional memory space
                    </li>
                    <li>
                        Online; i.e., can sort a list as it receives it
                    </li>
                </ul>
                <br/>
                <a href="https://en.wikipedia.org/wiki/Insertion_sort" target="_blank">from Wikipedia </a><br/>
                <Link to="/sorting">Go to Visualizer</Link>
                <header className="algo-title">Performance</header>
                <q> 
                The best case input is an array that is already sorted. In this case insertion sort has a linear running time (i.e., O(n)). During each iteration, the first remaining element of the input is only compared with the right-most element of the sorted subsection of the array.

                The simplest worst case input is an array sorted in reverse order. The set of all worst case inputs consists of all arrays where each element is the smallest or second-smallest of the elements before it. In these cases every iteration of the inner loop will scan and shift the entire sorted subsection of the array before inserting the next element. This gives insertion sort a quadratic running time (i.e., O(n2)).

                The average case is also quadratic, which makes insertion sort impractical for sorting large arrays. However, insertion sort is one of the fastest algorithms for sorting very small arrays, even faster than quicksort; indeed, good quicksort implementations use insertion sort for arrays smaller than a certain threshold, also when arising as subproblems; the exact threshold must be determined experimentally and depends on the machine, but is commonly around ten.
                </q>
                </div>
                <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#merge" className="algo-detail-link"><i className="fas fa-arrow-alt-circle-right"></i>&#9;Next</HashLink>
            </section>
            <section className="algo-detail" id="merge">
                <header className="algo-detail-head">Merge Sort</header>
                <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#sorting" className="algo-detail-link">Sorting Algorithm</HashLink>
                <div className="algo-body">
                <q>
                    A natural merge sort is similar to a bottom-up merge sort except that any naturally occurring runs (sorted sequences) in the input are exploited. Both monotonic and bitonic (alternating up/down) runs may be exploited, with lists (or equivalently tapes or files) being convenient data structures (used as FIFO queues or LIFO stacks).[4] In the bottom-up merge sort, the starting point assumes each run is one item long. In practice, random input data will have many short runs that just happen to be sorted. In the typical case, the natural merge sort may not need as many passes because there are fewer runs to merge. In the best case, the input is already sorted (i.e., is one run), so the natural merge sort need only make one pass through the data. In many practical cases, long natural runs are present, and for that reason natural merge sort is exploited as the key component of Timsort
                </q> <br/>
                <a href="https://en.wikipedia.org/wiki/Merge_sort" target="_blank">from Wikipedia </a><br/>
                <Link to="/sorting">Go to Visualizer</Link>
                <header className="algo-title">Analysis</header>
                <p> 
                    In sorting n objects, merge sort has an average and worst-case performance of O(n log n). If the running time of merge sort for a list of length n is T(n), then the recurrence relation T(n) = 2T(n/2) + n follows from the definition of the algorithm (apply the algorithm to two lists of half the size of the original list, and add the n steps taken to merge the resulting two lists). The closed form follows from the master theorem for divide-and-conquer recurrences.

                    The number of comparisons made by merge sort in the worst case is given by the sorting numbers. These numbers are equal to or slightly smaller than (n ⌈lg n⌉ − 2⌈lg n⌉ + 1), which is between (n lg n − n + 1) and (n lg n + n + O(lg n)). Merge sort's best case takes about half as many iterations as its worst case.

                    For large n and a randomly ordered input list, merge sort's expected (average) number of comparisons approaches α·n fewer than the worst case, where 

                    In the worst case, merge sort uses approximately 39% fewer comparisons than quicksort does in its average case, and in terms of moves, merge sort's worst case complexity is O(n log n) - the same complexity as quicksort's best case.
                    
                    Merge sort is more efficient than quicksort for some types of lists if the data to be sorted can only be efficiently accessed sequentially, and is thus popular in languages such as Lisp, where sequentially accessed data structures are very common. Unlike some (efficient) implementations of quicksort, merge sort is a stable sort.

                    Merge sort's most common implementation does not sort in place; therefore, the memory size of the input must be allocated for the sorted output to be stored in (see below for variations that need only n/2 extra spaces).
                </p>
                <header className="algo-title">Optimizing Merge Sort</header>
                <p> 
                    On modern computers, locality of reference can be of paramount importance in software optimization, because multilevel memory hierarchies are used. Cache-aware versions of the merge sort algorithm, whose operations have been specifically chosen to minimize the movement of pages in and out of a machine's memory cache, have been proposed. For example, the tiled merge sort algorithm stops partitioning subarrays when subarrays of size S are reached, where S is the number of data items fitting into a CPU's cache. Each of these subarrays is sorted with an in-place sorting algorithm such as insertion sort, to discourage memory swaps, and normal merge sort is then completed in the standard recursive fashion. This algorithm has demonstrated better performance[example needed] on machines that benefit from cache optimization. (LaMarca {'&'} Ladner 1997)

                    Kronrod (1969) suggested an alternative version of merge sort that uses constant additional space. This algorithm was later refined. (Katajainen, Pasanen &#38; Teuhola 1996)

                    Also, many applications of external sorting use a form of merge sorting where the input get split up to a higher number of sublists, ideally to a number for which merging them still makes the currently processed set of pages fit into main memory.
                </p>
                </div>
                <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#selection" className="algo-detail-link"><i className="fas fa-arrow-alt-circle-right"></i>&#9;Next</HashLink>
            </section>
            <section className="algo-detail" id="selection">
                <header className="algo-detail-head">Selection Sort</header>
                <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#sorting" className="algo-detail-link">Sorting Algorithm</HashLink>
                <div className="algo-body">
                <q>
                In computer science, selection sort is an in-place comparison sorting algorithm. It has an O(n2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.

                The algorithm divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

                The time efficiency of selection sort is quadratic, so there are a number of sorting techniques which have better time complexity than selection sort. One thing which distinguishes selection sort from other sorting algorithms is that it makes the minimum possible number of swaps, n − 1 in the worst case.
                </q> <br/>
                <a href="https://en.wikipedia.org/wiki/Selection_sort" target="_blank">from Wikipedia </a><br/>
                <Link to="/sorting">Go to Visualizer</Link>
                <header className="algo-title">Analysis</header>
                <p> 
                Among quadratic sorting algorithms (sorting algorithms with a simple average-case of Θ(n2)), selection sort almost always outperforms bubble sort and gnome sort. Insertion sort is very similar in that after the kth iteration, the first k elements in the array are in sorted order. Insertion sort's advantage is that it only scans as many elements as it needs in order to place the k+1st element, while selection sort must scan all remaining elements to find the k+1st element.

                Simple calculation shows that insertion sort will therefore usually perform about half as many comparisons as selection sort, although it can perform just as many or far fewer depending on the order the array was in prior to sorting. It can be seen as an advantage for some real-time applications that selection sort will perform identically regardless of the order of the array, while insertion sort's running time can vary considerably. However, this is more often an advantage for insertion sort in that it runs much more efficiently if the array is already sorted or "close to sorted."

                While selection sort is preferable to insertion sort in terms of number of writes (n-1 swaps versus up to n(n-1)/2 swaps, with each swap being two writes), this is roughly twice the theoretical minimum achieved by cycle sort, which performs at most n writes. This can be important if writes are significantly more expensive than reads, such as with EEPROM or Flash memory, where every write lessens the lifespan of the memory.

                Selection sort can be implemented without unpredictable branches for the benefit of CPU branch predictors, by finding the location of the minimum with branch-free code and then performing the swap unconditionally.

                Finally, selection sort is greatly outperformed on larger arrays by  \Theta (n\log n) divide-and-conquer algorithms such as mergesort. However, insertion sort or selection sort are both typically faster for small arrays (i.e. fewer than 10–20 elements). A useful optimization in practice for the recursive algorithms is to switch to insertion sort or selection sort for "small enough" sublists.
                </p>
                <header className="algo-title">Variant</header>
                <p> 
                Heapsort greatly improves the basic algorithm by using an implicit heap data structure to speed up finding and removing the lowest datum. If implemented correctly, the heap will allow finding the next lowest element in \Theta (\log n) time instead of \Theta (n) for the inner loop in normal selection sort, reducing the total running time to \Theta (n\log n).

                A bidirectional variant of selection sort (called double selection sort or sometimes cocktail sort due to its similarity to cocktail shaker sort) finds both the minimum and maximum values in the list in every pass. This requires three comparisons per two items (a pair of elements is compared, then the greater is compared to the maximum and the lesser is compared to the minimum) rather than regular selection sort's one comparison per item, but requires only half as many passes, a net 25% savings.

                Selection sort can be implemented as a stable sort if, rather than swapping in step 2, the minimum value is inserted into the first position and the intervening values shifted up. However, this modification either requires a data structure that supports efficient insertions or deletions, such as a linked list, or it leads to performing writes.

                In the bingo sort variant, items are sorted by repeatedly looking through the remaining items to find the greatest value and moving all items with that value to their final location. Like counting sort, this is an efficient variant if there are many duplicate values: selection sort does one pass through the remaining items for each item moved, while Bingo sort does one pass for each value. After an initial pass to find the greatest value, subsequent passes move every item with that value to its final location while finding the next value as in the following pseudocode (arrays are zero-based and the for-loop includes both the top and bottom limits, as in Pascal):
                </p>
                </div>
                <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#quick" className="algo-detail-link"><i className="fas fa-arrow-alt-circle-right"></i>&#9;Next</HashLink>
            </section>
            <section className="algo-detail" id="quick">
                <header className="algo-detail-head">Quick Sort</header>
                <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#sorting" className="algo-detail-link">Sorting Algorithm</HashLink>
                <div className="algo-body">
                <q>
                    Quicksort is an in-place sorting algorithm. Developed by British computer scientist Tony Hoare in 1959[1] and published in 1961,[2] it is still a commonly used algorithm for sorting. When implemented well, it can be somewhat faster than merge sort and about two or three times faster than heapsort.[3][contradictory]

                    Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort.[4] The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting.

                    Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined. Efficient implementations of Quicksort are not a stable sort, meaning that the relative order of equal sort items is not preserved.

                    Mathematical analysis of quicksort shows that, on average, the algorithm takes O(n log n) comparisons to sort n items. In the worst case, it makes O(n2) comparisons, though this behavior is rare.
                </q> <br/>
                <a href="https://en.wikipedia.org/wiki/Quicksort" target="_blank">from Wikipedia </a><br/>
                <Link to="/sorting">Go to Visualizer</Link>
                <header className="algo-title">Analysis</header>
                <p> 
                Quicksort is a type of divide and conquer algorithm for sorting an array, based on a partitioning routine; the details of this partitioning can vary somewhat, so that quicksort is really a family of closely related algorithms. Applied to a range of at least two elements, partitioning produces a division into two consecutive non empty sub-ranges, in such a way that no element of the first sub-range is greater than any element of the second sub-range. After applying this partition, quicksort then recursively sorts the sub-ranges, possibly after excluding from them an element at the point of division that is at this point known to be already in its final location. Due to its recursive nature, quicksort (like the partition routine) has to be formulated so as to be callable for a range within a larger array, even if the ultimate goal is to sort a complete array. The steps for in-place quicksort are:
                </p>
                <ul>
                    <li>
                    If the range has less than two elements, return immediately as there is nothing to do. Possibly for other very short lengths a special-purpose sorting method is applied and the remainder of these steps skipped.
                    </li>
                    <li>
                    Otherwise pick a value, called a pivot, that occurs in the range (the precise manner of choosing depends on the partition routine, and can involve randomness).
                    </li>
                    <li>
                    Partition the range: reorder its elements, while determining a point of division, so that all elements with values less than the pivot come before the division, while all elements with values greater than the pivot come after it; elements that are equal to the pivot can go either way. Since at least one instance of the pivot is present, most partition routines ensure that the value that ends up at the point of division is equal to the pivot, and is now in its final position (but termination of quicksort does not depend on this, as long as sub-ranges strictly smaller than the original are produced).
                    </li>
                    <li>
                    Recursively apply the quicksort to the sub-range up to the point of division and to the sub-range after it, possibly excluding from both ranges the element equal to the pivot at the point of division. (If the partition produces a possibly larger sub-range near the boundary where all elements are known to be equal to the pivot, these can be excluded as well.)
                    </li>
                </ul>
                    The choice of partition routine (including the pivot selection) and other details not entirely specified above can affect the algorithm's performance, possibly to a great extent for specific input arrays. In discussing the efficiency of quicksort, it is therefore necessary to specify these choices first. Here we mention two specific partition methods.
                
                </div>
                <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#heap" className="algo-detail-link"><i className="fas fa-arrow-alt-circle-right"></i>&#9;Next</HashLink>
            </section>
            <section className="algo-detail" id="heap">
                <header className="algo-detail-head">Heap Sort</header>
                <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#sorting" className="algo-detail-link">Sorting Algorithm</HashLink>
                <div className="algo-body">
                <q>
                In computer science, selection sort is an in-place comparison sorting algorithm. It has an O(n2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.

                The algorithm divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

                The time efficiency of selection sort is quadratic, so there are a number of sorting techniques which have better time complexity than selection sort. One thing which distinguishes selection sort from other sorting algorithms is that it makes the minimum possible number of swaps, n − 1 in the worst case.
                </q> <br/>
                <a href="https://en.wikipedia.org/wiki/Heapsort" target="_blank">from Wikipedia </a><br/>
                <Link to="/sorting">Go to Visualizer</Link>
                <header className="algo-title">Analysis</header>
                <p> 
                The Heapsort algorithm involves preparing the list by first turning it into a max heap. The algorithm then repeatedly swaps the first value of the list with the last value, decreasing the range of values considered in the heap operation by one, and sifting the new first value into its position in the heap. This repeats until the range of considered values is one value in length.

                The steps are:
                </p>
                <ul>
                    <li>
                        Call the buildMaxHeap() function on the list. Also referred to as heapify(), this builds a heap from a list in O(n) operations.
                    </li>
                    <li>
                        Swap the first element of the list with the final element. Decrease the considered range of the list by one.
                    </li>
                    <li>
                        Call the siftDown() function on the list to sift the new first element to its appropriate index in the heap.
                    </li>
                    <li>
                        Go to step (2) unless the considered range of the list is one element.
                    </li>
                </ul>
                The buildMaxHeap() operation is run once, and is O(n) in performance. The siftDown() function is O(log n), and is called n times. Therefore, the performance of this algorithm is O(n + n log n) = O(n log n).
                <header className="algo-title">Variant</header>
                <span className="algo-subtitle">Floyd's heap construction</span>
                <p> 
                    The most important variation to the basic algorithm, which is included in all practical implementations, is a heap-construction algorithm by Floyd which runs in O(n) time and uses siftdown rather than siftup, avoiding the need to implement siftup at all.

                    Rather than starting with a trivial heap and repeatedly adding leaves, Floyd's algorithm starts with the leaves, observing that they are trivial but valid heaps by themselves, and then adds parents. Starting with element n/2 and working backwards, each internal node is made the root of a valid heap by sifting down. The last step is sifting down the first element, after which the entire array obeys the heap property.

                    The worst-case number of comparisons during the Floyd's heap-construction phase of Heapsort is known to be equal to 2n − 2s2(n) − e2(n), where s2(n) is the number of 1 bits in the binary representation of n and e2(n) is number of trailing 0 bits.

                    The standard implementation of Floyd's heap-construction algorithm causes a large number of cache misses once the size of the data exceeds that of the CPU cache.[6]:87 Much better performance on large data sets can be obtained by merging in depth-first order, combining subheaps as soon as possible, rather than combining all subheaps on one level before proceeding to the one above.
                </p>
                <span className="algo-subtitle">Bottom-up heapsort</span>
                <p> 
                    Bottom-up heapsort is a variant which reduces the number of comparisons required by a significant factor. While ordinary heapsort requires 2n log2 n + O(n) comparisons worst-case and on average,[9] the bottom-up variant requires n log2n + O(1) comparisons on average, and 1.5n log2n + O(n) in the worst case.

                    If comparisons are cheap (e.g. integer keys) then the difference is unimportant,[11] as top-down heapsort compares values that have already been loaded from memory. If, however, comparisons require a function call or other complex logic, then bottom-up heapsort is advantageous.

                    This is accomplished by improving the siftDown procedure. The change improves the linear-time heap-building phase somewhat, but is more significant in the second phase. Like ordinary heapsort, each iteration of the second phase extracts the top of the heap, a[0], and fills the gap it leaves with a[end], then sifts this latter element down the heap. But this element comes from the lowest level of the heap, meaning it is one of the smallest elements in the heap, so the sift-down will likely take many steps to move it back down. In ordinary heapsort, each step of the sift-down requires two comparisons, to find the minimum of three elements: the new node and its two children.

                    Bottom-up heapsort instead finds the path of largest children to the leaf level of the tree (as if it were inserting −∞) using only one comparison per level. Put another way, it finds a leaf which has the property that it and all of its ancestors are greater than or equal to their siblings. (In the absence of equal keys, this leaf is unique.) Then, from this leaf, it searches upward (using one comparison per level) for the correct position in that path to insert a[end]. This is the same location as ordinary heapsort finds, and requires the same number of exchanges to perform the insert, but fewer comparisons are required to find that location.

                    Because it goes all the way to the bottom and then comes back up, it is called heapsort with bounce by some authors.
                </p>
                </div>
                <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/home#top" className="algo-detail-link"><i className="fas fa-arrow-circle-up"></i>&#9;Top</HashLink>
            </section>
            <section className="algo-nav" id="searching">
                <ul className="algo-list">
                    <li>Coming soon ....</li>
                </ul>
                
            </section>
            <footer>
                MIT Licensed | Copyright &#169; 2021 Myo Aung. All Rights Reserved.
            </footer>
        </div>
    )
}
export default Home;