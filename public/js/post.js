// const newFormHandler = async (event) => {
//     event.preventDefault();
  
//     const comment = document.querySelector('#comment-comment').value.trim();
  
//     if (comment) {
//       const response = await fetch(`/api/comments`, {
//         method: 'POST',
//         body: JSON.stringify({ comment }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/post/:id');
//       } else {
//         alert('Failed to add comment');
//       }
//     }
//   };

//   document
//   .querySelector('.new-comment-form')
//   .addEventListener('submit', newFormHandler);