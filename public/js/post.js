const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment-comment').value.trim();
    let splitUrl = location.pathname.split('/');
    console.log(splitUrl);
    let post_id = splitUrl[2];


    if (comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('Failed to add comment');
      }
    }
  };

  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);