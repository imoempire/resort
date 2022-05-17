export const ADD_BOOK = "ADD_book";


export const addbook = (book)=>{
    book.id = Math.random().toString();
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('Bookings')
        .add(book).then((docs)=>{
            console.log(docs)
        });
    }

};
// export const deletebook = (bookId)=>{

//         return(dispatch, state, {getFirestore})=>{
//             getFirestore().collection('books')
//             .doc(bookId).delete().then(()=>{})
//         }

// };

// export const editbook = (updatebook)=>{
//         return(dispatch, state, {getFirestore})=>{
//             getFirestore().collection('books')
//             .doc(updatebook.id).set(updatebook)
//             .then(()=>{})
//         }

// };

// export const getAllbooks = ()=>{
//     return(dispatch, state, {getFirestore})=>{
//         getFirestore()
//         .collection('books')
//         .orderBy("Name",)
//         .onSnapshot(
//             (snapshot)=>{
//                 let books = [];
//                 snapshot.forEach((doc)=>{
//                     books.push({...doc.data(), id:doc.id})
//                 });
//                 dispatch({
//                     type: SET_ALL_BOOK,
//                     payload: books
//                 })
//             })
//     }
// }