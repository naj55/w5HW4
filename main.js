const commentContainer = document.getElementById("allComments");
document.getElementById("addComments").addEventListener("click", function (ev) {
  addComment(ev);
});

function addComment(ev) {
  let commentText, wrapDiv;
  const textBox = document.createElement("div");
  const replyButton = document.createElement("button");
  replyButton.className = "reply";
  replyButton.innerHTML = "Reply";
  replyButton.style.border = "none";
  replyButton.style.borderRadius = "9px";
  const likeButton = document.createElement("button");
  likeButton.innerHTML = "Like";
  likeButton.className = "likeComment";
  likeButton.style.border = "none";
  likeButton.style.borderRadius = "9px";
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "deleteComment";
  deleteButton.style.border = "none";
  deleteButton.style.borderRadius = "9px";

  const wrapDiv2 = document.createElement("div");
  wrapDiv2.className = "wrapper";
  wrapDiv2.style.marginLeft = 0;
  commentText = document.getElementById("newComment").value;
  document.getElementById("newComment").value = "";
  textBox.innerHTML = commentText;
  wrapDiv2.append(textBox, replyButton, likeButton, deleteButton);
  commentContainer.appendChild(wrapDiv2);
}

function hasClass(elem, className) {
  return elem.className.split(" ").indexOf(className) > -1;
}

document.getElementById("allComments").addEventListener("click", function (e) {
  if (hasClass(e.target, "reply")) {
    const parentDiv = e.target.parentElement;
    const wrapDiv = document.createElement("div");
    wrapDiv.style.marginLeft =
      (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + "px";
    wrapDiv.className = "wrapper";
    const textArea = document.createElement("textarea");
    textArea.style.marginRight = "20px";
    const addButton = document.createElement("button");
    addButton.className = "addReply";
    addButton.innerHTML = "Add";
    const cancelButton = document.createElement("button");
    cancelButton.innerHTML = "Cancel";
    cancelButton.className = "cancelReply";
    wrapDiv.append(textArea, addButton, cancelButton);
    parentDiv.appendChild(wrapDiv);
  } else if (hasClass(e.target, "addReply")) {
    addComment(e);
  } else if (hasClass(e.target, "likeComment")) {
    const likeBtnValue = e.target.innerHTML;
    e.target.innerHTML =
      likeBtnValue !== "Like" ? Number.parseInt(likeBtnValue) + 1 : 1;
  } else if (hasClass(e.target, "cancelReply")) {
    e.target.parentElement.innerHTML = "";
  } else if (hasClass(e.target, "deleteComment")) {
    e.target.parentElement.remove();
  }
});

const likeButton = document.createElement("button");
likeButton.innerHTML = "Like";
likeButton.className = "likeBlog";
likeButton.id = "likeBlogg";
likeButton.style.textAlign = "left";
likeButton.style.border = "none";
likeButton.style.borderRadius = "9px";
const wrapDiv3 = document.getElementById("likes");
wrapDiv3.append(likeButton);

document.getElementById("likeBlogg").addEventListener("click", function (e) {
  if (hasClass(e.target, "likeBlog")) {
    const likeBtnValue1 = e.target.innerHTML;
    e.target.innerHTML =
      likeBtnValue1 !== "Like" ? Number.parseInt(likeBtnValue1) + 1 : 1;
  }
});
