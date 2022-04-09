<template>
    <div class="pt-10 px-10 main grid place-items-start h-fit ">
        
        <!--card-->
        <div class="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-full">
            
            <!--profile-image-->
            <div class="profile mx-auto rounded-full py-2 w-16 "> 
                <img src="@/assets/avatar.png" alt="profile">
            </div>
            <!--name-->
            <div class="name text-gray-800 text-2xl font-medium mt-4 ">
                <p>{{this.userName}}</p>
            </div>
            <!--year-->
            <div class="username text-gray-500">
                <p>Year {{this.userYear}}</p>
            </div>
            <!-- edit button -->
            <div class=" mt-8">
                <button @click="toEdit" class="inline-block bg-secondary hover:bg-opacity-90  py-2 px-4 text-white w-full font-semibold rounded-lg shadow-lg" type="button" >
                    Edit Profile 
                </button>
        
        
</div>
</div>
</div>  
<br>

</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { updateDoc, doc, getDoc } from "firebase/firestore";
import router from '../router/index'

const db = getFirestore(firebaseApp);


export default {
    name: 'ProfileCard',

    components: {
    },
    data() {
    return {
      user: false,
      userVerified: false,
      userEmail: "",
      userName: "",
      userGender: "",
      userTeleHandle: "",
      userYear: "",
    }
  },
  methods: {
      checkAuthStatus() {
            return new Promise( (resolve, reject) => {
                try{
                    const auth = getAuth() 
                    onAuthStateChanged(auth, (user) => {
                        this.userEmail = user.email
                        this.userVerified = user.emailVerified
                        resolve(user)
                    })
                } catch (err) {
                    reject(err)
                }
            })
        },
        toEdit() {
            router.push('/editprofile')
        },

        
        editUser() {  
            const userRef = doc(db, "Users", String(this.userEmail))
            
            if(this.name != null) {
                updateDoc(userRef, {
                    name: this.name
                });
                this.userName = this.name
                console.log("edited name")
                alert("Edited name to " + this.name)
                this.name = null   
            }   

            if(this.gender != null) {
                updateDoc(userRef, {
                    gender: this.gender
                });
                this.userGender = this.gender
                alert("Edited gender to " + this.gender)
                console.log("edited gender")
                this.gender = null  
            }   
            if(this.teleHandle != null) {
                updateDoc(userRef, {
                    teleHandle: this.teleHandle
                });
                this.userTeleHandle = this.teleHandle
                alert("Edited telegram handle to " + this.teleHandle)
                console.log("edited teleHandle")
                this.teleHandle = null  

            }   

            if(this.year != null) {
                updateDoc(userRef, {
                    year: this.year
                });
                this.userYear = this.year
                alert("Edited year to " + this.year)
                console.log("edited year")
                this.year = null
            }
            document.getElementById('editForm').reset();

        }
  },

    async mounted() {
        this.user = await this.checkAuthStatus()    
        console.log(this.userVerified)
        const userRef = await doc(db, "Users", String(this.userEmail))
        const userDoc = await getDoc(userRef)
        
        
    
        if (userDoc.exists()) {
            const userData = await userDoc.data();
            console.log(userData);
            this.userName = userData.name
            this.userGender = userData.gender
            this.userTeleHandle = userData.teleHandle
            this.userYear = userData.year
        } else {
            console.log("No such document!");
        }
    }
}
</script>

<style>

</style>