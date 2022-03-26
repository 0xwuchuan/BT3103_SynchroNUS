<template>
  <div id="app">
    <div class="comments-outside">
      <div class="comments-header">
        <div class="comments-stats">
          <span>Comments: {{ comments.length }}</span>
        </div>
        <div class="post-owner">
          <div class="avatar">
            <img :src="creator.avatar" alt="" />
          </div>
          <div class="username">
            <a href="#">@{{ creator.user }}</a>
          </div>
        </div>
      </div>
      <div class="comments">
        <div :class="['custom-scrollbar', 'comments-wrapper']">
          <div
            v-for="comment in comments"
            :comment="comments"
            :key="comment.id"
          >
            <div class="comment">
              <div class="avatar">
                <img :src="comment.avatar" alt="" />
              </div>
              <div class="text">
                <a class="username" href="#">@{{ comment.user }}</a>
                <form>{{ comment.text }}</form>
              </div>
              <button id="editComment" @click.prevent="editComment(comment.id)">
                Edit
              </button>
              <button
                id="deleteComment"
                @click.prevent="deleteComment(comment.id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div class="reply">
          <div class="avatar">
            <img :src="current_user.avatar" alt="" />
          </div>
          <input
            id="comment-text"
            type="text"
            v-model.trim="reply"
            class="reply--text"
            placeholder="Leave a comment..."
            maxlength="250"
            required
            @keyup.enter="submitComment"
          />
          <button class="reply--button" @click.prevent="submitComment">
            Comment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getFirestore,
  doc,
  collection,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth, firebaseApp } from "../firebase";

const db = getFirestore(firebaseApp);
const current_user = auth.currentUser;

export default {
  name: "CommentSection",
  components: {},
  data() {
    return {
      reply: "",
      creator: {
        avatar: "http://via.placeholder.com/100x100/a74848",
        user: "eventCreator",
      },
      current_user: {
        avatar: "http://via.placeholder.com/100x100/a74848",
        user: "user",
      },
      comments: [],
    };
  },
  mounted() {
    this.getComments();
  },
  methods: {
    async getComments() {
      const querySnapshot = await getDocs(collection(db, "comments"));
      const comments = this.comments;
      querySnapshot.forEach((doc) => {
        comments.push({ ...doc.data(), id: doc.id });
        console.log({ ...doc.data(), id: doc.id });
      });
    },
    async submitComment() {
      const commentRef = doc(collection(db, "comments")); //doc(db, "comments", "event1") set to under one event doc?
      const setComment = await setDoc(commentRef, {
        //id: 1,
        user: current_user.uid, //.displayName (better option)
        avatar: "http://via.placeholder.com/100x100/a74848", //current_user.photoURL,
        text: this.reply,
      })
        .then((data) => {
          console.log(data);
          console.log("comment stored");
          console.log(setComment);
        })
        .catch((error) => {
          console.log(error);
        });
      document.getElementById("comment-text").value = "";
    },
    async editComment(id) {
      const commentRef = doc(db, "comments", id);
      await updateDoc(commentRef, {
        text: "edited comment",
      });
      console.log("comment has been edited");
    },
    async deleteComment(id) {
      confirm("Your comment will be deleted");
      await deleteDoc(doc(db, "comments", id));
      console.log("comment has been deleted");
    },
  },
};
</script>

<<<<<<< HEAD
<style>
.comment {
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;
  color: #333;
  background-color: #f2f2f2;
  border-radius: 30px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.comment .avatar {
  align-self: flex-start;
}

.comment .avatar > img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  align-self: start;
}

.comment .text {
  text-align: left;
  margin-left: 5px;
}

.comment .text span {
  margin-left: 5px;
}

.comment .text .username {
  font-weight: bold;
  color: #333;
}
#editComment {
  position: relative;
  left: 445px;
  top: 12px;
}

#deleteComment {
  position: relative;
  left: 455px;
  top: 12px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  border-radius: 20px;
}

=======
<style scoped>
>>>>>>> main
a {
  text-decoration: none;
}

hr {
  display: block;
  height: 10px;
  border: 0;
  border-top: 1px solid #ececec;
  margin: 1em 0;
  padding: 0;
  border-radius: 20px;
}

.comments-outside {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  max-width: 1000px;
  border-radius: 20px;
}

.comments-header {
  background-color: #c8c8c8;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: #333;
  min-height: 80px;
  font-size: 20px;
  max-width: 1000px;
  border-radius: 20px;
}

.comments-header .comments-stats span {
  margin-left: 10px;
}

.post-owner {
  display: flex;
  align-items: center;
}

.post-owner .avatar > img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}

.post-owner .username {
  margin-left: 5px;
}

.post-owner .username > a {
  color: #333;
}

.comments {
  margin-top: 20px;
  padding: 20px;
  padding-top: 0;
}

.comments-wrapper {
  max-height: 250px;
  overflow-y: auto;
  padding-right: 10px;
  border-radius: 20px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #fff;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  background-color: #fff;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

/* Reply component */
.reply {
  display: flex;
  position: relative;
  align-items: center;
  background-color: #ebebeb;
  border-radius: 30px;
  padding: 5px 10px;
  overflow: hidden;
}

.reply .avatar {
  position: absolute;
}

.reply .avatar > img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

.reply .reply--text {
  min-height: 40px;
  padding: 10px 10px 10px 55px;
  margin-right: 10px;
  border: 0;
  color: #333;
  width: 90%;
  outline: 0;
  background-color: transparent;
  box-shadow: none;
}

.reply input.reply--text:valid {
  margin-right: 71px;
}

.reply input.reply--text:valid + .reply--button {
  right: 10px;
}

.reply .reply--button {
  position: absolute;
  right: -100px;
  border: 1px solid #2a629c;
  background-color: transparent;
  color: #2a629c;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 15px;
  line-height: 1.5;
  border-radius: 30px;
  outline: 0;
}

.reply .reply--button:hover {
  color: #fff;
  background-color: #2a629c;
}

.reply .reply--button:focus,
.reply .reply--button:active {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

hr {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

