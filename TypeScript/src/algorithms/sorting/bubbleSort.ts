import { swap } from './../../util';
const bubbleSort = (array: number[]) => {
    let temp;

    for (let i = 0; i < array.length - 1; i++)
        for (let j = array.length - 1; j > i; j--)
            if (array[j] < array[j - 1])
                swap(array, j, j - 1);
}