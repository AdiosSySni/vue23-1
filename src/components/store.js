import {reactive, ref} from 'vue'

let watchCount = ref(0)
let readCount = ref(0)
let isOpen = ref(false)
let wasRead = ref(false)

const news = reactive([
    {h1: 'News 1', text: 'lorem 1'},
    {h1: 'News 2', text: 'lorem 2'},
    {h1: 'News 3', text: 'lorem 3'},
    {h1: 'News 4', text: 'lorem 4'},
])

export function store(){
    return {
        news,
        watchCount,
        readCount,
        isOpen,
        wasRead,
    }
}