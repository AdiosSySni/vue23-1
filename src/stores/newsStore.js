import {ref, reactive} from 'vue'

const newsArr = reactive([
    {id: 0, title: 'News1', isOpen: false, wasRead: false, text: 'text1'},
    {id: 1, title: 'News2', isOpen: false, wasRead: false, text: 'text2'},
    {id: 2, title: 'News3', isOpen: false, wasRead: false, text: 'text3'}
])

const watchCount = ref(0)
const readCount = ref(0)

function getNews() {
    return newsArr
}

function open(id) {
    if(!newsArr[id].isOpen) {
      watchCount.value++
      newsArr[id].isOpen = true
    }
    else {
      newsArr[id].isOpen = false
    }
}

function read(id) {
    if(!newsArr[id].wasRead) {
      readCount.value++
      newsArr[id].wasRead = true
    }
    else {
      newsArr[id].wasRead = false
      readCount.value--
    }
}

export function store() {
    return {
        getNews,
        open,
        read,
        watchCount,
        readCount,
    }
}