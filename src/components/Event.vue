<template>
    <section class="u-align-left u-clearfix u-gradient u-section-1" id="carousel_d3c0">
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1"><!--blog--><!--blog_options_json--><!--{"type":"Recent","source":"","tags":"","count":""}--><!--/blog_options_json-->
        <div class="u-blog u-expanded-width u-blog-1">
          <div class="u-repeater u-repeater-1"><!--blog_post-->
            <div class="u-blog-post u-container-style u-opacity u-opacity-65 u-radius-18 u-repeater-item u-shape-round u-white">
              <div class="u-container-layout u-similar-container u-container-layout-1"><!--blog_post_header-->
                <h2 class="u-blog-control u-text u-text-1">
                  <router-link class="u-post-header-link" to="/page1"><!--blog_post_header_content-->{{ tit }}<!--/blog_post_header_content--></router-link>
                </h2><!--/blog_post_header-->
                <a class="u-post-header-link" href="{{ link }}"><!--blog_post_image-->
                  <img src= "../assets/58159270-01.jpeg" alt="" class="u-blog-control u-expanded-width u-image u-image-default u-image-1" data-image-width="150" data-image-height="100"><!--/blog_post_image-->
                </a><!--blog_post_content-->
                <div class="u-blog-control u-post-content u-text u-text-2"><!--blog_post_content_content-->{{ description }}<!--/blog_post_content_content--></div><!--/blog_post_content--><!--blog_post_metadata-->
                <div class="u-blog-control u-metadata u-text-grey-40 u-metadata-1"><!--blog_post_metadata_date-->
                  <span class="u-meta-date u-meta-icon"><!--blog_post_metadata_date_content-->{{ date }}<!--/blog_post_metadata_date_content--></span><!--/blog_post_metadata_date-->
                </div><!--/blog_post_metadata-->
              </div>
            </div><!--/blog_post-->
          </div>
        </div>
      </div>
    </section>
</template>

<script>
  export default {
    name: 'Event',
    props: {
      tit: { required: true, type: String },
      img: {required: false},//maybe set default img
      description: {required: true, type: String},
      date: {required: true, type: String},
      link: {required: true},
      imageUrl: {required: false}

    }
  }
</script>


<style scoped>
 .u-section-1 {
  background-image: linear-gradient(to right, #4c7397, #ff7e5b);
}

.u-section-1 .u-sheet-1 {
  min-height: 920px;
}

.u-section-1 .u-blog-1 {
  margin-top: 60px;
  margin-bottom: 60px;
}

.u-section-1 .u-repeater-1 {
  grid-template-columns: calc(33.3333% - 6.66667px) calc(33.3333% - 6.66667px) calc(33.3333% - 6.66667px);
  grid-gap: 10px 10px;
  min-height: 778px;
  grid-auto-columns: calc(33.3333% - 6.66667px);
}

.u-section-1 .u-container-layout-1 {
  padding: 30px;
}

.u-section-1 .u-text-1 {
  margin-bottom: 0;
  font-size: 1.875rem;
  font-weight: 700;
  background-image: none;
}

.u-section-1 .u-image-1 {
  height: 140px;
  margin: 20px auto 0 0;
}

.u-section-1 .u-text-2 {
  margin: 20px 0 0;
}

.u-section-1 .u-metadata-1 {
  margin-left: 0;
  font-size: 0.875rem;
}

.u-section-1 .u-container-layout-2 {
  padding: 30px;
}

.u-section-1 .u-text-3 {
  margin-bottom: 0;
  font-size: 1.875rem;
  font-weight: 700;
  background-image: none;
}

.u-section-1 .u-image-2 {
  height: 140px;
  margin: 20px auto 0 0;
}

.u-section-1 .u-text-4 {
  margin: 20px 0 0;
}

.u-section-1 .u-metadata-2 {
  margin-left: 0;
  font-size: 0.875rem;
}

.u-section-1 .u-container-layout-3 {
  padding: 30px;
}

.u-section-1 .u-text-5 {
  margin-bottom: 0;
  font-size: 1.875rem;
  font-weight: 700;
  background-image: none;
}

.u-section-1 .u-image-3 {
  height: 140px;
  margin: 20px auto 0 0;
}

.u-section-1 .u-text-6 {
  margin: 20px 0 0;
}

.u-section-1 .u-metadata-3 {
  margin-left: 0;
  font-size: 0.875rem;
}

.u-section-1 .u-container-layout-4 {
  padding: 30px;
}

.u-section-1 .u-text-7 {
  margin-bottom: 0;
  font-size: 1.875rem;
  font-weight: 700;
  background-image: none;
}

.u-section-1 .u-image-4 {
  height: 140px;
  margin: 20px auto 0 0;
}

.u-section-1 .u-text-8 {
  margin: 20px 0 0;
}

.u-section-1 .u-metadata-4 {
  margin-left: 0;
  font-size: 0.875rem;
}

.u-section-1 .u-container-layout-5 {
  padding: 30px;
}

.u-section-1 .u-text-9 {
  margin-bottom: 0;
  font-size: 1.875rem;
  font-weight: 700;
  background-image: none;
}

.u-section-1 .u-image-5 {
  height: 140px;
  margin: 20px auto 0 0;
}

.u-section-1 .u-text-10 {
  margin: 20px 0 0;
}

.u-section-1 .u-metadata-5 {
  margin-left: 0;
  font-size: 0.875rem;
}

.u-section-1 .u-container-layout-6 {
  padding: 30px;
}

.u-section-1 .u-text-11 {
  margin-bottom: 0;
  font-size: 1.875rem;
  font-weight: 700;
  background-image: none;
}

.u-section-1 .u-image-6 {
  height: 140px;
  margin: 20px auto 0 0;
}

.u-section-1 .u-text-12 {
  margin: 20px 0 0;
}

.u-section-1 .u-metadata-6 {
  margin-left: 0;
  font-size: 0.875rem;
}

.u-section-1 .u-container-layout-7 {
  padding: 30px;
}

.u-section-1 .u-text-13 {
  margin-bottom: 0;
  font-size: 1.875rem;
  font-weight: 700;
  background-image: none;
}

.u-section-1 .u-image-7 {
  height: 140px;
  background-image: url("../assets/58159270-01-7.jpeg");
  background-position: 50% 50%;
  margin: 20px auto 0 0;
}

.u-section-1 .u-text-14 {
  margin: 20px 0 0;
}

.u-section-1 .u-metadata-7 {
  margin-left: 0;
  font-size: 0.875rem;
}

.u-section-1 .u-container-layout-8 {
  padding: 30px;
}

.u-section-1 .u-text-15 {
  margin-bottom: 0;
  font-size: 1.875rem;
  font-weight: 700;
  background-image: none;
}

.u-section-1 .u-image-8 {
  height: 140px;
  background-image: url("../assets/5-0-8.jpeg");
  background-position: 50% 50%;
  margin: 20px auto 0 0;
}

.u-section-1 .u-text-16 {
  margin: 20px 0 0;
}

.u-section-1 .u-metadata-8 {
  margin-left: 0;
  font-size: 0.875rem;
}

.u-section-1 .u-container-layout-9 {
  padding: 30px;
}

.u-section-1 .u-text-17 {
  margin-bottom: 0;
  font-size: 1.875rem;
  font-weight: 700;
  background-image: none;
}

.u-section-1 .u-image-9 {
  height: 140px;
  background-image: url("../assets/2.jpeg");
  background-position: 50% 50%;
  margin: 20px auto 0 0;
}

.u-section-1 .u-text-18 {
  margin: 20px 0 0;
}

.u-section-1 .u-metadata-9 {
  margin-left: 0;
  font-size: 0.875rem;
}

.u-section-1 .u-container-layout-10 {
  padding: 30px;
}

.u-section-1 .u-text-19 {
  margin-bottom: 0;
  font-size: 1.875rem;
  font-weight: 700;
  background-image: none;
}

.u-section-1 .u-image-10 {
  height: 140px;
  background-image: url("../assets/4.jpeg");
  background-position: 50% 50%;
  margin: 20px auto 0 0;
}

.u-section-1 .u-text-20 {
  margin: 20px 0 0;
}

.u-section-1 .u-metadata-10 {
  margin-left: 0;
  font-size: 0.875rem;
}

.u-section-1 .u-container-layout-11 {
  padding: 30px;
}

.u-section-1 .u-text-21 {
  margin-bottom: 0;
  font-size: 1.875rem;
  font-weight: 700;
  background-image: none;
}

.u-section-1 .u-image-11 {
  height: 140px;
  background-image: url("../assets/3.12.jpeg");
  background-position: 50% 50%;
  margin: 20px auto 0 0;
}

.u-section-1 .u-text-22 {
  margin: 20px 0 0;
}

.u-section-1 .u-metadata-11 {
  margin-left: 0;
  font-size: 0.875rem;
}

.u-section-1 .u-container-layout-12 {
  padding: 30px;
}

.u-section-1 .u-text-23 {
  margin-bottom: 0;
  font-size: 1.875rem;
  font-weight: 700;
  background-image: none;
}

.u-section-1 .u-image-12 {
  height: 140px;
  background-image: url("../assets/2.jpeg");
  background-position: 50% 50%;
  margin: 20px auto 0 0;
}

.u-section-1 .u-text-24 {
  margin: 20px 0 0;
}

.u-section-1 .u-metadata-12 {
  margin-left: 0;
  font-size: 0.875rem;
}

@media (max-width: 1199px) {
  .u-section-1 .u-sheet-1 {
    min-height: 784px;
  }

  .u-section-1 .u-blog-1 {
    height: auto;
  }

  .u-section-1 .u-repeater-1 {
    min-height: 642px;
    grid-auto-columns: calc(33.333333333333336% - 6.66667px);
  }

  .u-section-1 .u-image-1 {
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-image-2 {
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-image-3 {
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-image-4 {
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-image-5 {
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-image-6 {
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-image-7 {
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-image-8 {
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-image-9 {
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-image-10 {
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-image-11 {
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-image-12 {
    margin-right: initial;
    margin-left: initial;
  }
}

@media (max-width: 991px) {
  .u-section-1 .u-repeater-1 {
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
    min-height: 1106px;
    grid-auto-columns: calc(50% - 5.0000025px);
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-repeater-1 {
    grid-template-columns: 100%;
    grid-auto-columns: calc(100% - 0px);
  }

  .u-section-1 .u-container-layout-1 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-1 .u-container-layout-2 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-1 .u-container-layout-3 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-1 .u-container-layout-4 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-1 .u-container-layout-5 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-1 .u-container-layout-6 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-1 .u-container-layout-7 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-1 .u-container-layout-8 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-1 .u-container-layout-9 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-1 .u-container-layout-10 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-1 .u-container-layout-11 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-1 .u-container-layout-12 {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 575px) {
  .u-section-1 .u-repeater-1 {
    grid-auto-columns: 100%;
  }

  .u-section-1 .u-text-1 {
    font-size: 1.5rem;
  }

  .u-section-1 .u-text-3 {
    font-size: 1.5rem;
  }

  .u-section-1 .u-text-5 {
    font-size: 1.5rem;
  }

  .u-section-1 .u-text-7 {
    font-size: 1.5rem;
  }

  .u-section-1 .u-text-9 {
    font-size: 1.5rem;
  }

  .u-section-1 .u-text-11 {
    font-size: 1.5rem;
  }

  .u-section-1 .u-text-13 {
    font-size: 1.5rem;
  }

  .u-section-1 .u-text-15 {
    font-size: 1.5rem;
  }

  .u-section-1 .u-text-17 {
    font-size: 1.5rem;
  }

  .u-section-1 .u-text-19 {
    font-size: 1.5rem;
  }

  .u-section-1 .u-text-21 {
    font-size: 1.5rem;
  }

  .u-section-1 .u-text-23 {
    font-size: 1.5rem;
  }
}.u-section-2 .u-sheet-1 {
  min-height: 500px;
}

.u-section-2 .u-layout-wrap-1 {
  margin-top: 60px;
  margin-bottom: 60px;
}

.u-section-2 .u-image-1 {
  min-height: 400px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJkZWZhdWx0LWltYWdlLXNvbGlkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCgl4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCAyNjUiIHN0eWxlPSJ3aWR0aDogNDAwcHg7IGhlaWdodDogMjY1cHg7Ij4KPGxpbmVhckdyYWRpZW50IGlkPSJYTUxJRF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMDAiIHkxPSIyNzMuMTEzIiB4Mj0iMjAwIiB5Mj0iOC4xMTMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyNjUpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNBMEM3RDMiLz4KCTxzdG9wICBvZmZzZXQ9IjAuMzE5NSIgc3R5bGU9InN0b3AtY29sb3I6I0MwRDRERSIvPgoJPHN0b3AgIG9mZnNldD0iMC43Njg4IiBzdHlsZT0ic3RvcC1jb2xvcjojRThFNUVDIi8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRjhFREY1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxyZWN0IGlkPSJYTUxJRF82MF8iIGZpbGw9InVybCgjWE1MSURfMl8pIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2NSIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIwMC4xIiB5MT0iOS45OTc1NTllLTAyIiB4Mj0iMjAwLjEiIHkyPSIxODYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyNjUpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNBMEM3RDMiLz4KCTxzdG9wICBvZmZzZXQ9IjAuMzE5NSIgc3R5bGU9InN0b3AtY29sb3I6I0MwRDRERSIvPgoJPHN0b3AgIG9mZnNldD0iMC43Njg4IiBzdHlsZT0ic3RvcC1jb2xvcjojRThFNUVDIi8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRjhFREY1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIGZpbGw9InVybCgjU1ZHSURfMV8pIiBkPSJNMzk1LjMsOTYuMmMtNS0wLjgtNi4xLDEuMS04LjUsMi45Yy0xLTIuMy0yLjYtNi4yLTcuNy01YzEuNS01LjMtMi42LTguNC03LjctOC40CgljLTAuNiwwLTEuMiwwLjEtMS44LDAuMmMtMS44LTQuMS02LTYuOS0xMC43LTYuOWMtNi41LDAtMTEuOCw1LjMtMTEuOCwxMS44YzAsMC40LDAsMC45LDAuMSwxLjNjLTEuMi0wLjgtMi41LTEuMy0zLjktMS4zCgljLTQuMywwLTcuOSw0LjItNy45LDkuNGMwLDEuMiwwLjIsMi40LDAuNiwzLjVjLTAuNS0wLjEtMS0wLjEtMS42LTAuMWMtNi45LDAtMTIuNSw1LjUtMTIuNywxMi40Yy0wLjktMC4yLTEuOS0wLjQtMi45LTAuNAoJYy02LjQsMC0xMS43LDUuMi0xMi41LDExLjhjLTEuMi0wLjQtMi41LTAuNi0zLjktMC42Yy01LjksMC0xMC44LDMuOC0xMi4xLDguOWMtMi40LTItNS41LTMuMi04LjktMy4yYy02LDAtMTEuMSwzLjctMTIuOCw4LjgKCWMtMS41LTEuNC0zLjgtMi4zLTYuMy0yLjNjLTIuMSwwLTQuMSwwLjYtNS41LDEuN2gtMC4xYy0xLjMtNS41LTYuMi05LjUtMTIuMS05LjVjLTIuNCwwLTQuNywwLjctNi42LDEuOWMtMS40LTAuNy0zLTEuMi00LjgtMS4yCgljLTAuMywwLTAuNSwwLTAuOCwwYy0xLjUtNC4xLTUuMi03LTkuNS03Yy0zLjEsMC01LjksMS41LTcuOCwzLjljLTIuMi00LjgtNi44LTguMi0xMi4yLTguMmMtNS42LDAtMTAuNSwzLjctMTIuNSw4LjgKCWMtMi4xLTAuOS00LjQtMS41LTYuOS0xLjVjLTYuOCwwLTEyLjUsMy45LTE0LjUsOS4zYy0wLjIsMC0wLjUsMC0wLjcsMGMtNS4yLDAtOS42LDMuMi0xMS40LDcuOGMtMi43LTIuOC03LTQuNS0xMS44LTQuNQoJYy0zLjMsMC02LjQsMC45LTguOSwyLjNjLTIuMS02LjUtOC0xMi4yLTE4LjEtOS45Yy0yLjctMi4zLTYuMy0zLjctMTAuMS0zLjdjLTIuNSwwLTQuOCwwLjYtNi45LDEuNmMtMi4yLTUuOS03LjktMTAuMS0xNC42LTEwLjEKCWMtOC42LDAtMTUuNiw3LTE1LjYsMTUuNmMwLDAuOSwwLjEsMS43LDAuMiwyLjVjLTIuNi01LTcuOC04LjQtMTMuOC04LjRjLTguMywwLTE1LjEsNi41LTE1LjYsMTQuNmMtMi45LTMuMi03LTUuMy0xMS43LTUuMwoJYy03LjQsMC0xMy41LDUuMS0xNS4yLDEyYy0yLjktMy41LTkuOC02LTE0LjctNnYxMTkuMmg0MDBWMTAyQzQwMCwxMDIsNDAwLDk3LDM5NS4zLDk2LjJ6Ii8+CjxwYXRoIGZpbGw9IiM4RUE4QkIiIGQ9Ik00MDAsMjA2LjJjMCwwLTI1LjMtMTkuMi0zMy42LTI1LjdjLTEzLjQtMTAuNi0yMy4xLTEyLjktMzEuNy03cy0yMy45LDE5LjctMjMuOSwxOS43cy01OC45LTYzLjktNjEuNS02Ni40CgljLTEuNS0xLjQtMy42LTEuNy01LjUtMC45Yy01LjIsMi40LTE3LjYsOS43LTI0LjUsMTIuN2MtNi45LDIuOS00MS01MC43LTQ5LjYtNTNzLTg0LjMsODMuMy0xMDEuNCw3NS4xcy0yNi45LTIuMy0zNS40LDMuNQoJYy04LjYsNS45LTExLDUuOS0xNS45LDguMnMtMTcuMS01LjktMTcuMS01LjlWMjY1YzAsMCw0MDAsMC4yLDQwMCwwdi01OC44SDQwMHoiLz4KPHBhdGggZmlsbD0iIzdFOTZBNiIgZD0iTTMzMy40LDE3OWMtMTMuMS05LjMtNDAsNC42LTU1LjEsMTAuN2MtMjMuNiw5LjYtOTQtNTQuNC0xMDcuMi01OS43YzAsMC00LjIsMy43LTkuNiw3LjYKCWMtMy41LTAuNC04LjQtNS43LTkuOS00LjdjLTQuNiwzLjEtMTcuOCwxNS40LTI4LjMsMjYuNmMtMTAuNSwxMS4zLTExLjcsMC0xNS44LTAuNmMtMi41LTAuNC01NC4xLDQyLjUtNTguNyw0My4xCglDMjIuMywyMDUuMywwLDE5Ny41LDAsMTk3LjVWMjY1bDQwMC0wLjF2LTUzLjNDNDAwLDIxMS42LDM0NC44LDE4Ny4xLDMzMy40LDE3OXoiLz4KPHBhdGggZmlsbD0iIzc4OEY5RSIgZD0iTTAsMjY0Ljl2LTU4LjZjMCwwLDguMiwxLjgsMTEuMyw1LjNjMy4xLDMuNiwyNi4xLTQuMiwyNi4xLDQuN3MwLjUsNC4yLDAuNSwxNC44YzAsMTAuNywyMy00LjIsMzguMS0xOC40CglzMzQuOS00OS4yLDM2LTM1YzEsMTQuMi0xNS4xLDM5LjItMjQsNTYuNEM3OS4xLDI1MS40LDUxLjcsMjY1LDUxLjcsMjY1TDAsMjY0Ljl6Ii8+CjxwYXRoIGZpbGw9IiM3ODhGOUUiIGQ9Ik0xMDAsMjY1YzAsMCw2Ni43LTEyNS4xLDY4LjMtMTE2LjhzLTYuOCwyOS43LDIuMSwyNi4xYzguOS0zLjYsMTQuNi0xNiwxOC44LTkuNXMxNi4yLDM4LjYsMjEuOSwzMy44CgljNS43LTQuNywyMS40LTEzLjEsMjIuNC02LjVjMSw2LjUtMSw1LjMtNS43LDIwLjJDMjIzLjEsMjI3LjEsMjAwLDI2NSwyMDAsMjY1aC0xMGMwLDAsNi0yNC44LDguNi0zNC45YzIuNi0xMC4xLTMuNy0xOS0xMi04LjMKCXMtMjMsMjItMjQsMTcuOHMtNS43LTMwLjMtMTguOC0xNC4yYy0xMywxNi0zMy44LDM5LjctMzMuOCwzOS43aC0xMFYyNjV6Ii8+CjxwYXRoIGZpbGw9IiM3ODhGOUUiIGQ9Ik0yNDUsMjY1YzAsMCwxOS44LTU0LjcsMzMuNC02NC4yczUzLjctMjcuOSw0Ni45LTEzLjZjLTYuOCwxNC4yLTExLDM0LjQtMjAuMyw0OS44CgljLTkuNCwxNS40LTE4LjgsMjYuMS0xNC4xLDEzLjZjNC43LTEyLjUsNi40LTIzLjMsMy43LTIzLjFDMjcxLjMsMjI5LjEsMjYwLDI2NSwyNjAsMjY1SDI0NXoiLz4KPC9zdmc+Cg==");
  background-position: 50% 50%;
}

.u-section-2 .u-container-layout-1 {
  padding: 23px 30px;
}

.u-section-2 .u-layout-cell-2 {
  min-height: 400px;
}

.u-section-2 .u-container-layout-2 {
  padding: 30px;
}

.u-section-2 .u-text-1 {
  margin: 0 auto;
}

.u-section-2 .u-text-2 {
  margin: 20px 0 0;
}

@media (max-width: 1199px) {
  .u-section-2 .u-sheet-1 {
    min-height: 430px;
  }

  .u-section-2 .u-layout-wrap-1 {
    position: relative;
  }

  .u-section-2 .u-image-1 {
    min-height: 330px;
  }

  .u-section-2 .u-layout-cell-2 {
    min-height: 330px;
  }
}

@media (max-width: 991px) {
  .u-section-2 .u-sheet-1 {
    min-height: 353px;
  }

  .u-section-2 .u-image-1 {
    min-height: 253px;
  }

  .u-section-2 .u-layout-cell-2 {
    min-height: 100px;
  }
}

@media (max-width: 767px) {
  .u-section-2 .u-sheet-1 {
    min-height: 580px;
  }

  .u-section-2 .u-image-1 {
    min-height: 380px;
  }

  .u-section-2 .u-container-layout-1 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-2 .u-container-layout-2 {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 575px) {
  .u-section-2 .u-sheet-1 {
    min-height: 439px;
  }

  .u-section-2 .u-image-1 {
    min-height: 239px;
  }
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%
}
</style>