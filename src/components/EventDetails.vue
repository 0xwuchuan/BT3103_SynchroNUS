<template>
    <body class="u-body u-xl-mode bg-gradient-to-r from-primary to-secondary">
        <section class="u-clearfix u-gradient u-section-1" id="sec-7b98">
            <div class="u-clearfix u-sheet u-sheet-1">
                <div class="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
                    <div class="u-layout">
                        <div class="u-layout-row">
                            <div class="u-container-style u-image u-image-round u-layout-cell u-radius-23 u-shading u-size-60 u-image-1" data-image-width="1500" data-image-height="1000">
                                <div class="u-container-layout u-container-layout-1"><span class="u-icon u-icon-rectangle u-text-white u-icon-1"><svg class="u-svg-link" viewBox="0 0 55 55" style=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-20fb"></use></svg><svg class="u-svg-content" viewBox="0 0 55 55" x="0px" y="0px" id="svg-20fb" style="enable-background:new 0 0 55 55;"><path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752
                                  c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348
                                  c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98
                                  c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033
                                  c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55
                                  c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287
                                  c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104
                                  c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1
                                  c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764
                                  l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5
                                  c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957
                                  c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545
                                  c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.52,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8
                                  s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.346-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545
                                  c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313
                                  c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z"></path></svg></span>
                            <p class="u-text u-text-1">Joined by {{ this.numusers }} users</p>
                            <h2 class="u-align-center u-text u-text-default u-text-2">{{ this.title }}</h2>
                            <a href="https://nicepage.com/html5-template" class="u-border-2 u-border-hover-palette-1-base u-border-white u-btn u-btn-round u-button-style u-hover-palette-1-base u-none u-radius-50 u-btn-3">Health</a>
                            <p class="u-align-center u-text u-text-3" id = "info"><br>Location: {{ this.location }}<br>Expiry Date: {{ this.expiry }}<br>
                                <br>{{ this.description }}
                            </p>
                            <router-link :to ="this.link"  v-if = "this.user.email == this.creator" href="https://nicepage.com/joomla-templates" class="u-border-2 u-border-white u-btn u-btn-round u-button-style u-hover-white u-none u-radius-14 u-text-hover-black u-btn-5">EDIT EVENT</router-link>
                            <button v-else @click="requestToJoin(this.id)" class="u-border-2 u-border-white u-btn u-btn-round u-button-style u-hover-white u-none u-radius-14 u-text-hover-black u-btn-6">Register for Event</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </body>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
const db = getFirestore(firebaseApp);

export default {
    name: "EventDetails",
    data() {
      return {
        description: 'asd',
        location: '',
        expiry: '',
        title: '',
        numusers: '',
        creator: '',
        user: false,
        link: ''
      }
    },
    props: {
      id: {required:true}
    },
    methods: {
      async requestToJoin(eventId) { // this.user should be the one clicking to request
        const eventRef = doc(db, "events", eventId);
        const request = await updateDoc(eventRef, {
            requesters: arrayUnion(this.user.email)
        })
        console.log(request)
        console.log("request success")
      },
      async acceptApplicant(userId, eventId) {
        const eventRef = doc(db, "events", eventId);
        const accept = await updateDoc(eventRef, {
            requesters: arrayRemove(userId),
            participants: arrayUnion(userId)
        })
        console.log(accept)
      }
    },
    mounted() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user)
                this.user = user;
                console.log("USER" + this.user.email)
                console.log("CREATOR" + this.creator)
            }
        })
    },
   
    beforeMount(){
      async function display(eventid){
        //console.log("displaying")
        let eventRef = doc(db, "events", eventid)
        let eventSnap = await getDoc(eventRef)
        console.log("Document data:", eventSnap.data());
        var info = eventSnap.data()
        return info
        }
      if (this.id){
        console.log(this.id)
        display(this.id).then( (info) => {
          //console.log(this.description)
          this.description = info.description
          this.location = info.location
          this.expiry = info.expiryDate
          this.title = info.title
          this.numusers = info.numOfParticipants
          this.creator = info.userEmail
          this.link = "/edit/" + this.id
          console.log("Creator2"+info.userEmail)
          //console.log(this.description)
        })
      }
    }
    
}
</script>

<style scoped>
.u-layout-row {
  position:relative;
  overflow:visible;
}
.u-section-1 .u-sheet-1 {
  min-height: 753px;
}

.u-section-1 .u-layout-wrap-1 {
  margin: 60px auto;
}

.u-section-1 .u-image-1 {
  min-height: 406px;
  background-image: linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("../assets/gym.jpeg");
  background-position: 50% 50%;
}

.u-section-1 .u-container-layout-1 {
  padding: 0 8px;
}

.u-section-1 .u-icon-1 {
  width: 32px;
  height: 32px;
  margin: 19px auto 0 12px;
  padding: 3px;
}

.u-section-1 .u-text-1 {
  margin: -29px 341px 0 54px;
  display:flex;
  position: relative;
}

.u-section-1 .u-text-2 {
  margin: 58px auto 0;
}

.u-section-1 .u-btn-1 {
  border-style: solid;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 1px;
  margin: 10px auto 0 458px;
}

.u-section-1 .u-btn-2 {
  border-style: solid;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 1px;
  margin: -46px auto 0 302px;
}

.u-section-1 .u-btn-3 {
  border-style: solid;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 1px;
  margin:  auto;
}

.u-section-1 .u-btn-4 {
  border-style: solid;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 1px;
  margin: -45px auto 0 726px;
}

.u-section-1 .u-text-3 {
  margin: 19px 22px 0;
}

.u-section-1 .u-btn-5 {
  border-style: solid;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0px;
  margin: -14px 30px auto auto;

}

.u-section-1 .u-btn-6 {
  border-style: solid;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0px;
  margin: -49px 22px 0 auto;
}

@media (max-width: 1199px) {
  .u-section-1 .u-sheet-1 {
    min-height: 683px;
  }

  .u-section-1 .u-btn-6 {
    margin-top: -28px;
    margin-right: 0;
  }

  .u-section-1 .u-layout-wrap-1 {
    position: relative;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-image-1 {
    min-height: 335px;
  }

  .u-section-1 .u-text-1 {
    margin-right: 194px;
  }

  .u-section-1 .u-btn-1 {
    margin-left: 258px;
  }

  .u-section-1 .u-btn-2 {
    margin-left: 102px;
  }

  .u-section-1 .u-btn-3 {
    margin-left: 390px;
  }

  .u-section-1 .u-btn-4 {
    margin-left: 526px;
  }

  .u-section-1 .u-text-3 {
    margin-left: 0;
    margin-right: 0;
  }

  .u-section-1 .u-btn-5 {
    margin-right: 0;
  }
}

@media (max-width: 991px) {
  .u-section-1 .u-sheet-1 {
    min-height: 606px;
  }

  .u-section-1 .u-image-1 {
    min-height: 100px;
  }

  .u-section-1 .u-text-1 {
    margin-right: 0;
  }

  .u-section-1 .u-btn-1 {
    margin-left: 38px;
  }

  .u-section-1 .u-btn-2 {
    margin-left: 0;
  }

  .u-section-1 .u-btn-3 {
    margin-left: 170px;
  }

  .u-section-1 .u-btn-4 {
    margin-left: 306px;
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-sheet-1 {
    min-height: 543px;
  }

  .u-section-1 .u-btn-1 {
    margin-left: 0;
  }

  .u-section-1 .u-btn-3 {
    margin-left: 0;
  }

  .u-section-1 .u-btn-4 {
    margin-left: 126px;
  }
}

@media (max-width: 575px) {
  .u-section-1 .u-sheet-1 {
    min-height: 473px;
  }

  .u-section-1 .u-btn-4 {
    margin-left: 0;
  }
}
</style>