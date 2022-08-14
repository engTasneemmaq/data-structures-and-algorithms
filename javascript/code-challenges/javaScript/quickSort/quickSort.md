⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩

## quick Sort

## Challenge Summary
Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort.The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting.


## Challenge Description
Review the pseudocode, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.


## Big O
Time: O(n^2) Space: O(n)


## Solution>>>
![quick sort](../assest/quickSort.png)


## Pseudocode 
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp



## Quick Sort Code>>>>
[QuickSort.js link code](./quickSort.js)



## WhiteBoard >>>
![quick sort white board](../assest/quickSort-whiteBoard.png)

## test >>>
![quick sort test](../assest/quickSort-test.png)